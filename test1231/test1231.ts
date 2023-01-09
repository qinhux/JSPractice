const matrix1 = [[1, 2], [3, 4]];
    const matrix2 = [[1, 2], [3, 4]];
    //结果2×2 7,10,15,22

    const matrix3 = [[1, 2, 1], [2, 1, 2]];
    const matrix4 = [[1, 2], [2, 1], [1, 1]];
    //结果2×2 6,5,6,7

    function getRow(matrix1, i) {
        var row = matrix1[i];
        return row;
    }
    
    function getColumn(matrix2, j) {
        var column = new Array(matrix2.length);
        for (var r = 0; r < matrix2.length; r++) {
            column[r] = matrix2[r][j];
        }
        return column;
    }
    
    function vectorMultiplication(row, column) {
        var result = 0;
        for (var i = 0; i < row.length; i++) {
            result += row[i] * column[i];
        }
        return result;
    }
    
    function matrixMultiplication(matrix1, matrix2) {
        var resultMatrix = Array(matrix1.length).fill().map(() => new Array(matrix1.length));

        for (var i = 0; i < matrix1.length; i++) {
            var row = getRow(matrix1, i);
            for (var j = 0; j < matrix2[0].length; j++) {
                var column = getColumn(matrix2, j);
                
                var vectorMulti = vectorMultiplication(row, column);
                resultMatrix[i][j] = vectorMulti;
            }
            
        }
        console.log(resultMatrix);
    }
    
    matrixMultiplication(matrix1, matrix2);