document.addEventListener("keypress", e => {
    if(e.key === "Enter") {
        login();
    }
})

function login() {
let un = document.getElementById("username").value;
let pw = document.getElementById("password").value;
if(un =="admin" && pw == "A"){
    document.getElementById('success').play();
    setTimeout(() => {
    window.location.href="mainpage.html";
    }, 3000);
}
else{
    document.getElementById('wrong').play();
    alert("Invalid Username/ password!!");
}
};

let x = 0;
function show() {
if (x==0) {
    document.getElementById("password").type="text";
    x++;
}else if(x >= 1){
    document.getElementById("password").type="password";
    x = 0;
}
}