//var output = '*';
//var output2 = '            ';
for (x = 1; x < 11; x++) {
    //console.log(output2+output);
    //output += '*';
    //output2 = output2.substring(0, output2.length-1);
    var a = Array(x+1).join('*');
    var b = Array(11 - x).join(' ');
    console.log(b,a);
}


