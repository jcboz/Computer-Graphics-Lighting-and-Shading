//notes: 

// Always execute in strict mode (less bug)
'use strict';
var animating = true;

var globalXRotate = 0; // these are used to keep track of how far in the x and y direction the eye has been rotated around. Units are degrees
var globalYRotate = 0;

var globcubeVertexPositions;
var globSphereVertexPositions;
var globLightVertexPositions;

var light_ambient = [0.1, 0.1, 0.1, 1.0]
var light_diffuse = [1.0, 1.0, 1.0, 1.0]
var light_specular = [1.0, 1.0, 1.0, 1.0]

var attenuation_constant_location;
var attenuation_linear_location;
var attenuation_quadratic_location;
var shininess_location;
var light_info = {
    "light_position" : light_location,
    // "light_ambient" : [0.1, 0.1, 0.1, 1.0],
    // "light_diffuse" : [1.0, 1.0, 1.0, 1.0],
    // "light_specular" : [1.0, 1.0, 1.0, 1.0],
    // "light_distance" : [0.0, 10.0, 0.0, 0.0],
    "attenuation_constant" : 0.01,
    "attenuation_linear" : 0.1,
    "attenuation_quadratic" : 0.01,
    // "reflect_ambient" : [0.2, 0.2, 0.2, 1.0],
    // "reflect_diffuse" : [1.0, 0.8, 0.0, 1.0],
    // "reflect_specular" : [1.0, 1.0, 1.0, 1.0],
    "shininess" : 100
}
//instead of using material, use color
var isCone = false;
var isCube = false;
var isCylinder = false;
var isSphere = false;
var isTaurus = false;
var isMaze = true;

var isAnimatingZ = false; 
var isAnimatingX = false;
var isAnimatingY = false;
var isAnimatingZneg = false; 
var isAnimatingXneg = false;
var isAnimatingYneg = false;
var animateFriction = false;


var eyex = 0;
var eyey = 5;
var eyez = 15;
var atx = 0;
var aty = 0;
var atz = 0;
var upx = 0;
var upy = 1;
var upz = 0;

var eye = [eyex, eyey, eyez, 1]

var left = -1;
var right = 1;
var bottom = -1;
var topa = 1;
var near = -1;
var far = -100;

var normals;
var l;
var vVec;
var r;


var topView = false;

var pointX = 0;
var pointY = 0;

var n = 0; 
/* to1DF32Array(a2DArray)
 *
 * This function turns an array of 4-element arrays a2DArray into a packed
 * 1-dimensional array of 32-bit floating-point numbers.
 *
 * NOTE: This function should not be here. It should be in your library.
 */
function to1DF32Array(a2DArray)
{

    var size = a2DArray.length;

    if(size == 0)
    {
        console.log("[alib/to1DF32Array - DEBUG]: size is 0");
        return new Float32Array([]);
    }

    // Turn 2D array into 1D array
    
    var result = [];
    var index = 0;

    for(var i = 0; i < size; i++)
    {
        var anElement = a2DArray[i];
        if(anElement.length != 4) {
            console.log("[laib/to1DF32Array - ERROR]: Not a 4-element vector");
        }
        result[index] = anElement[0];
        result[index + 1] = anElement[1];
        result[index + 2] = anElement[2];
        result[index + 3] = anElement[3];
        index += 4;
    }

    return new Float32Array(result);
}

// These variables must be global variables.
// Some callback functions may need to access them.
var gl = null;
var canvas = null;
var ctm_location;
var model_view_location;
var projection_location;
var light_position_location;
var vNormal_location;

var xtheta = 4;
var ytheta = 4;
var ztheta = 4;
var subxtheta = -4;
var subytheta = -4;
var subztheta = -4;
var betax = 0.90;
var betay = 0.90;
var betaz = 0.90;
var alphax = 0.1;
var alphay = 0.1;
var alphaz = 0.1;


var model_view;
var projection;
var light_position;
	     
var ctm_index = 0;

