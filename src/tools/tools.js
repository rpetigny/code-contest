export const toGrid = (input, separator = "") => input.map((line) => line.split(separator).map((col) => col));

export const fillGrid = (size, val) => Array(size).fill().map(() => Array(size).fill(val));
export const fillGridXY = (xSize, ySize, val) => Array(xSize).fill().map(() => Array(ySize).fill(val));


export const sortAsc = (a, b) => a - b;
export const sortDesc = (a, b) => b - a;

export const toNumbers = str => str.split(" ").map(Number);

export const intersect = (a, b) => {
    var t;
    if (b.length > a.length) [b,a] = [a,b]; // indexOf to loop over shorter
    return a.filter(function (e) {
        return b.indexOf(e) > -1;
    });
}

export const range = (start, length) =>
  Array(length)
    .fill(0)
    .map((_, i) => start + i);

export const enumerate = Object.entries;