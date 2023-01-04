    
if (event.keyCode == 38) // up arrow
{
    if (isAnimatingX || isAnimatingXneg) {
        isAnimatingX = false;
        isAnimatingXneg = false;
    }
    else {
        isAnimatingX = true;
    }
}
if (event.keyCode == 40) // down arrow
{
    if (isAnimatingX || isAnimatingXneg) {
        isAnimatingX = false;
        isAnimatingXneg = false;
    }
    else {
        isAnimatingXneg = true;
    }
}

if (event.keyCode == 39) // right arrow
{
    if (isAnimatingY || isAnimatingYneg) {
        isAnimatingY = false;
        isAnimatingYneg = false;
    }
    else {
        isAnimatingY = true;
    }
}
if (event.keyCode == 37) // left arrow
{
    if (isAnimatingY || isAnimatingYneg) {
        isAnimatingY = false;
        isAnimatingYneg = false;
    }
    else {
        isAnimatingYneg = true;
    }
}

if (event.keyCode == 88) // x key
{
    ctms = matrixMatrixMult(rotateX(Math.PI * xtheta / 180), ctms);
    display();
}

if (event.keyCode == 89) // y key
{
    ctms = matrixMatrixMult(rotateY(Math.PI * ytheta / 180), ctms);
    display();
}

if (event.keyCode == 84) // t key
{
    ctms = matrixMatrixMult(rotateY(Math.PI * subytheta / 180), ctms);
    display();
}

if (event.keyCode == 90) // z key
{
    ctms = matrixMatrixMult(rotateZ(Math.PI * ztheta / 180), ctms);
    display();
}

    
if (event.keyCode == 66) { 
    //this is 'b' which is scale down
    for(let i = 0; i < ctms.length - 1; i++) {
        ctms[i] = matrixVectorMult(scaleMatrix(betax, betay, betaz), ctms[i]);
    }
    display();
}

if (event.keyCode == 71) {
    //this is 'g' which is scale up
    printMatrix(ctms);
    for(let i = 0; i < ctms.length; i++) {
        ctms[i] = matrixVectorMult(scaleMatrix(1/betax, 1/betay, 1/betaz), ctms[i]);
    }
    printMatrix(ctms);
    display();
}

if (event.keyCode == 78) {
    // this is 'n' which is move (translate) right i guess
    for(let i = 0; i < ctms.length; i++) {
        ctms[i] = matrixVectorMult(translateMatrix(alphax, alphay, alphaz), ctms[i]);
    }
    display();
}

if (event.keyCode == 72) //'h'
{
    
}

if(event.keyCode == 67) // 'c'
{

}

if(event.keyCode == 79) // 'o'
{

}

if(event.keyCode == 76) // 'l'
{

}
if (event.keyCode == 81) // 'q'
{  
    
    display()
}


if (event.keyCode == 77) // 'm'
{

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
    ctms = matrixMatrixMult(rotateX((deltaY)), ctms)
    ctms = matrixMatrixMult(rotateY(-(deltaX)), ctms)
    pointX = mX
    pointY = mY
    console.log(mX, mY)
}
// This function will be called when a mouse wheel is scrolled up.
function wheelScrollUp(event)
{
    if (event.deltaY < 0) {
        console.log("event.which = " + event.which);
        for(let i = 0; i < ctms.length - 1; i++) {
            ctms[i] = matrixVectorMult(scaleMatrix(betax, betay, betaz), ctms[i]);
        }
        display(); 
    }
    
    if (event.deltaY > 0) {
        printMatrix(ctms);
        for(let i = 0; i < ctms.length; i++) {
            ctms[i] = matrixVectorMult(scaleMatrix(1/betax, 1/betay, 1/betaz), ctms[i]);
        }
        printMatrix(ctms);
        display();
    }
}
