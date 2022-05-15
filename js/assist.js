const assist = document.getElementById('assist');
const html = document.getElementById('html');
const https = document.getElementById('https');
const protocol = location.protocol;
assist.classList.remove("none");
console.log(sessionStorage.getItem("assist-setting"));
if (sessionStorage.getItem("assist-setting") == "ok"){
    assist.classList.add("none");
}
if (protocol != "https:" && sessionStorage.getItem("protcol") != "ok"){
    https.classList.add("none");
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
function viewassist(){
    assist.classList.remove("none");
}
function tohttps(){
    const nurl = location.href;
    const tourl = nurl.slice(0,4) + "s" + nurl.slice(4);
    window.location = tourl;
}
function nothttps(){
    https.classList.add("none");
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