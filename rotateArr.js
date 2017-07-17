process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function findNums(movement, circleArr, returnPos) {
    let workingArr = JSON.parse(JSON.stringify(circleArr));
    let len = workingArr.length;
    if (movement > len) {
        movement %= len;
    }

    let result = [];
    for (let i = 0; i < returnPos.length; i++) {
        result.push(circleArr[(len - movement + returnPos[i]) % len]);
    }

    return result;
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    var q = parseInt(n_temp[2]);
    a = readLine().split(' ');
    a = a.map(Number);
    var p = [];
    for(var a0 = 0; a0 < q; a0++){
        var m = parseInt(readLine());
        p.push(m);
    }

    res = findNums(k, a, p);
    for (let i = 0; i < res.length; i++) {
        console.log(res[i]);
    }
}
