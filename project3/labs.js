

function rotateX (theta) {
    let rXMatrix = [[1,0,0,0],
                    [0,Math.cos(theta),-Math.sin(theta),0],
                    [0, Math.sin(theta), Math.cos(theta), 0],
                    [0,0,0,1]];            
    return rXMatrix;
  
}

function rotateY(theta) {
    let rYMatrix = [[Math.cos(theta),0,Math.sin(theta),0],
                    [0,1,0,0],
                    [-Math.sin(theta), 0, Math.cos(theta), 0],
                    [0,0,0,1]];
    return rYMatrix;
}

function rotateZ(theta) {
    let rZMatrix = [[Math.cos(theta),-Math.sin(theta),0,0],
                    [Math.sin(theta),Math.cos(theta),0,0],
                    [0,0,1,0],
                    [0,0,0,1]];
    return rZMatrix;
}

function scaleMatrix(betax, betay, betaz) {
    let scaleTrix =[[betax, 0, 0, 0],
                    [0, betay, 0, 0],
                    [0, 0, betaz, 0],
                    [0, 0, 0, 1]];
    return scaleTrix;
}

function translateMatrix(alphax, alphay, alphaz) {
    let translateMatrix = [[1,0,0,0],
                           [0,1,0,0],
                           [0,0,1,0],
                           [alphax,alphay,alphaz,1]];
    return translateMatrix;
}



function pointOne() {
    let v1 = [0,-0.5,0,1];
    return v1;
}

function pointTwo(i) {
    let j = i * Math.PI / 180;
    let v2 = [Math.cos(j)/2, -0.5, Math.sin(j)/2, 1];
    return v2;
}

function pointThree(i) {
    let k = (i + 10) * Math.PI / 180; 
    let v3 = [Math.cos(k)/2, -0.5, Math.sin(k)/2, 1];
    return v3;
}

function getColor() {
    let x,y,z;
    let tricol = [];
    for (let i = 0; i < 72; i++) {
        x = Math.random();
        y = Math.random();
        z = Math.random();
        tricol.push([0, y, 0, 1]);
        tricol.push([0, y, 0, 1]);
        tricol.push([0, y, 0, 1]);
    }
    return tricol;
}

function conePointOne(i) {
    let k = (i+10) * Math.PI / 180; 
    let v1 = [0,0.5,0,1];
    return v1;
}

function conePointThree(i) {
    let j = i * Math.PI / 180;
    let v2 = [Math.cos(j)/2, -0.5, Math.sin(j)/2, 1];
    return v2;
}

function conePointTwo(i) {
    let k = (i + 10) * Math.PI / 180; 
    let v3 = [Math.cos(k)/2, -0.5, Math.sin(k)/2, 1];
    return v3;
}

function getCone() {
    let cone = [];
    
    for (let i = 0; i < 360; i += 10) {
        cone.push(pointOne());
        cone.push(pointTwo(i));
        cone.push(pointThree(i));
    }
    
    for (let i = 0; i < 360; i += 10) {
        cone.push(conePointOne(i));
        cone.push(conePointTwo(i));
        cone.push(conePointThree(i));
    }
    console.log(cone);
    return cone;
}

function getCube() {
    var cube = [];
    
    //do it like the side1One and side2One functions
    //use getCylinder() where instead of 10 degrees its 90 degrees
    
    //base 
    for (let i = 0; i < 360; i += 90) {
        cube.push(cubepointOne());
        cube.push(cubepointTwo(i));
        cube.push(cubepointThree(i));
    }
    
    //sides
    for (let i = 0; i < 360; i += 90) {
        cube.push(cubeside1One(i));
        cube.push(cubeside1Two(i));
        cube.push(cubeside1Three(i));
        
        cube.push(cubeside2One(i));
        cube.push(cubeside2Two(i));
        cube.push(cubeside2Three(i));
    }
    
    //lid circle
    for (let i = 0; i < 360; i += 90) {
        cube.push(cubelidpointOne());
        cube.push(cubelidpointTwo(i));
        cube.push(cubelidpointThree(i));
    }
        
    // console.log(cube);
    var zooCube = []
    for(var i = 0; i < cube.length; i++) {
        zooCube.push(matrixVectorMult(rotateY(Math.PI * 45 / 180), matrixVectorMult(scaleMatrix(1.413, 1, 1.413), cube[i]))) // weird numbers but this generate cubes that are 1x1x1
    }
    //console.log(zooCube)
    return zooCube;
}




