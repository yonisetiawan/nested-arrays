//write your code here


var table2 = [
    ["Number","Name","Position","Points per Game"],
    ["12","Joe Schmo","Center",[14,32,7,0,23]],
    ["9","Ken Buckets","Point Guard", [19,0,11,22,0]],
    ["31","Harvey Kay","Shooting Guard",[0,30,16,0,25]],
    ["18","Sally Talls","Power Forward",[18,29,26,31,19]],
    ["22","Mo DiBoux","Samll Forward",[11,0,23,17,0]]
];

console.log(table2[3][2] == "Shooting Guard");
console.log(table2[3][0]);
console.log(JSON.stringify(table2[1][3]) == JSON.stringify([14,32,7,0,23]));
