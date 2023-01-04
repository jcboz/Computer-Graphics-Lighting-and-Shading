// location 
var light_location = [0, 10, 0.0, 1.0];
var sphere_one_location = [2.5, 1.0, 0.0, 1.0];
var sphere_two_location = [4.5, 1.0, 0.0, 1.0];
var sphere_three_location = [6.5, 1.0, 0.0, 1.0];
var sphere_four_location = [8.5, 1.0, 0.0, 1.0];
var sphereOrigin = [0,0,0,1]
var sphereLocations = [light_location, sphere_one_location, sphere_two_location, sphere_three_location, sphere_four_location]

var quad_one_location = [2, -0.1, 2, 1.0]
var quad_two_location = [2, -0.1, -2, 1.0]
var quad_thr_location = [-2, -0.1, -2, 1.0]
var quad_fou_location = [-2, -0.1, 2, 1.0]

var n_block_one_start_location = [2, -0.5, 0, 1]
var n_block_one_end_location = [2, -8.5, 0, 1] // gonna try this ooouuuuttt : update : dont think this works

var n_block_two_start_location = [4, -0.5, 0, 1]
var n_block_two_end_location = [4, -8.5, 0, 1] // gonna try this ooouuuuttt : update : dont think this works

var n_block_thr_start_location = [6, -0.5, 0, 1]
var n_block_thr_end_location = [6, -8.5, 0, 1] // gonna try this ooouuuuttt : update : dont think this works

var n_block_fou_start_location = [8, -0.5, 0, 1]
var n_block_fou_end_location = [8, -8.5, 0, 1] // gonna try this ooouuuuttt : update : dont think this works




var e_block_one_start_location = [0, -0.5, 2, 1]
var e_block_one_end_location = [0, -8.5, 2, 1] // gonna try this ooouuuuttt : update : dont think this works

var e_block_two_start_location = [0, -0.5, 4, 1]
var e_block_two_end_location = [0, -8.5, 4, 1] // gonna try this ooouuuuttt : update : dont think this works

var e_block_thr_start_location = [0, -0.5, 6, 1]

var e_block_thr_end_location = [0, -8.5, 6, 1] // gonna try this ooouuuuttt : update : dont think this works

var e_block_fou_start_location = [0, -0.5, 8, 1]
var e_block_fou_end_location = [0, -8.5, 8, 1] // gonna try this ooouuuuttt : update : dont think this works



var s_block_one_start_location = [-2, -8.5, 0, 1]
var s_block_one_end_location = [-2, -0.5, 0, 1] // gonna try this ooouuuuttt : update : dont think this works

var s_block_two_start_location = [-4, -8.5, 0, 1]
var s_block_two_end_location = [-4, -0.5, 0, 1] // gonna try this ooouuuuttt : update : dont think this works

var s_block_thr_start_location = [-6, -8.5, 0, 1]
var s_block_thr_end_location = [-6, -0.5, 0, 1] // gonna try this ooouuuuttt : update : dont think this works

var s_block_fou_start_location = [-8, -8.5, 0, 1]
var s_block_fou_end_location = [-8, -0.5, 0, 1] // gonna try this ooouuuuttt : update : dont think this works

var w_block_one_start_location = [0, -0.5, -2, 1]
var w_block_one_end_location = [0, -8.5, -2, 1] // gonna try this ooouuuuttt : update : dont think this works

var w_block_two_start_location = [0, -0.5, -4, 1]
var w_block_two_end_location = [0, -8.5, -4, 1] // gonna try this ooouuuuttt : update : dont think this works

var w_block_thr_start_location = [0, -0.5, -6, 1]
var w_block_thr_end_location = [0, -8.5, -6, 1] // gonna try this ooouuuuttt : update : dont think this works

var w_block_fou_start_location = [0, -0.5, -8, 1]
var w_block_fou_end_location = [0, -8.5, -8, 1] // gonna try this ooouuuuttt : update : dont think this works


// ctms
var light_ctm = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]