function getCubeColor() {
    let x,y,z;
    let tricol = [];
    
    tricol.push([1,0,1,1])
    tricol.push([1,0,1,1])
    tricol.push([1,0,1,1])
    tricol.push([1,0,1,1])
    tricol.push([1,0,1,1])
    tricol.push([1,0,1,1])
    tricol.push([1,0,1,1])
    tricol.push([1,0,1,1])
    tricol.push([1,0,1,1])
    tricol.push([1,0,1,1])
    tricol.push([1,0,1,1])
    tricol.push([1,0,1,1])
    
    tricol.push([0,1,1,1])
    tricol.push([0,1,1,1])
    tricol.push([0,1,1,1])
    tricol.push([0,1,1,1])
    tricol.push([0,1,1,1])
    tricol.push([0,1,1,1])
    
    tricol.push([1,1,0,1])  // left side bottom triangle
    tricol.push([1,1,0,1])
    tricol.push([1,1,0,1])
    
    tricol.push([1,0,0,1])
    tricol.push([1,0,0,1])
    tricol.push([1,0,0,1])
    
    tricol.push([0,1,0,1])
    tricol.push([0,1,0,1])
    tricol.push([0,1,0,1])
    
    tricol.push([0,1,0,1])
    tricol.push([0,1,0,1])
    tricol.push([0,1,0,1])
    
    tricol.push([1,0,0,1])
    tricol.push([1,0,0,1])
    tricol.push([1,0,0,1])
    
    tricol.push([1,1,0,1]) // left side top triangle
    tricol.push([1,1,0,1])
    tricol.push([1,1,0,1])
    
    tricol.push([0,0,1,1])
    tricol.push([0,0,1,1])
    tricol.push([0,0,1,1])
    tricol.push([0,0,1,1])
    tricol.push([0,0,1,1])
    tricol.push([0,0,1,1])
    tricol.push([0,0,1,1])
    tricol.push([0,0,1,1])
    tricol.push([0,0,1,1])
    tricol.push([0,0,1,1])
    tricol.push([0,0,1,1])
    tricol.push([0,0,1,1])
    
    return tricol;
}

function getCylinder() {
    let cyl = [];
    let t = 10;
    let n = 90;
    //base circle
    for (let i = 0; i < 360; i += 10) {
        cyl.push(pointOne());
        cyl.push(pointTwo(i));
        cyl.push(pointThree(i));
    }
    
    //sides
    for (let i = 0; i < 360; i += 10) {
        cyl.push(side1One(i));
        cyl.push(side1Two(i));
        cyl.push(side1Three(i));
        cyl.push(side2One(i));
        cyl.push(side2Two(i));
        cyl.push(side2Three(i));
    }
    
    //lid circle
    for (let i = 0; i < 360; i += 10) {
        cyl.push(lidpointOne());
        cyl.push(lidpointTwo(i));
        cyl.push(lidpointThree(i));
    }
    
    return cyl;
}

function getCylinderColor() {
    let x,y,z;
    let tricol = [];
    for (let i = 0; i < 144; i++) {
        x = Math.random();
        y = Math.random();
        z = Math.random();
        tricol.push([x, 0, 0, 1]);
        tricol.push([x, 0, 0, 1]);
        tricol.push([x, 0, 0, 1]);
    }
    return tricol;
}

function side1One(i) {
    let k = (i + 10) * Math.PI / 180; 
    let v1 = [Math.cos(k)/2, 0.5, Math.sin(k)/2, 1];
    return v1;
}

function side1Two(i) {
    let k = (i + 10) * Math.PI / 180; 
    let v2 = [Math.cos(k)/2, -0.5, Math.sin(k)/2, 1];
    return v2;
}

function side1Three(i) {
    let j = i * Math.PI / 180;
    let v3 = [Math.cos(j)/2, -0.5, Math.sin(j)/2, 1];
    return v3;
}

//These sides are the second triangles added to all the first ones that will make it look like rectangles connecting the cylinder circles

function side2One(i) {
    let k = (i + 10) * Math.PI / 180; 
    let v1 = [Math.sin(k)/2, -0.5, Math.cos(k)/2, 1];
    return v1;
}

function side2Two(i) {
    let k = (i + 10) * Math.PI / 180; 
    let v2 = [Math.sin(k)/2, 0.5, Math.cos(k)/2, 1];
    return v2;
}

function side2Three(i) {
    let j = i * Math.PI / 180;
    let v3 = [Math.sin(j)/2, 0.5, Math.cos(j)/2, 1];
    return v3;
}

////////////


function lidpointOne() {
    let v1 = [0,0.5,0,1];
    return v1;s
}
function lidpointThree(i) {
    let j = i * Math.PI / 180;
    let v2 = [Math.cos(j)/2, 0.5, Math.sin(j)/2, 1];
    return v2;
}
function lidpointTwo(i) {
    let k = (i + 10) * Math.PI / 180; 
    let v3 = [Math.cos(k)/2, 0.5, Math.sin(k)/2, 1];
    return v3;
}















//these are tests for cube

function cubepointOne() {
    let v1 = [0,-1,0,1];
    return v1;
}

function cubepointTwo(i) {
    let j = i * Math.PI / 180;
    let v2 = [Math.cos(j), -1, Math.sin(j), 1];
    return v2;
}

function cubepointThree(i) {
    let k = (i + 90) * Math.PI / 180; 
    let v3 = [Math.cos(k), -1, Math.sin(k), 1];
    return v3;
}