function initGL(canvas)
{
    gl = canvas.getContext("webgl");
    if(!gl)
    {
	alert("WebGL is not available...");
	return -1;
    }

    // Set the clear screen color to black (R, G, B, A)
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    
    // Enable hidden surface removal
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);

    return 0;
}

function init()
{
    var cubeVertexPositions = getCube();
    var cubeVertexColors = getCubeColor();
    var positions = [];
    var colors = [];

    for(var i = 0; i < cubeVertexPositions.length; i++)
    {
         positions.push(cubeVertexPositions[i]);
         colors.push(cubeVertexColors[i]);
    }

    var sphereVertexPositions = getSphere();
    var sphereVertexColors = getSphereColor();

    for(var i = 0; i < sphereVertexPositions.length; i++) {
        positions.push(sphereVertexPositions[i]);
        colors.push(sphereVertexColors[i]);
    }    
   
    var lightVertexPositions = getSphere();
    var lightVertexColors = getLightColor();
    for(var i = 0; i < lightVertexPositions.length; i++) {
        positions.push(lightVertexPositions[i]);
        colors.push(lightVertexColors[i]);
    }   
   
    model_view = look_at(eyex, eyey, eyez, atx, aty, atz, upx, upy, upz);
    console.log(model_view)
    
    projection = frustrum(left, right, bottom, topa, near, far);
    console.log(projection) 
   
    light_position = light_location;
    
   
    // right here, calculate the normals
        // assuming a for loop for each of these will be required. Looping through positions and pusing to 'n'.. maybe like...?:
        // for (var i = 0; i < positions.length; i++) {
        //      n.push(crossProduct(u, v)) // but how do we find u and v? I do think this will work though
        // }

    normals = []
    var u;
    var v;
    var temp;
    
    l = []
    var lp0;
    var lp1;
    var lp2;
    
    
    r = []
    var rp0;
    var rp1;
    var rp2;
    
    vVec = []
    var vp0;
    var vp1;
    var vp2;
    // this should be working fine. Just need to double check values for 'r' but then all good
    for (var i = 0; i < cubeVertexPositions.length; i += 3) {
        u = vectorVectorSubtraction(cubeVertexPositions[i+1], cubeVertexPositions[i])
        v = vectorVectorSubtraction(cubeVertexPositions[i+2], cubeVertexPositions[i])
        temp = crossProduct(u, v)
        normals.push(normalize(temp))
        normals.push(normalize(temp))
        normals.push(normalize(temp))
        
    }

// this is all from slides
    var j = 0;
    var test = sphereLocations[0]
    console.log(test[0])
    for(var i = 0; i < sphereVertexPositions.length; i++) {
        temp = vectorVectorSubtraction(sphereVertexPositions[i], sphereOrigin)
        normals.push(normalize(temp))
        if (i != 0 && i % 7776 == 0) {
            j++
        }
    }    
    
    for(var i = 0; i < lightVertexPositions.length; i++) {
        temp = vectorVectorSubtraction(sphereOrigin, sphereVertexPositions[i])
        normals.push(normalize(temp))
    }
    console.log(normals);
    
    // this is a test one and it works lol
    // var testerNum = vectorVectorSubtraction(scalarVectorMult((2 * 0.57735), [0.57735, 0.57735, 0.57735, 0]), [0,1,0,1])
    // console.log(testerNum)

    move([0,-8,0,0])

    // Load and compile shader programs
    var shaderProgram = initShaders(gl, "vertex-shader", "fragment-shader");
    if(shaderProgram == -1)
	return -1;
    gl.useProgram(shaderProgram)

    // Allocate memory in a graphics card
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, 4 * 4 * (positions.length + colors.length + normals.length), gl.STATIC_DRAW);
    // Transfer positions and put it at the beginning of the buffer
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, to1DF32Array(positions));
    // Transfer colors and put it right after positions
    gl.bufferSubData(gl.ARRAY_BUFFER, 4 * 4 * positions.length, to1DF32Array(colors));
    // I have this here, but I don't think I need to do this
    // Transfer normals and put it right after colors
    gl.bufferSubData(gl.ARRAY_BUFFER, 4 * 4 * (positions.length + colors.length), to1DF32Array(normals))
    
    // gl.bufferSubData(gl.ARRAY_BUFFER, 4 * 4 * (positions.length + colors.length + normals.length), to1DF32Array(l))
    // gl.bufferSubData(gl.ARRAY_BUFFER, 4 * 4 * (positions.length + colors.length + normals.length + l.length), to1DF32Array(r))
    // gl.bufferSubData(gl.ARRAY_BUFFER, 4 * 4 * (positions.length + colors.length + normals.length + l.length + r.length), to1DF32Array(vVec))

    // Vertex Position - locate and enable "vPosition"
    var vPosition_location = gl.getAttribLocation(shaderProgram, "vPosition");
    if (vPosition_location == -1)
    { 
        alert("Unable to locate vPosition");
        return -1;
    }
    gl.enableVertexAttribArray(vPosition_location);
    // vPosition starts at offset 0
    gl.vertexAttribPointer(vPosition_location, 4, gl.FLOAT, false, 0, 0);

    // Vertex Color - locate and enable vColor
    var vColor_location = gl.getAttribLocation(shaderProgram, "vColor");
    if (vColor_location == -1)
    { 
        alert("Unable to locate vColor");
        return -1;
    }
    gl.enableVertexAttribArray(vColor_location);
    // vColor starts at the end of positions
    gl.vertexAttribPointer(vColor_location, 4, gl.FLOAT, false, 0, 4 * 4 * positions.length);

    var vNormal_location = gl.getAttribLocation(shaderProgram, "vNormal");
    // if (vNormal_location == -1)
    //  {
    //     alert("Unable to locate vNormal");
    //     return -1;
    //  }
    gl.enableVertexAttribArray(vNormal_location);
    // vNormal starts at the end of colors
    gl.vertexAttribPointer(vNormal_location, 4, gl.FLOAT, false, 0, 4 * 4 * (positions.length + colors.length))

    // Current Transformation Matrix - locate and enable "ctm"
    ctm_location = gl.getUniformLocation(shaderProgram, "ctm");
    if (ctm_location == -1)
    { 
        alert("Unable to locate ctm");
        return -1;
    }
    model_view_location = gl.getUniformLocation(shaderProgram, "model_view");
    if (model_view_location == -1)
    {
        alert("Unable to locate model_view");
        return -1; 
    }
    projection_location = gl.getUniformLocation(shaderProgram, "projection");
    if (projection_location == -1)
    {
        alert("Unable to locate projection");
        return -1; 
    }
    light_position_location = gl.getUniformLocation(shaderProgram, "light_position");
    if (light_position_location == -1)
    {
        alert("Unable to locate light info");
        return -1;
    }
    attenuation_constant_location = gl.getUniformLocation(shaderProgram, "attenuation_constant");
    if (attenuation_constant_location == -1)
    {
        alert("Unable to locate attenuation constant");
        return -1;
    }
    attenuation_linear_location = gl.getUniformLocation(shaderProgram, "attenuation_linear");
    if (attenuation_linear_location == -1)
    {
        alert("Unable to locate attenuation linear");
        return -1;
    }
    attenuation_quadratic_location = gl.getUniformLocation(shaderProgram, "attenuation_quadratic");
    if (attenuation_quadratic_location == -1)
    {
        alert("Unable to locate attenuation quadratic");
        return -1;
    }
    shininess_location = gl.getUniformLocation(shaderProgram, "shininess");
    if (shininess_location == -1)
    {
        alert("Unable to locate shininess");
        return -1;
    }
    
    return 0;
}
var count = 0

