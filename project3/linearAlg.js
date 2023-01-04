'use strict'

// Make sure that when you are passing any vectors or Matrices into functions that you are aware
// of whether its a reference or a value



// Prints a 4 x 1 column vector on the console screen
function printColumn(vec) {
    console.log("[" + vec[0].toFixed(4) + ", " + vec[1].toFixed(4) + ", " + vec[2].toFixed(4) + ", " + vec[3].toFixed(4) + "]");
    return;
}

// 's' (a floating point (f32) value), and 'v' vector (4 x 1), multiplied together
// producing 's x v' 
// multiply the scalar value by each value in the column array, outputting one column array
 function scalarVectorMult(s, vec) {
    let vec2 = [];
    vec2[0] = vec[0] * s;
    vec2[1] = vec[1] * s;
    vec2[2] = vec[2] * s;
    vec2[3] = vec[3] * s;
    return vec2;
}

//
 function vectorVectorAddition(v1, v2) {
    let vec3 = [];
    vec3[0] = v1[0] + v2[0];
    vec3[1] = v1[1] + v2[1];
    vec3[2] = v1[2] + v2[2];
    vec3[3] = v1[3] + v2[3];
    return vec3;
}

//
 function vectorVectorSubtraction(v1, v2) {
    let vec3 = [];
    vec3[0] = v1[0] - v2[0];
    vec3[1] = v1[1] - v2[1];
    vec3[2] = v1[2] - v2[2];
    vec3[3] = v1[3] - v2[3];
    return vec3;
}

//
 function vectorMagnitude(v1) {
    let v = Math.sqrt((v1[0] * v1[0]) + (v1[1] * v1[1]) + (v1[2] * v1[2]) + (v1[3] * v1[3]));
    return v;
}

//
 function normalize(v1) {
    let vec = [];
    let n = 1/vectorMagnitude(v1);
    vec[0] = v1[0] * n;
    vec[1] = v1[1] * n;
    vec[2] = v1[2] * n;
    vec[3] = v1[3] * n;
    return vec;
}

//
 function dotProduct(v1, v2) {
    let dot = ((v1[0] * v2[0]) + (v1[1] * v2[1]) + (v1[2] * v2[2]) + (v1[3] * v2[3]))
    return dot;
}