function cubeside1One(i) {
    let k = (i + 90) * Math.PI / 180; 
    let v1 = [Math.cos(k), 1, Math.sin(k), 1];
    return v1;
}

function cubeside1Two(i) {
    let k = (i + 90) * Math.PI / 180; 
    let v2 = [Math.cos(k), -1, Math.sin(k), 1];
    return v2;
}

function cubeside1Three(i) {
    let j = i * Math.PI / 180;
    let v3 = [Math.cos(j), -1, Math.sin(j), 1];
    return v3;
}

//These sides are the second triangles added to all the first ones that will make it look like rectangles connecting the cylinder circles

function cubeside2One(i) {
    let k = (i + 90) * Math.PI / 180; 
    let v1 = [Math.sin(k), -1, Math.cos(k), 1];
    return v1;
}

function cubeside2Two(i) {
    let k = (i + 90) * Math.PI / 180; 
    let v2 = [Math.sin(k), 1, Math.cos(k), 1];
    return v2;
}

function cubeside2Three(i) {
    let j = i * Math.PI / 180;
    let v3 = [Math.sin(j), 1, Math.cos(j), 1];
    return v3;
}

////////////


function cubelidpointOne() {
    let v1 = [0,1,0,1];
    return v1;
}
function cubelidpointThree(i) {
    let j = i * Math.PI / 180;
    let v2 = [Math.cos(j), 1, Math.sin(j), 1];
    return v2;
}
function cubelidpointTwo(i) {
    let k = (i + 90) * Math.PI / 180; 
    let v3 = [Math.cos(k), 1, Math.sin(k), 1];
    return v3;
}


var endLocation;
var deltaLocation;
var numSteps = 360;
var moveUp = false
var sphere1Test = 0;
var sphere2Test = 0;
var sphere3Test = 0;
var sphere4Test = 0;

