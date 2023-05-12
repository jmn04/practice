let name;
let username;
let userresult;
// 複数回利用するので定数化
const userName = document.getElementById('name');

username = prompt("お名前を教えて下さい。");
if (username == "") {
    userName.innerHTML = "名無し";
} else {
    userName.innerHTML = username;
}

// Math.floor(N) : N以下の最大の整数を返す（ガウス記号みたいな役割）
// Math.random() : 0以上1未満の値をランダムに返す
let rand = Math.floor( Math.random() * 5);
if (rand == 0) {
    userresult = "大吉";
}
if (rand == 1) {
    userresult = "中吉";
}
if (rand == 2) {
    userresult = "小吉";
}
if (rand == 3) {
    userresult = "吉";
}
if (rand == 4) {
    userresult = "凶";
}
document.getElementById("result").innerHTML = userresult;