function display()
{

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    
    gl.uniformMatrix4fv(model_view_location, false, to1DF32Array(model_view));
    
    gl.uniformMatrix4fv(projection_location, false, to1DF32Array(projection));
    
    // Set the ctm
    for (var i = 0; i < 20; i++) {
        gl.uniformMatrix4fv(ctm_location, false, to1DF32Array(ctms[i]));
        gl.drawArrays(gl.TRIANGLES, 0, 48);
    }
    if (count < 10) {
        console.log(sphere_ctms)
        count++
    }
    
    gl.uniformMatrix4fv(ctm_location, false, to1DF32Array(light_ctm));
    gl.drawArrays(gl.TRIANGLES, 7824, 7776);
    
    for (var i = 0; i < 4; i++) {
        gl.uniformMatrix4fv(ctm_location, false, to1DF32Array(sphere_ctms[i]));
        gl.drawArrays(gl.TRIANGLES, 48, 7776);
    }
    
    gl.uniform4fv(light_position_location, new Float32Array(light_info.light_position));
    gl.uniform1f(attenuation_constant_location, light_info.attenuation_constant);
    gl.uniform1f(attenuation_linear_location, light_info.attenuation_linear);
    gl.uniform1f(attenuation_quadratic_location, light_info.attenuation_quadratic);
    gl.uniform1f(shininess_location, light_info.shininess);
    
}

