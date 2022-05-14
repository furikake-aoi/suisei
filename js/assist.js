const assist = document.getElementById('assist');
const html = document.getElementById('html');
if (sessionStorage.getItem("assist-setting") === "ok"){
    assist.classList.add("non0e");
}
const fontsize = sessionStorage.getItem("fontsize");
const contrast = sessionStorage.getItem("contrast");
if (fontsize != null){
html.classList.remove("fss","fsm","fsl");
html.classList.add(fontsize);
}
if (contrast != null){
html.classList.remove("dc","hc");
html.classList.add(contrast);
}

function asf(){
    assist.classList.add("none");
    sessionStorage.setItem("assist-setting","ok");
}

function fss(){
    sessionStorage.setItem("fontsize","fss");
    html.classList.remove("fsm","fsl");
    html.classList.add("fss");
}
function fsm(){
    sessionStorage.setItem("fontsize","fsm");
    html.classList.remove("fss","fsl");
    html.classList.add("fsm");
}
function fsl(){
    sessionStorage.setItem("fontsize","fsl");
    html.classList.remove("fss","fsm");
    html.classList.add("fsl");
}

function dc(){
    sessionStorage.setItem("contrast","dc");
    html.classList.remove("hc");
    html.classList.add("dc");
}
function hc(){
    sessionStorage.setItem("contrast","hc");
    html.classList.remove("dc");
    html.classList.add("hc");
}