//
 function crossProduct(v1, v2) {
    let vec = [];
    vec[0] = (v1[1] * v2[2]) - (v1[2] * v2[1]);
    vec[1] = (v1[2] * v2[0]) - (v1[0] * v2[2]);
    vec[2] = (v1[0] * v2[1]) - (v1[1] * v2[0]);
    vec[3] = 0;
    return vec;
}

 function printMatrix(mat) {
    let vec0 = [mat[0][0], mat[1][0], mat[2][0], mat[3][0]];
    let vec1 = [mat[0][1], mat[1][1], mat[2][1], mat[3][1]];
    let vec2 = [mat[0][2], mat[1][2], mat[2][2], mat[3][2]];
    let vec3 = [mat[0][3], mat[1][3], mat[2][3], mat[3][3]];
    printColumn(vec0);
    printColumn(vec1);
    printColumn(vec2);
    printColumn(vec3);
    return;
}

 function scalarMatrixMult(s, mat) {
    let m1 = [[], [], [], []];
    m1[0][0] = s * mat[0][0];
    m1[0][1] = s * mat[0][1];
    m1[0][2] = s * mat[0][2];
    m1[0][3] = s * mat[0][3];
    m1[1][0] = s * mat[1][0];
    m1[1][1] = s * mat[1][1];
    m1[1][2] = s * mat[1][2];
    m1[1][3] = s * mat[1][3];
    m1[2][0] = s * mat[2][0];
    m1[2][1] = s * mat[2][1];
    m1[2][2] = s * mat[2][2];
    m1[2][3] = s * mat[2][3];
    m1[3][0] = s * mat[3][0];
    m1[3][1] = s * mat[3][1];
    m1[3][2] = s * mat[3][2];
    m1[3][3] = s * mat[3][3];
    return m1;
}

 function matrixMatrixAddition(m1, m2) {
    let mat = [[], [], [], []];
    mat[0][0] = m1[0][0] + m2[0][0];
    mat[0][1] = m1[0][1] + m2[0][1];
    mat[0][2] = m1[0][2] + m2[0][2];
    mat[0][3] = m1[0][3] + m2[0][3];
    mat[1][0] = m1[1][0] + m2[1][0];
    mat[1][1] = m1[1][1] + m2[1][1];
    mat[1][2] = m1[1][2] + m2[1][2];
    mat[1][3] = m1[1][3] + m2[1][3];
    mat[2][0] = m1[2][0] + m2[2][0];
    mat[2][1] = m1[2][1] + m2[2][1];
    mat[2][2] = m1[2][2] + m2[2][2];
    mat[2][3] = m1[2][3] + m2[2][3];
    mat[3][0] = m1[3][0] + m2[3][0];
    mat[3][1] = m1[3][1] + m2[3][1];
    mat[3][2] = m1[3][2] + m2[3][2];
    mat[3][3] = m1[3][3] + m2[3][3];
    return mat;
}

 function matrixMatrixSubtraction(m1, m2) {
    let mat = [[], [], [], []];
    mat[0][0] = m1[0][0] - m2[0][0];
    mat[0][1] = m1[0][1] - m2[0][1];
    mat[0][2] = m1[0][2] - m2[0][2];
    mat[0][3] = m1[0][3] - m2[0][3];
    mat[1][0] = m1[1][0] - m2[1][0];
    mat[1][1] = m1[1][1] - m2[1][1];
    mat[1][2] = m1[1][2] - m2[1][2];
    mat[1][3] = m1[1][3] - m2[1][3];
    mat[2][0] = m1[2][0] - m2[2][0];
    mat[2][1] = m1[2][1] - m2[2][1];
    mat[2][2] = m1[2][2] - m2[2][2];
    mat[2][3] = m1[2][3] - m2[2][3];
    mat[3][0] = m1[3][0] - m2[3][0];
    mat[3][1] = m1[3][1] - m2[3][1];
    mat[3][2] = m1[3][2] - m2[3][2];
    mat[3][3] = m1[3][3] - m2[3][3];
    return mat;
}

 function matrixVectorMult(m1, v1) {
    let vec0 = scalarVectorMult(v1[0], m1[0]);
    let vec1 = scalarVectorMult(v1[1], m1[1]);
    let vec2 = scalarVectorMult(v1[2], m1[2]);
    let vec3 = scalarVectorMult(v1[3], m1[3]);
    let vector1 = vectorVectorAddition(vec0, vec1);
    let vector2 = vectorVectorAddition(vector1, vec2);
    let vector3 = vectorVectorAddition(vector2, vec3);
    return vector3;
}

 function matrixMatrixMult(m1, m2) {
    let mat0 = matrixVectorMult(m1, m2[0]);
    let mat1 = matrixVectorMult(m1, m2[1]);
    let mat2 = matrixVectorMult(m1, m2[2]);
    let mat3 = matrixVectorMult(m1, m2[3]);
    let matrix = [mat0, mat1, mat2, mat3];
    transposeMatrix(matrix);
    return matrix;
}

 function transposeMatrix(m1) {
    let mat = [[], [], [], []];
    mat[0][0] = m1[0][0];
    mat[0][1] = m1[1][0];
    mat[0][2] = m1[2][0];
    mat[0][3] = m1[3][0];
    mat[1][0] = m1[0][1];
    mat[1][1] = m1[1][1];
    mat[1][2] = m1[2][1];
    mat[1][3] = m1[3][1];
    mat[2][0] = m1[0][2];
    mat[2][1] = m1[1][2];
    mat[2][2] = m1[2][2];
    mat[2][3] = m1[3][2];
    mat[3][0] = m1[0][3];
    mat[3][1] = m1[1][3];
    mat[3][2] = m1[2][3];
    mat[3][3] = m1[3][3];
    return mat;
}

 function inverseMatrix(m1) {
    let minor = minorMat(m1);
    let determinant = determinant4x4(minor, m1);
    let cofactored_and_minor = cofactor(minor);
    let cofactored_and_minor_and_transposed = transposeMatrix(cofactored_and_minor);
    let final = scalarMatrixMult(1/determinant, cofactored_and_minor_and_transposed)
    return final;
}