function keyDownCallback(event)
{
    if(event.keyCode == 32) // space bar
    {
        if (animating == false){
            animating = true
            
            
        }
        else{
            animating = false
            
        }
	    // call animation to fly to the top of the maze
	    
	    
	    display();
    }

    if (event.keyCode == 65) // 'w' key
    {
        // if(topView == false) {
        //     console.log(eyex)
        //     eyex += -1
        //     atx += -1
        //     console.log(eyex)
        //     model_view = look_at(eyex,eyey,eyez,atx,aty,atz,upx,upy,upz)
        
        //     display();
        // }
    }
    if (event.keyCode == 83) // 'a' key
    {
        // if(topView == false) {
        //     console.log(eyex)
        //     eyez += 1
        //     atz += 1
        //     console.log(eyex)
        //     model_view = look_at(eyex,eyey,eyez,atx,aty,atz,upx,upy,upz)
        
        //     display();
        // }
        
    }
    if (event.keyCode == 68) // s key
    {
        if(topView == false) {
        
            eyex += 1
            atx += 1
            model_view = look_at(eyex,eyey,eyez,atx,aty,atz,upx,upy,upz)
            display();
        
        }
    
    }
    if (event.keyCode == 87) // 'd' key
    {
        if(topView == false) {
        
            eyez += -1
            atz += -1
            model_view = look_at(eyex,eyey,eyez,atx,aty,atz,upx,upy,upz)
            display();
        
        }
    
    }
    
    
    if (event.keyCode == 38 && globalYRotate+2 < 72) // up arrow
    {

       eye = [eyex, eyey, eyez, 1]
       
       console.log(globalXRotate)
       
       if(globalXRotate >= 0) {
           eye = matrixVectorMult(rotateY(Math.PI * globalXRotate / 180), eye) // this is wrong, instead set it to 0's
           eye = matrixVectorMult(rotateX(Math.PI * 2 / 180), eye)
           eye = matrixVectorMult(rotateY(Math.PI * -globalXRotate / 180), eye)
       }
       else {
           eye = matrixVectorMult(rotateY(Math.PI * globalXRotate / 180), eye) // this is wrong, instead set it to 0's
           eye = matrixVectorMult(rotateX(Math.PI * 2 / 180), eye)
           eye = matrixVectorMult(rotateY(Math.PI * -globalXRotate / 180), eye)
       }
       console.log(eyex, eyey, eyez)
       eyex = eye[0]
       eyey = eye[1]
       eyez = eye[2]
       eye = [eyex,eyey,eyez, 1]
       model_view = look_at(eyex, eyey, eyez, atx, aty, atz, upx, upy, upz)
       
       globalYRotate+=2
       console.log(globalYRotate)
    }
    if (event.keyCode == 40 && globalYRotate+2 > -104) // down arrow
    {
        eye = [eyex, eyey, eyez, 1]
       
       console.log(globalXRotate)
       
       if(globalXRotate >= 0) {
           eye = matrixVectorMult(rotateY(Math.PI * globalXRotate / 180), eye) // this is wrong, instead set it to 0's
           eye = matrixVectorMult(rotateX(Math.PI * -2 / 180), eye)
           eye = matrixVectorMult(rotateY(Math.PI * -globalXRotate / 180), eye)
       }
       else {
           eye = matrixVectorMult(rotateY(Math.PI * globalXRotate / 180), eye) // this is wrong, instead set it to 0's
           eye = matrixVectorMult(rotateX(Math.PI * -2 / 180), eye)
           eye = matrixVectorMult(rotateY(Math.PI * -globalXRotate / 180), eye)
       }
       console.log(eyex, eyey, eyez)
       eyex = eye[0]
       eyey = eye[1]
       eyez = eye[2]
       eye = [eyex,eyey,eyez, 1]
       model_view = look_at(eyex, eyey, eyez, atx, aty, atz, upx, upy, upz)
       globalYRotate-=2
       console.log(globalYRotate)
    }
    
    if (event.keyCode == 39) // right arrow
    {
        eye = [eyex, eyey, eyez, 1]
        eye = matrixVectorMult(rotateY(Math.PI * -4 / 180), eye)
        globalXRotate+=4
        console.log(globalXRotate)
        console.log(eyex, eyey, eyez)
        eyex = eye[0]
        eyey = eye[1]
        eyez = eye[2]
        eye = [eyex,eyey,eyez, 1]
        model_view = look_at(eyex, eyey, eyez, atx, aty, atz, upx, upy, upz)
    }
    if (event.keyCode == 37) // left arrow
    {
        eye = [eyex, eyey, eyez, 1]
        eye = matrixVectorMult(rotateY(Math.PI * 4 / 180), eye)
        globalXRotate+=-4
        console.log(eyex, eyey, eyez)
        eyex = eye[0]
        eyey = eye[1]
        eyez = eye[2]
        eye = [eyex,eyey,eyez, 1]
        model_view = look_at(eyex, eyey, eyez, atx, aty, atz, upx, upy, upz)
    }
    
    
    if (event.keyCode == 73) { // 'i'
        light_ctm = matrixMatrixMult(translateMatrix(0,1,0), light_ctm)
        light_location[1] = light_location[1] + 1
        display()
    }
    if (event.keyCode == 74) { // 'j'
        light_ctm = matrixMatrixMult(translateMatrix(-1,0,0), light_ctm)
        light_location[0] = light_location[0] - 1
        display()
    }
    if (event.keyCode == 75) { // 'k'
        light_ctm = matrixMatrixMult(translateMatrix(0,-1,0), light_ctm)
        light_location[1] = light_location[1] - 1
        display()
    }
    if (event.keyCode == 76) { // 'l'
        light_ctm = matrixMatrixMult(translateMatrix(1,0,0), light_ctm)
        light_location[0] = light_location[0] + 1
        display()
    }
    if (event.keyCode == 79) { // 'o'
        light_ctm = matrixMatrixMult(translateMatrix(0,0,-1), light_ctm)
        light_location[2] = light_location[2] - 1
        display()
    }
    if (event.keyCode == 190) { // '.'
        light_ctm = matrixMatrixMult(translateMatrix(0,0,1), light_ctm)
        light_location[2] = light_location[2] + 1
        display()
    }
    
    if (event.keyCode == 88) // x key
    {
        quad_one_ctm = matrixMatrixMult(rotateX(Math.PI * xtheta / 180), quad_one_ctm);
        display();
    }
    
    if (event.keyCode == 89) // y key
    {
        quad_one_ctm = matrixMatrixMult(rotateY(Math.PI * ytheta / 180), quad_one_ctm);
        display();
    }
    
    if (event.keyCode == 84) // t key
    {
        quad_one_ctm = matrixMatrixMult(rotateY(Math.PI * subytheta / 180), quad_one_ctm);
        display();
    }
    
    if (event.keyCode == 90) // z key
    {
        quad_one_ctm = matrixMatrixMult(rotateZ(Math.PI * ztheta / 180), quad_one_ctm);
        display();
    }
    
        
    if (event.keyCode == 66) { 
        //this is 'b' which is scale down
        for(let i = 0; i < quad_one_ctm.length - 1; i++) {
            quad_one_ctm[i] = matrixVectorMult(scaleMatrix(betax, betay, betaz), quad_one_ctm[i]);
        }
        display();
    }
    
    if (event.keyCode == 71) {
        //this is 'g' which is scale up
        printMatrix(quad_one_ctm);
        for(let i = 0; i < quad_one_ctm.length; i++) {
            quad_one_ctm[i] = matrixVectorMult(scaleMatrix(1/betax, 1/betay, 1/betaz), quad_one_ctm[i]);
        }
        printMatrix(quad_one_ctm);
        display();
    }
    
    if (event.keyCode == 78) {
        // this is 'n' which is move (translate) right i guess
        for(let i = 0; i < quad_one_ctm.length; i++) {
            quad_one_ctm[i] = matrixVectorMult(translateMatrix(alphax, alphay, alphaz), quad_one_ctm[i]);
        }
        display();
    }
}


