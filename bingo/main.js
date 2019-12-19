var Grid = [];
var con = 1;

function jugar() {
    for (let i = 0; i < 6; i++) {
        Grid.push(new Array);
        for (let j = 0; j < 15; j++) {

            Grid[i].push(con);
            con++
        }
    }
}
jugar();