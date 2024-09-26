
//  let save = document.getElementById("result");
 let plus = 0

 function clicked() {
    var msg;
    msg = document.getElementById("counting");
    plus += 1
    msg.innerHTML = plus
}

function clicker() {
    let pluss = plus;
    var save;
    save = document.getElementById("result");
    save.innerHTML += ' ' + pluss + ' - ';
    let count = document.getElementById("counting");
    count.innerHTML = 0;
    plus = 0
}