function main()
{
    canvas = document.getElementById("gl-canvas");
    if(initGL(canvas) == -1)
	return -1;
    if(init() == -1)
	return -1;
    
    
    
    
    document.onkeydown = keyDownCallback;
    canvas.onmousedown = function(event) {
        //animateFriction = false;
        let width = 255
        let height = 255
        let x = event.clientX - canvas.offsetLeft
        let y = event.clientY - canvas.offsetTop
        mX = -(1 - x/width)
        mY = (1 - y/height)
        pointX = mX
        pointY = mY
        canvas.onmousemove = mouseMoveCallback;
    }
    canvas.onmouseup = function(event) {
        //animateFriction = true
        canvas.onmousemove = function(){}
    }
    //canvas.onmousemove = mouseMoveCallback;
    canvas.onwheel = wheelScrollUp;
    
    display();
    
    requestAnimationFrame(idle);
}





var isClick = false;

var mX, mY;
var deltaX, deltaY;
function mouseMoveCallback(event)
{
    let width = 255
    let height = 255
    let x = event.clientX - canvas.offsetLeft
    let y = event.clientY - canvas.offsetTop
    mX = -(1 - x/width)
    mY = (1 - y/height)
    deltaX = mX - pointX
    deltaY = mY - pointY
    quad_one_ctm = matrixMatrixMult(rotateX((deltaY)), quad_one_ctm)
    quad_one_ctm = matrixMatrixMult(rotateY(-(deltaX)), quad_one_ctm)
    pointX = mX
    pointY = mY
    console.log(mX, mY)
}
// This function will be called when a mouse wheel is scrolled up.
function wheelScrollUp(event)
{
    if (event.deltaY < 0) {
        eye = [eyex, eyey, eyez, 1]
        eye = matrixVectorMult(scaleMatrix(0.9, 0.9, 0.9), eye)
        eyex = eye[0]
        eyey = eye[1]
        eyez = eye[2]
        
        model_view = look_at(eyex,eyey,eyez,atx,aty,atz,upx,upy,upz)
    
        display();
    }
    
    if (event.deltaY > 0) {
        eye = [eyex, eyey, eyez, 1]
        eye = matrixVectorMult(scaleMatrix(1.1, 1.1, 1.1), eye)
        eyex = eye[0]
        eyey = eye[1]
        eyez = eye[2]
        
        model_view = look_at(eyex,eyey,eyez,atx,aty,atz,upx,upy,upz)
    
        display();
    
    }
}
