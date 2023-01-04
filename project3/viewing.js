

function look_at(eyex, eyey, eyez, atx, aty, atz, upx, upy, upz) {
    let eye = [eyex, eyey, eyez, 1];
    let at = [atx, aty, atz, 1];
    let up = [upx, upy, upz, 0];
    let vpn = vectorVectorSubtraction(eye, at);
    //console.log(vpn)
    let n = normalize(vpn)

    //console.log(tempU)
   
    //console.log(absU)
    let u = normalize(crossProduct(up, n))
    //console.log(u)
    let v = normalize(crossProduct(n,u))
    //console.log(u, v, n)
    // now return a matrix based on the u, v, n
    let mat = [];
    mat.push(u)
    mat.push(v)
    mat.push(n);
    mat.push([0,0,0,1]) 
    mat = transposeMatrix(mat)
    let test = translateMatrix(-eye[0],-eye[1],-eye[2])
    ret = matrixMatrixMult(mat, test)
    //console.log(mat)
    //mat = matrixMatrixMult(rotateX((Math.PI * n[1]/180)), mat)
    return ret;
}

function ortho(left, right, bottom, top, near, far) {

    // q = MIp
        // where p = [x, y, z, 1]
        // I is 4x4 identity matrix (replace it with scaling matrix to make field of view big)
        // M = [[1,0,0,0],
        //      [0,1,0,0],
        //      [0,0,0,0],
        //      [0,0,0,1]]

    let x = (right+left)/2
    let y = (top+bottom)/2
    let z = (near+far)/2
    
    let tMat = [[1,0,0,-x],
                [0,1,0,-y],
                [0,0,1,-z],
                [0,0,0,1]]
                
    let sMat = scaleMatrix(2/(right-left), 2/(top-bottom), 2/(near-far), 1)
    
    let mat = matrixMatrixMult(tMat, sMat);
    return mat;

}

function frustrum(left, right, bottom, top, near, far) {
console.log(top)
    let fru = [[(-2*near)/(right-left), 0, (left+right)/(right-left), 0],
               [0, (-2*near)/(top-bottom), (bottom+top)/(top-bottom), 0],
               [0,0,(near+far)/(far-near),-(2*near*far)/(far-near)],
               [0,0,-1,0]];
    // might need to transpose it      
    console.log(fru)
    return transposeMatrix(fru);
}

function exampleMatrix(modV) {

    let tR = [[1/sqrt(2), 0, 1/sqrt(2), 0],
              [1/sqrt(6), 2/sqrt(6), -1/sqrt(6), 0],
              [-1/sqrt(3), 1/sqrt(3), 1/sqrt(3), -d],
              [0, 0, 0, 1]];
    ret = matrixVectorMult(tR, modV);
    return ret;
}

function init_model_view() {
    let mod = [];
    let temp = [];
    for (var i = 0; i < ctms.length; i++) {
        temp = ctms[i]
        mod.push(matrixVectorMult(rotateX(90), matrixVectorMult(translateMatrix(0,0,-d), temp)))
    }
    
    return mod;
}