function idle() {

    
    if(animating) {
        animateNBlocks()
        animateEBlocks()
        animateSBlocks()
        animateWBlocks()
        // I think I need to get it to origin, rotate it over 'x' axis, then translate it back to where it was
        
        sphere_one_ctm = matrixMatrixMult(rotateY(Math.PI * sphere1Test / 180), sphere_one_ctm)
        sphere_one_ctm = matrixMatrixMult(translateMatrix(-2.5, -1.2, 0), sphere_one_ctm)
        sphere_one_ctm = matrixMatrixMult(rotateZ(Math.PI * 10 / 180), sphere_one_ctm)
        sphere_one_ctm = matrixMatrixMult(rotateX(Math.PI * 1 / 180), sphere_one_ctm)
        sphere_one_ctm = matrixMatrixMult(rotateZ(Math.PI * -10 / 180), sphere_one_ctm)
        sphere_one_ctm = matrixMatrixMult(translateMatrix(2.5, 1.2, 0), sphere_one_ctm)
        sphere_one_ctm = matrixMatrixMult(rotateY(Math.PI * -sphere1Test / 180), sphere_one_ctm)
        // rotate it back
        sphere_one_ctm = matrixMatrixMult(rotateY(Math.PI * -1 / 180), sphere_one_ctm)
        
        
        sphere_two_ctm = matrixMatrixMult(rotateY(Math.PI * sphere2Test / 180), sphere_two_ctm)
        sphere_two_ctm = matrixMatrixMult(translateMatrix(-4.5, -1.2, 0), sphere_two_ctm)
        sphere_two_ctm = matrixMatrixMult(rotateZ(Math.PI * 8 / 180), sphere_two_ctm)
        sphere_two_ctm = matrixMatrixMult(rotateX(Math.PI * 1 / 180), sphere_two_ctm)
        sphere_two_ctm = matrixMatrixMult(rotateZ(Math.PI * -8 / 180), sphere_two_ctm)
        sphere_two_ctm = matrixMatrixMult(translateMatrix(4.5, 1.2, 0), sphere_two_ctm)
        sphere_two_ctm = matrixMatrixMult(rotateY(Math.PI * -sphere2Test / 180), sphere_two_ctm)
        // rotate it back
        sphere_two_ctm = matrixMatrixMult(rotateY(Math.PI * -0.5 / 180), sphere_two_ctm)
        
        
        sphere_thr_ctm = matrixMatrixMult(rotateY(Math.PI * sphere3Test / 180), sphere_thr_ctm)
        sphere_thr_ctm = matrixMatrixMult(translateMatrix(-6.5, -1.2, 0), sphere_thr_ctm)
        sphere_thr_ctm = matrixMatrixMult(rotateZ(Math.PI * 6 / 180), sphere_thr_ctm)
        sphere_thr_ctm = matrixMatrixMult(rotateX(Math.PI * 1 / 180), sphere_thr_ctm)
        sphere_thr_ctm = matrixMatrixMult(rotateZ(Math.PI * -6 / 180), sphere_thr_ctm)
        sphere_thr_ctm = matrixMatrixMult(translateMatrix(6.5, 1.2, 0), sphere_thr_ctm)
        sphere_thr_ctm = matrixMatrixMult(rotateY(Math.PI * -sphere3Test / 180), sphere_thr_ctm)
        // rotate it back
        sphere_thr_ctm = matrixMatrixMult(rotateY(Math.PI * -0.25 / 180), sphere_thr_ctm)
        
        
        sphere_fou_ctm = matrixMatrixMult(rotateY(Math.PI * sphere4Test / 180), sphere_fou_ctm)
        sphere_fou_ctm = matrixMatrixMult(translateMatrix(-8.5, -1.2, 0), sphere_fou_ctm)
        sphere_fou_ctm = matrixMatrixMult(rotateZ(Math.PI * 4 / 180), sphere_fou_ctm)
        sphere_fou_ctm = matrixMatrixMult(rotateX(Math.PI * 1 / 180), sphere_fou_ctm)
        sphere_fou_ctm = matrixMatrixMult(rotateZ(Math.PI * -4 / 180), sphere_fou_ctm)
        sphere_fou_ctm = matrixMatrixMult(translateMatrix(8.5, 1.2, 0), sphere_fou_ctm)
        sphere_fou_ctm = matrixMatrixMult(rotateY(Math.PI * -sphere4Test / 180), sphere_fou_ctm)
        // rotate it back
        sphere_fou_ctm = matrixMatrixMult(rotateY(Math.PI * -0.125 / 180), sphere_fou_ctm)
        
        //sphere_two_ctm = matrixMatrixMult(rotateY(Math.PI * -0.5 / 180), sphere_two_ctm)
        //sphere_thr_ctm = matrixMatrixMult(rotateY(Math.PI * -0.25 / 180), sphere_thr_ctm)
        //sphere_fou_ctm = matrixMatrixMult(rotateY(Math.PI * -0.125 / 180), sphere_fou_ctm)
        
        
        if (sphere1Test == 360) {
            sphere1Test = 0
        }
        sphere1Test += 1
        if (sphere2Test == 360) {
            sphere2Test = 0
        }
        sphere2Test += 0.5
        if (sphere3Test == 360) {
            sphere3Test = 0
        }
        sphere3Test += 0.25
        if (sphere4Test == 360) {
            sphere4Test = 0 
        }
        sphere4Test += 0.125
    
    n_block_one_ctm = matrixMatrixMult(scaleMatrix(1, 0.2, 1), n_block_one_ctm)
    n_block_two_ctm = matrixMatrixMult(scaleMatrix(1, 0.2, 1), n_block_two_ctm)
    n_block_thr_ctm = matrixMatrixMult(scaleMatrix(1, 0.2, 1), n_block_thr_ctm)
    n_block_fou_ctm = matrixMatrixMult(scaleMatrix(1, 0.2, 1), n_block_fou_ctm)
    
    e_block_one_ctm = matrixMatrixMult(scaleMatrix(1, 0.2, 1), e_block_one_ctm)
    e_block_two_ctm = matrixMatrixMult(scaleMatrix(1, 0.2, 1), e_block_two_ctm)
    e_block_thr_ctm = matrixMatrixMult(scaleMatrix(1, 0.2, 1), e_block_thr_ctm)
    e_block_fou_ctm = matrixMatrixMult(scaleMatrix(1, 0.2, 1), e_block_fou_ctm)
    
    s_block_one_ctm = matrixMatrixMult(scaleMatrix(1, 0.2, 1), s_block_one_ctm)
    s_block_two_ctm = matrixMatrixMult(scaleMatrix(1, 0.2, 1), s_block_two_ctm)
    s_block_thr_ctm = matrixMatrixMult(scaleMatrix(1, 0.2, 1), s_block_thr_ctm)
    s_block_fou_ctm = matrixMatrixMult(scaleMatrix(1, 0.2, 1), s_block_fou_ctm)
    
    w_block_one_ctm = matrixMatrixMult(scaleMatrix(1, 0.2, 1), w_block_one_ctm)
    w_block_two_ctm = matrixMatrixMult(scaleMatrix(1, 0.2, 1), w_block_two_ctm)
    w_block_thr_ctm = matrixMatrixMult(scaleMatrix(1, 0.2, 1), w_block_thr_ctm)
    w_block_fou_ctm = matrixMatrixMult(scaleMatrix(1, 0.2, 1), w_block_fou_ctm)
    
    ctms = [quad_one_ctm, quad_two_ctm, quad_thr_ctm, quad_fou_ctm, 
        n_block_one_ctm, n_block_two_ctm, n_block_thr_ctm, n_block_fou_ctm, 
        e_block_one_ctm, e_block_two_ctm, e_block_thr_ctm, e_block_fou_ctm,
        s_block_one_ctm, s_block_two_ctm, s_block_thr_ctm, s_block_fou_ctm,
        w_block_one_ctm, w_block_two_ctm, w_block_thr_ctm, w_block_fou_ctm]
        
    sphere_ctms = [sphere_one_ctm, sphere_two_ctm, sphere_thr_ctm, sphere_fou_ctm]
    // console.log("why not work")
    // console.log(sphere_one_ctm)
    
    // I think here is where I would calculate the normals? Maybe do it in init to test but move here after
        // saying this bc it had to recalculate the light everytime the eye/cubes/spheres move so it'd do it everytime a frame is request theortically 
    }
    display();
    
    
    requestAnimationFrame(idle);
}


