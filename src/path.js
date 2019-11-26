function findMaxPath(board, pathLength){
    const n = board.length;
    const m = board[0].length;
    
    const paths = [];
    for (let i=0; i<n;i++)
        for (let j=0; j<m; j++){
            const options = getCellPath(board, i, j, n, m, pathLength);
            const cellOptions = options.map(pathOption => pathOption.reduce((acc, curr, idx) => {
                return acc + curr * Math.pow(10, pathLength - idx - 1);
            }, 0));

            paths.push(Math.max(...cellOptions));
        }
            

    paths.sort();
    return paths[paths.length - 1];
}

function getCellPath(board, i, j, n, m, pathLength, visited = {}){
    const cellValue = board[i][j];
    const cellKey = `${i}-${j}`;

    visited[cellKey] = true;

    if (pathLength == 1) 
        return [[cellValue]];

    
    const cellPathOptions = [];

    if (i > 0 && !visited[`${i-1}-${j}`]) {
        //calculate top (i-1, j , n, m)
        const v = Object.assign({}, visited);

        const neighborPathOptions = getCellPath(board, i-1, j , n, m, pathLength-1, v);
        neighborPathOptions.forEach(pathOpition => {
            cellPathOptions.push([cellValue, ...pathOpition]);
        });
    }

    if (j > 0 && !visited[`${i}-${j-1}`]){
        // calculate left (i, j-1, n, m)
        const v = Object.assign({}, visited);

        const neighborPathOptions = getCellPath(board, i, j-1 , n, m, pathLength-1, v);
        neighborPathOptions.forEach(pathOpition => {
            cellPathOptions.push([cellValue, ...pathOpition]);
        });
    }

    if (i < n-1 && !visited[`${i+1}-${j}`]){
        //calculate  bottom (i+1, j, n, m)
        const v = Object.assign({}, visited);

        const neighborPathOptions = getCellPath(board, i+1, j , n, m, pathLength-1, v);
        neighborPathOptions.forEach(pathOpition => {
            cellPathOptions.push([cellValue, ...pathOpition]);
        });
    }

    if (j < m-1 && !visited[`${i}-${j+1}`]){
        //calculate right (i, j+1, n, m)
        const v = Object.assign({}, visited);

        const neighborPathOptions = getCellPath(board, i, j+1 , n, m, pathLength-1, v);
        neighborPathOptions.forEach(pathOpition => {
            cellPathOptions.push([cellValue, ...pathOpition]);
        });
    }

    return cellPathOptions;
}

module.exports = {
    findMaxPath
};