var quad_one_ctm = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]
var quad_two_ctm = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]
var quad_thr_ctm = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]
var quad_fou_ctm = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]

var n_block_one_ctm = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]
var n_block_two_ctm = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]
var n_block_thr_ctm = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]
var n_block_fou_ctm = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]

var e_block_one_ctm = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]
var e_block_two_ctm = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]
var e_block_thr_ctm = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]
var e_block_fou_ctm = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]

var s_block_one_ctm = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]
var s_block_two_ctm = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]
var s_block_thr_ctm = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]
var s_block_fou_ctm = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]

var w_block_one_ctm = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]
var w_block_two_ctm = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]
var w_block_thr_ctm = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]
var w_block_fou_ctm = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]

light_ctm = matrixMatrixMult(scaleMatrix(0.25, 0.25, 0.25), light_ctm)
light_ctm = matrixMatrixMult(translateMatrix(0, 10, 0), light_ctm)

quad_one_ctm = matrixMatrixMult(scaleMatrix(4, 0.2, 4), quad_one_ctm)
quad_one_ctm = matrixMatrixMult(translateMatrix(5, -0.1, 5), quad_one_ctm)
quad_two_ctm = matrixMatrixMult(scaleMatrix(4, 0.2, 4), quad_two_ctm)
quad_two_ctm = matrixMatrixMult(translateMatrix(5, -0.1, -5), quad_two_ctm)
quad_thr_ctm = matrixMatrixMult(scaleMatrix(4, 0.2, 4), quad_thr_ctm)
quad_thr_ctm = matrixMatrixMult(translateMatrix(-5, -0.1, -5), quad_thr_ctm)
quad_fou_ctm = matrixMatrixMult(scaleMatrix(4, 0.2, 4), quad_fou_ctm)
quad_fou_ctm = matrixMatrixMult(translateMatrix(-5, -0.1, 5), quad_fou_ctm)


// n_block_one_ctm = matrixMatrixMult(translateMatrix(2.5, -.1, 0), n_block_one_ctm)
n_block_two_ctm = matrixMatrixMult(scaleMatrix(1, 0.2, 1), n_block_two_ctm)
// n_block_two_ctm = matrixMatrixMult(translateMatrix(4.5, -.9, 0), n_block_two_ctm)
n_block_thr_ctm = matrixMatrixMult(scaleMatrix(1, 0.2, 1), n_block_thr_ctm)
// n_block_thr_ctm = matrixMatrixMult(translateMatrix(6.5, -.9, 0), n_block_thr_ctm)
n_block_fou_ctm = matrixMatrixMult(scaleMatrix(1, 0.2, 1), n_block_fou_ctm)
// n_block_fou_ctm = matrixMatrixMult(translateMatrix(8.5, -.9, 0), n_block_fou_ctm)

e_block_one_ctm = matrixMatrixMult(scaleMatrix(1, 1, 1), e_block_one_ctm)
// e_block_one_ctm = matrixMatrixMult(translateMatrix(0, -.9, 2), e_block_one_ctm)
e_block_two_ctm = matrixMatrixMult(scaleMatrix(1, 1, 1), e_block_two_ctm)
// e_block_two_ctm = matrixMatrixMult(translateMatrix(0, -.9, 4), e_block_two_ctm)
e_block_thr_ctm = matrixMatrixMult(scaleMatrix(1, 1, 1), e_block_thr_ctm)
// e_block_thr_ctm = matrixMatrixMult(translateMatrix(0, -.9, 6), e_block_thr_ctm)
e_block_fou_ctm = matrixMatrixMult(scaleMatrix(1, 1, 1), e_block_fou_ctm)
// e_block_fou_ctm = matrixMatrixMult(translateMatrix(0, -.9, 8), e_block_fou_ctm)