function move(directionVector) {
    // endLocation = vectorVectorAddition(n_block_one_end_location, directionVector);
    deltaLocation = scalarVectorMult(1/numSteps, directionVector);
    requestAnimationFrame(idle);
}





function getSphere() {
    let sph = []
    let origin = [1,0,0,1]
    
    for (let i = 0; i < 360; i+=10) {
        // This loop will use rotate_z to start each band
        let one = (matrixVectorMult(rotateZ(i*Math.PI/180), origin))
        let two = (matrixVectorMult(rotateZ((i+10)*Math.PI/180), origin))
        let thr = (matrixVectorMult(rotateY((0.175)), matrixVectorMult(rotateZ(i*Math.PI/180), origin)))
        
        let oneD = (matrixVectorMult(rotateY((0.175)), matrixVectorMult(rotateZ((i+10)*Math.PI/180), origin)))
        let twoD = (matrixVectorMult(rotateZ((i+10)*Math.PI/180), origin))
        let thrD = (matrixVectorMult(rotateY((0.175)), matrixVectorMult(rotateZ(i*Math.PI/180), origin)))
        
        for (let j = 0; j < 360; j+=10) {
            // This loop will use rotate_y to wrap the band around origin
            sph.push(matrixVectorMult(rotateY(j*Math.PI/180), one))
            sph.push(matrixVectorMult(rotateY(j*Math.PI/180), thr))
            sph.push(matrixVectorMult(rotateY(j*Math.PI/180), two))
            
            sph.push(matrixVectorMult(rotateY(j*Math.PI/180), oneD))
            sph.push(matrixVectorMult(rotateY(j*Math.PI/180), twoD))
            sph.push(matrixVectorMult(rotateY(j*Math.PI/180), thrD))
        
        }
    }
    
    return sph;
}


function getTaurus() {
    let tau = []
    let origin = [0.5,0,0,1]
    let tri2 = [0.96,0,0.4,1]
    let tri3 = [1,0.5,0,1]
   
    
    for (let i = 0; i < 360; i+=10) {
        // This loop will use rotate_z to start each band
        let one = (matrixVectorMult(rotateZ(i*Math.PI/180), origin))
        let two = (matrixVectorMult(rotateZ((i+10)*Math.PI/180), origin))
        let thr = (matrixVectorMult(rotateY((0.175)), matrixVectorMult(rotateZ(i*Math.PI/180), origin)))
        
        let oneD = (matrixVectorMult(rotateY((0.175)), matrixVectorMult(rotateZ((i+10)*Math.PI/180), origin)))
        let twoD = (matrixVectorMult(rotateZ((i+10)*Math.PI/180), origin))
        let thrD = (matrixVectorMult(rotateY((0.175)), matrixVectorMult(rotateZ(i*Math.PI/180), origin)))
        
        for (let j = 0; j < 31; j+=10) {
            // This loop will use rotate_y to wrap the band around origin
            tau.push(matrixVectorMult(rotateY(j*Math.PI/180), one))
            tau.push(matrixVectorMult(rotateY(j*Math.PI/180), thr))
            tau.push(matrixVectorMult(rotateY(j*Math.PI/180), two))
            
            tau.push(matrixVectorMult(rotateY(j*Math.PI/180), oneD))
            tau.push(matrixVectorMult(rotateY(j*Math.PI/180), twoD))
            tau.push(matrixVectorMult(rotateY(j*Math.PI/180), thrD))
        
        }
    }
    
    return tau;
}


function getSphereColor() {
    let x,y,z;
    let tricol = [];
    x = Math.random();
    y = Math.random();
    z = Math.random();  
    for (let i = 0; i < 1296; i++) {
        tricol.push([1, 1, 0, 1]);
        tricol.push([1, 1, 0, 1]);
        tricol.push([1, 1, 0, 1]);
    }
    for (let i = 0; i < 1296; i++) {
        tricol.push([0, 1, 0, 1]);
        tricol.push([0, 1, 0, 1]);
        tricol.push([0, 1, 0, 1]);
    }
    return tricol;
}

function getLightColor() {
    let tricol = [];
    for (let i = 0; i < 2592; i++) {
        tricol.push([1, 1, 1, 1]);
        tricol.push([1, 1, 1, 1]);
        tricol.push([1, 1, 1, 1]);
    }
    return tricol;
}