function minorMat(m1) {
    // [row][col] for variable names here, Minor is calculated starting from top left, then right 
    let m00 = determinant([[m1[1][1], m1[1][2], m1[1][3]], [m1[2][1], m1[2][2], m1[2][3]] ,[m1[3][1], m1[3][2], m1[3][3]]]);
    let m01 = determinant([[m1[0][1], m1[0][2], m1[0][3]], [m1[2][1], m1[2][2], m1[2][3]] ,[m1[3][1], m1[3][2], m1[3][3]]]);
    let m02 = determinant([[m1[0][1], m1[0][2], m1[0][3]], [m1[1][1], m1[1][2], m1[1][3]] ,[m1[3][1], m1[3][2], m1[3][3]]]);
    let m03 = determinant([[m1[0][1], m1[0][2], m1[0][3]], [m1[1][1], m1[1][2], m1[1][3]] ,[m1[2][1], m1[2][2], m1[2][3]]]);
    let m10 = determinant([[m1[1][0], m1[1][2], m1[1][3]], [m1[2][0], m1[2][2], m1[2][3]] ,[m1[3][0], m1[3][2], m1[3][3]]]);
    let m11 = determinant([[m1[0][0], m1[0][2], m1[0][3]], [m1[2][0], m1[2][2], m1[2][3]] ,[m1[3][0], m1[3][2], m1[3][3]]]);
    let m12 = determinant([[m1[0][0], m1[0][2], m1[0][3]], [m1[1][0], m1[1][2], m1[1][3]] ,[m1[3][0], m1[3][2], m1[3][3]]]);
    let m13 = determinant([[m1[0][0], m1[0][2], m1[0][3]], [m1[1][0], m1[1][2], m1[1][3]] ,[m1[2][0], m1[2][2], m1[2][3]]]);
    let m20 = determinant([[m1[1][0], m1[1][1], m1[1][3]], [m1[2][0], m1[2][1], m1[2][3]] ,[m1[3][0], m1[3][1], m1[3][3]]]);
    let m21 = determinant([[m1[0][0], m1[0][1], m1[0][3]], [m1[2][0], m1[2][1], m1[2][3]] ,[m1[3][0], m1[3][1], m1[3][3]]]);
    let m22 = determinant([[m1[0][0], m1[0][1], m1[0][3]], [m1[1][0], m1[1][1], m1[1][3]] ,[m1[3][0], m1[3][1], m1[3][3]]]);
    let m23 = determinant([[m1[0][0], m1[0][1], m1[0][3]], [m1[1][0], m1[1][1], m1[1][3]] ,[m1[2][0], m1[2][1], m1[2][3]]]);
    let m30 = determinant([[m1[1][0], m1[1][1], m1[1][2]], [m1[2][0], m1[2][1], m1[2][2]] ,[m1[3][0], m1[3][1], m1[3][2]]]);
    let m31 = determinant([[m1[0][0], m1[0][1], m1[0][2]], [m1[2][0], m1[2][1], m1[2][2]] ,[m1[3][0], m1[3][1], m1[3][2]]]);
    let m32 = determinant([[m1[0][0], m1[0][1], m1[0][2]], [m1[1][0], m1[1][1], m1[1][2]] ,[m1[3][0], m1[3][1], m1[3][2]]]);
    let m33 = determinant([[m1[0][0], m1[0][1], m1[0][2]], [m1[1][0], m1[1][1], m1[1][2]] ,[m1[2][0], m1[2][1], m1[2][2]]]);
    let minor = [[m00, m10, m20, m30], [m01, m11, m21, m31], [m02, m12, m22, m32], [m03, m13, m23, m33]];
    return minor;
}

function determinant(mat) {
    let aei = mat[0][0] * mat[1][1] * mat[2][2];
    let bfg = mat[1][0] * mat[2][1] * mat[0][2];
    let cdh = mat[2][0] * mat[0][1] * mat[1][2];
    let gec = mat[0][2] * mat[1][1] * mat[2][0];
    let hfa = mat[1][2] * mat[2][1] * mat[0][0];
    let idb = mat[2][2] * mat[0][1] * mat[1][0];
    let det = aei + bfg + cdh - gec - hfa - idb;
    return det;
}

function determinant4x4(m1, m2) {
    let deter = (m1[0][0] * m2[0][0]) - (m1[1][0] * m2[1][0]) + (m1[2][0] * m2[2][0]) - (m1[3][0] * m2[3][0]);
    return deter;
}

function cofactor(m) {
    let cofactored = [[m[0][0], m[0][1]*-1, m[0][2], m[0][3]*-1], [m[1][0]*-1, m[1][1], m[1][2]*-1, m[1][3]], [m[2][0], m[2][1]*-1, m[2][2], m[2][3]*-1], [m[3][0]*-1, m[3][1], m[3][2]*-1, m[3][3]]]
    return cofactored;
}
