const dlcheck =document.getElementById('dls');
console.log('\u3053\u3093\u3061\u304f\u308f\ncoded by @furikake_aoi')
if (sessionStorage.getItem("darkmode") === "on") {
    darkmode();
    dlcheck.checked = true;
} else if (sessionStorage.getItem("darkmode") === "off") {
    lightmode();
}
function switchmode() {
    const dlcheck =document.getElementById('dls');
    console.log(dlcheck);
    var check = document.getElementById('dls').checked;
    if(check == true ){
        sessionStorage.setItem("darkmode", "on");
        darkmode();
    } else {
        sessionStorage.setItem("darkmode", "off");
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