s_block_one_ctm = matrixMatrixMult(scaleMatrix(1, 1, 1), s_block_one_ctm)
// s_block_one_ctm = matrixMatrixMult(translateMatrix(-2, -.9, 0), s_block_one_ctm)
s_block_two_ctm = matrixMatrixMult(scaleMatrix(1, 1, 1), s_block_two_ctm)
// s_block_two_ctm = matrixMatrixMult(translateMatrix(-4, -.9, 0), s_block_two_ctm)
s_block_thr_ctm = matrixMatrixMult(scaleMatrix(1, 1, 1), s_block_thr_ctm)
// s_block_thr_ctm = matrixMatrixMult(translateMatrix(-6, -.9, 0), s_block_thr_ctm)
s_block_fou_ctm = matrixMatrixMult(scaleMatrix(1, 1, 1), s_block_fou_ctm)
// s_block_fou_ctm = matrixMatrixMult(translateMatrix(-8, -.9, 0), s_block_fou_ctm)

w_block_one_ctm = matrixMatrixMult(scaleMatrix(1, 1, 1), w_block_one_ctm)
// w_block_one_ctm = matrixMatrixMult(translateMatrix(0, -.9, -2), w_block_one_ctm)
w_block_two_ctm = matrixMatrixMult(scaleMatrix(1, 1, 1), w_block_two_ctm)
// w_block_two_ctm = matrixMatrixMult(translateMatrix(0, -.9, -4), w_block_two_ctm)
w_block_thr_ctm = matrixMatrixMult(scaleMatrix(1, 1, 1), w_block_thr_ctm)
// w_block_thr_ctm = matrixMatrixMult(translateMatrix(0, -.9, -6), w_block_thr_ctm)
w_block_fou_ctm = matrixMatrixMult(scaleMatrix(1, 1, 1), w_block_fou_ctm)
// w_block_fou_ctm = matrixMatrixMult(translateMatrix(0, -.9, -8), w_block_fou_ctm)


var ctms = [quad_one_ctm, quad_two_ctm, quad_thr_ctm, quad_fou_ctm, 
    n_block_one_ctm, n_block_two_ctm, n_block_thr_ctm, n_block_fou_ctm, 
    e_block_one_ctm, e_block_two_ctm, e_block_thr_ctm, e_block_fou_ctm,
    s_block_one_ctm, s_block_two_ctm, s_block_thr_ctm, s_block_fou_ctm,
    w_block_one_ctm, w_block_two_ctm, w_block_thr_ctm, w_block_fou_ctm]

console.log(ctms)


// sphere ctms
var sphere_one_ctm = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]
var sphere_two_ctm = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]
var sphere_thr_ctm = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]
var sphere_fou_ctm = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]

sphere_one_ctm = matrixMatrixMult(scaleMatrix(1, 1, 1), sphere_one_ctm)
sphere_one_ctm = matrixMatrixMult(rotateZ(Math.PI * -10 / 180), sphere_one_ctm)
sphere_one_ctm = matrixMatrixMult(translateMatrix(2, 1.1, 0), sphere_one_ctm)

sphere_two_ctm = matrixMatrixMult(scaleMatrix(1, 1, 1), sphere_two_ctm)
sphere_two_ctm = matrixMatrixMult(rotateZ(Math.PI * -8 / 180), sphere_two_ctm)
sphere_two_ctm = matrixMatrixMult(translateMatrix(4, 1.1, 0), sphere_two_ctm)

sphere_thr_ctm = matrixMatrixMult(scaleMatrix(1, 1, 1), sphere_thr_ctm)
sphere_thr_ctm = matrixMatrixMult(rotateZ(Math.PI * -6 / 180), sphere_thr_ctm)
sphere_thr_ctm = matrixMatrixMult(translateMatrix(6, 1.1, 0), sphere_thr_ctm)

sphere_fou_ctm = matrixMatrixMult(scaleMatrix(1, 1, 1), sphere_fou_ctm)
sphere_fou_ctm = matrixMatrixMult(rotateZ(Math.PI * -4 / 180), sphere_fou_ctm)
sphere_fou_ctm = matrixMatrixMult(translateMatrix(8, 1.1, 0), sphere_fou_ctm)

var sphere_ctms = [sphere_one_ctm, sphere_two_ctm, sphere_thr_ctm, sphere_fou_ctm]

console.log(ctms)