function getTaurusColor() {
    let x,y,z;
    let tricol = [];
    for (let i = 0; i < 2592; i++) {
        x = Math.random();
        y = Math.random();
        z = Math.random();
        tricol.push([0, x, x, 1]);
        tricol.push([0, y, y, 1]);
        tricol.push([0, z, z, 1]);
    }
    return tricol;
}

var stepCounter = 0;
var step2Counter = 0;
var step3Counter = 0;
var step4Counter = 0;
function 
animateNBlocks() {    
    // north blocks
    
    // n1
    stepCounter++
    if (stepCounter >= 0 && stepCounter < 40) {
        var tempLocation = n_block_one_start_location
        n_block_one_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (stepCounter >= 40 && stepCounter < 180){
        var tempLocation = vectorVectorAddition(n_block_one_start_location, scalarVectorMult(stepCounter-40, deltaLocation));
        n_block_one_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (stepCounter >= 180 && stepCounter < 320) {
        var tempLocation = vectorVectorSubtraction(n_block_one_end_location, scalarVectorMult(stepCounter+40, deltaLocation));
        n_block_one_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (stepCounter >= 320 && stepCounter <= 360) {
        var tempLocation = n_block_one_start_location
        n_block_one_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    if(stepCounter == 360){ // stepCounter == 360
        stepCounter = 0;
        display();
    }
    
    // n2
    step2Counter += 0.5
    if (step2Counter >= 0 && step2Counter < 30) {
        var tempLocation = n_block_two_start_location
        n_block_two_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step2Counter >= 30 && step2Counter < 180){
        var tempLocation = vectorVectorAddition(n_block_two_start_location, scalarVectorMult(step2Counter-30, deltaLocation));
        n_block_two_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step2Counter >= 180 && step2Counter < 330) {
        var tempLocation = vectorVectorSubtraction(n_block_two_end_location, scalarVectorMult(step2Counter+30, deltaLocation));
        n_block_two_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step2Counter >= 330 && step2Counter <= 360) {
        var tempLocation = n_block_two_start_location
        n_block_two_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    if(step2Counter == 360) { // stepCounter == 360
        step2Counter = 0;
        display();
    }
    
    
    // n3
    step3Counter += 0.25
    if (step3Counter >= 0 && step3Counter < 20) {
        var tempLocation = n_block_thr_start_location
        n_block_thr_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step3Counter >= 20 && step3Counter < 180){
        var tempLocation = vectorVectorAddition(n_block_thr_start_location, scalarVectorMult(step3Counter-20, deltaLocation));
        n_block_thr_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step3Counter >= 180 && step3Counter < 340) {
        var tempLocation = vectorVectorSubtraction(n_block_thr_end_location, scalarVectorMult(step3Counter+20, deltaLocation));
        n_block_thr_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step3Counter >= 340 && step3Counter <= 360) {
        var tempLocation = n_block_thr_start_location
        n_block_thr_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    if(step3Counter == 360) { // stepCounter == 360
        step3Counter = 0;
        display();
    }
    
    // n4
    step4Counter += 0.125
    if (step4Counter >= 0 && step4Counter < 10) {
        var tempLocation = n_block_fou_start_location
        n_block_fou_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step4Counter >= 10 && step4Counter < 180){
        var tempLocation = vectorVectorAddition(n_block_fou_start_location, scalarVectorMult(step4Counter-10, deltaLocation));
        n_block_fou_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step4Counter >= 180 && step4Counter < 350) {
        var tempLocation = vectorVectorSubtraction(n_block_fou_end_location, scalarVectorMult(step4Counter+10, deltaLocation));
        n_block_fou_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step4Counter >= 350 && step4Counter <= 360) {
        var tempLocation = n_block_fou_start_location
        n_block_fou_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    if(step4Counter == 360) { // stepCounter == 360
        step4Counter = 0;
        display();
    }
    
}

var stepCounterE = 90;
var step2CounterE = 90;
var step3CounterE = 90;
var step4CounterE = 90;
function animateEBlocks() {

    // east blocks
    
    // e1
    stepCounterE++
    if (stepCounterE >= 0 && stepCounterE < 40) {
        var tempLocation = e_block_one_start_location
        e_block_one_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (stepCounterE >= 40 && stepCounterE < 180){
        var tempLocation = vectorVectorAddition(e_block_one_start_location, scalarVectorMult(stepCounterE-40, deltaLocation));
        e_block_one_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (stepCounterE >= 180 && stepCounterE < 320) {
        var tempLocation = vectorVectorSubtraction(e_block_one_end_location, scalarVectorMult(stepCounterE+40, deltaLocation));
        e_block_one_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (stepCounterE >= 320 && stepCounterE <= 360) {
        var tempLocation = e_block_one_start_location
        e_block_one_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    if(stepCounterE == 360) { // stepCounter == 360
        stepCounterE = 0;
        display();
    }
    
    // e2
    step2CounterE+=0.5
    if (step2CounterE >= 0 && step2CounterE < 30) {
        var tempLocation = e_block_two_start_location
        e_block_two_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step2CounterE >= 30 && step2CounterE < 180){
        var tempLocation = vectorVectorAddition(e_block_two_start_location, scalarVectorMult(step2CounterE-30, deltaLocation));
        e_block_two_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step2CounterE >= 180 && step2CounterE < 330) {
        var tempLocation = vectorVectorSubtraction(e_block_two_end_location, scalarVectorMult(step2CounterE+30, deltaLocation));
        e_block_two_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step2CounterE >= 330 && step2CounterE <= 360) {
        var tempLocation = e_block_two_start_location
        e_block_two_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    if(step2CounterE == 360) { // stepCounter == 360
        step2CounterE = 0;
        display();
    }
    
    
    // e3
    step3CounterE+=0.25
    if (step3CounterE >= 0 && step3CounterE < 20) {
        var tempLocation = e_block_thr_start_location
        e_block_thr_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step3CounterE >= 20 && step3CounterE < 180){
        var tempLocation = vectorVectorAddition(e_block_thr_start_location, scalarVectorMult(step3CounterE-20, deltaLocation));
        e_block_thr_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step3CounterE >= 180 && step3CounterE < 340) {
        var tempLocation = vectorVectorSubtraction(e_block_thr_end_location, scalarVectorMult(step3CounterE+20, deltaLocation));
        e_block_thr_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step3CounterE >= 340 && step3CounterE <= 360) {
        var tempLocation = e_block_thr_start_location
        e_block_thr_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    if(step3CounterE == 360) { // stepCounter == 360
        step3CounterE = 0;
        display();
    }
    
    // e4
    step4CounterE+=0.125
    if (step4CounterE >= 0 && step4CounterE < 10) {
        var tempLocation = e_block_fou_start_location
        e_block_fou_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step4CounterE >= 10 && step4CounterE < 180){
        var tempLocation = vectorVectorAddition(e_block_fou_start_location, scalarVectorMult(step4CounterE-10, deltaLocation));
        e_block_fou_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step4CounterE >= 180 && step4CounterE < 350) {
        var tempLocation = vectorVectorSubtraction(e_block_fou_end_location, scalarVectorMult(step4CounterE+10, deltaLocation));
        e_block_fou_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step4CounterE >= 350 && step4CounterE <= 360) {
        var tempLocation = e_block_fou_start_location
        e_block_fou_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    if(step4CounterE == 360) { // stepCounter == 360
        step4CounterE = 0;
        display();
    }
    
}

var stepCounterS = 180;
var step2CounterS = 180;
var step3CounterS = 180;
var step4CounterS = 180;
function animateSBlocks() {
    
    // south blocks
    
    // s1
    stepCounterS++
    if (stepCounterS >= 0 && stepCounterS < 40) {
        var tempLocation = s_block_one_end_location
        s_block_one_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (stepCounterS >= 40 && stepCounterS < 180){
        var tempLocation = vectorVectorAddition(s_block_one_end_location, scalarVectorMult(stepCounterS-40, deltaLocation));
        s_block_one_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (stepCounterS >= 180 && stepCounterS < 320) {
        var tempLocation = vectorVectorSubtraction(s_block_one_start_location, scalarVectorMult(stepCounterS+40, deltaLocation));
        s_block_one_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (stepCounterS >= 320 && stepCounterS <= 360) {
        var tempLocation = s_block_one_end_location
        s_block_one_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    if(stepCounterS == 360) { // stepCounter == 360
        stepCounterS = 0;
        display();
    }
    
    // s2
    step2CounterS+=0.5
    if (step2CounterS >= 0 && step2CounterS < 30) {
        var tempLocation = s_block_two_end_location
        s_block_two_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step2CounterS >= 30 && step2CounterS < 180){
        var tempLocation = vectorVectorAddition(s_block_two_end_location, scalarVectorMult(step2CounterS-30, deltaLocation));
        s_block_two_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step2CounterS >= 180 && step2CounterS < 330) {
        var tempLocation = vectorVectorSubtraction(s_block_two_start_location, scalarVectorMult(step2CounterS+30, deltaLocation));
        s_block_two_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step2CounterS >= 330 && step2CounterS <= 360) {
        var tempLocation = s_block_two_end_location
        s_block_two_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    if(step2CounterS == 360) { // stepCounter == 360
        step2CounterS = 0;
        display();
    }
    
    
    // s3
    step3CounterS+=0.25
    if (step3CounterS >= 0 && step3CounterS < 20) {
        var tempLocation = s_block_thr_end_location
        s_block_thr_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step3CounterS >= 20 && step3CounterS < 180){
        var tempLocation = vectorVectorAddition(s_block_thr_end_location, scalarVectorMult(step3CounterS-20, deltaLocation));
        s_block_thr_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step3CounterS >= 180 && step3CounterS < 340) {
        var tempLocation = vectorVectorSubtraction(s_block_thr_start_location, scalarVectorMult(step3CounterS+20, deltaLocation));
        s_block_thr_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step3CounterS >= 340 && step3CounterS <= 360) {
        var tempLocation = s_block_thr_end_location
        s_block_thr_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    if(step3CounterS == 360) { // stepCounter == 360
        step3CounterS = 0;
        display();
    }
    
    // s4
    step4CounterS+=0.125
    if (step4CounterS >= 0 && step4CounterS < 10) {
        var tempLocation = s_block_fou_end_location
        s_block_fou_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step4CounterS >= 10 && step4CounterS < 180){
        var tempLocation = vectorVectorAddition(s_block_fou_end_location, scalarVectorMult(step4CounterS-10, deltaLocation));
        s_block_fou_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step4CounterS >= 180 && step4CounterS < 350) {
        var tempLocation = vectorVectorSubtraction(s_block_fou_start_location, scalarVectorMult(step4CounterS+10, deltaLocation));
        s_block_fou_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step4CounterS >= 350 && step4CounterS <= 360) {
        var tempLocation = s_block_fou_end_location
        s_block_fou_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    if(step4CounterS == 360) { // stepCounter == 360
        step4CounterS = 0;
        display();
    }
    
}

var stepCounterW = 270;
var step2CounterW = 270;
var step3CounterW = 270;
var step4CounterW = 270;
function animateWBlocks() {

     // west blocks
    
    // w1
    stepCounterW++
    if (stepCounterW >= 0 && stepCounterW < 40) {
        var tempLocation = w_block_one_start_location
        w_block_one_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (stepCounterW >= 40 && stepCounterW < 180){
        var tempLocation = vectorVectorAddition(w_block_one_start_location, scalarVectorMult(stepCounterW-40, deltaLocation));
        w_block_one_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (stepCounterW >= 180 && stepCounterW < 320) {
        var tempLocation = vectorVectorSubtraction(w_block_one_end_location, scalarVectorMult(stepCounterW+40, deltaLocation));
        w_block_one_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (stepCounterW >= 320 && stepCounterW <= 360) {
        var tempLocation = w_block_one_start_location
        w_block_one_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    if(stepCounterW == 360) { // stepCounter == 360
        stepCounterW = 0;
        display();
    }
    
    // w2
    step2CounterW+=0.5
    if (step2CounterW >= 0 && step2CounterW < 30) {
        var tempLocation = w_block_two_start_location
        w_block_two_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step2CounterW >= 30 && step2CounterW < 180){
        var tempLocation = vectorVectorAddition(w_block_two_start_location, scalarVectorMult(step2CounterW-30, deltaLocation));
        w_block_two_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step2CounterW >= 180 && step2CounterW < 330) {
        var tempLocation = vectorVectorSubtraction(w_block_two_end_location, scalarVectorMult(step2CounterW+30, deltaLocation));
        w_block_two_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step2CounterW >= 330 && step2CounterW <= 360) {
        var tempLocation = w_block_two_start_location
        w_block_two_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    if(step2CounterW == 360) { // stepCounter == 360
        step2CounterW = 0;
        display();
    }
    
    
    // w3
    step3CounterW+=0.25
    if (step3CounterW >= 0 && step3CounterW < 20) {
        var tempLocation = w_block_thr_start_location
        w_block_thr_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step3CounterW >= 20 && step3CounterW < 180){
        var tempLocation = vectorVectorAddition(w_block_thr_start_location, scalarVectorMult(step3CounterW-20, deltaLocation));
        w_block_thr_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step3CounterW >= 180 && step3CounterW < 340) {
        var tempLocation = vectorVectorSubtraction(w_block_thr_end_location, scalarVectorMult(step3CounterW+20, deltaLocation));
        w_block_thr_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step3CounterW >= 340 && step3CounterW <= 360) {
        var tempLocation = w_block_thr_start_location
        w_block_thr_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    if(step3CounterW == 360) { // stepCounter == 360
        step3CounterW = 0;
        display();
    }
    
    // w4
    step4CounterW+=0.125
    if (step4CounterW >= 0 && step4CounterW < 10) {
        var tempLocation = w_block_fou_start_location
        w_block_fou_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step4CounterW >= 10 && step4CounterW < 180){
        var tempLocation = vectorVectorAddition(w_block_fou_start_location, scalarVectorMult(step4CounterW-10, deltaLocation));
        w_block_fou_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step4CounterW >= 180 && step4CounterW < 350) {
        var tempLocation = vectorVectorSubtraction(w_block_fou_end_location, scalarVectorMult(step4CounterW+10, deltaLocation));
        w_block_fou_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    else if (step4CounterW >= 350 && step4CounterW <= 360) {
        var tempLocation = w_block_fou_start_location
        w_block_fou_ctm = translateMatrix(tempLocation[0], tempLocation[1], tempLocation[2]);
        display();
    }
    if(step4CounterW == 360) { // stepCounter == 360
        step4CounterW = 0;
        display();
    }

}