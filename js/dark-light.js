const html = document.getElementById('html');
const dlcheck =document.getElementById('dls');
console.log(sessionStorage.getItem("mode"))
if (sessionStorage.getItem("mode") === "dark") {
    darkmode();
    dlcheck.checked = true;
} else if (sessionStorage.getItem("mode") === "light") {
    lightmode();
}
function switchmode() {
    const dlcheck =document.getElementById('dls');
    console.log(dlcheck);
    var check = document.getElementById('dls').checked;
    if(check == true ){
        sessionStorage.setItem("darkmode", "dark");
        darkmode();
    } else {
        sessionStorage.setItem("darkmode", "light");
        lightmode();
    }
};
function darkmode(){
    html.classList.remove("light");
    html.classList.add("dark");
}
function lightmode(){
    html.classList.remove("dark");
    html.classList.add("light");
}