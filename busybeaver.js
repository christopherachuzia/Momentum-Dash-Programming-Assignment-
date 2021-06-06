function beaver(forest){
    const row = forest.length;
    const column = forest.length ? forest[0].length : 0;

    const row_mid = Math.floor(row/2);
    const colum_mid = Math.floor(column/2);

    let answer = {value: 0};

    getSurrounding(forest,row_mid,colum_mid,answer)
    return answer;
}

function getSurrounding(forest,currentrow,currentcol,answer){
    answer.value += forest[currentrow][currentcol];
    forest[currentrow][currentcol] = 0;

    let up = 0, right = 0, left = 0, down = 0;
    const movement = {};

    if(currentrow - 1 >= 0){
        up = forest[currentrow - 1][currentcol]
        movement[up] = {row: currentrow - 1, col: currentcol}
    }

    if(currentcol - 1 >= 0){
        left = forest[currentrow][currentcol - 1];
        movement[left] = {row: currentrow, col: currentcol - 1}
    }

    if(currentcol + 1 < forest[0].length){
        right = forest[currentrow][currentcol+1];
        movement[right] = {row: currentrow, col: currentcol + 1}
    }

    if(currentrow + 1 < forest.length){
        down = forest[currentrow+1][currentcol];
        movement[down] = {row: currentrow + 1,col: currentcol}
    }

    let nextMove = Math.max(up,down,left,right);
    
    if(nextMove){
        let currentLocation = movement[nextMove];
        
        getSurrounding(forest, currentLocation.row, currentLocation.col, answer)
    }
}

const forest = [[2,0,4,3,1],
                [0,3,2,0,1],
                [3,6,1,1,5],
                [0,1,3,2,4]]

console.log(beaver(forest))