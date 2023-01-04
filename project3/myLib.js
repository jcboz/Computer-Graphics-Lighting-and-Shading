/* to1DF32Array(a2DArray)
 *
 * This function turns an array of 4-element arrays a2DArray into a packed
 * 1-dimensional array of 32-bit floating-point numbers.
 */

function to1DF32Array(a2DArray)
{
    var size = a2DArray.length;

    if(size == 0)
    {
        console.log("[mylib/to1DF32Array - DEBUG]: size is 0");
        return new Float32Array([]);
    }
    
    var result = [];
    var index = 0;

    for(var i = 0; i < size; i++)
    {
        var anElement = a2DArray[i];
        
        if(anElement.length != 4)
            console.log("[mylib/to1DF32Array - ERROR]: Not a 4-element vector");
        
        result[index] = anElement[0];
        result[index + 1] = anElement[1];
        result[index + 2] = anElement[2];
        result[index + 3] = anElement[3];
        index += 4;
    }

    return new Float32Array(result);
}

function rotate_z(degree)
{
    var result = [
        [1.0, 0.0, 0.0, 0.0],
        [0.0, 1.0, 0.0, 0.0],
        [0.0, 0.0, 1.0, 0.0],
        [0.0, 0.0, 0.0, 1.0]];

    var radian = degree * Math.PI / 180.0;

    result[0][0] = Math.cos(radian);
    result[0][1] = Math.sin(radian);
    result[1][0] = -Math.sin(radian);
    result[1][1] = Math.cos(radian);

    return result;
}
