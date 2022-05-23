const cl = document.getElementById("c-l");
const cd = document.getElementById("c-d");
const ol = document.getElementById("o-l");
const od = document.getElementById("o-d");
const header = document.getElementById("header")
function closemenu(){
    cl.classList.remove("none");
    cd.classList.remove("none");
    ol.classList.add("none");
    od.classList.add("none");
    header.classList.add("close");
}
function openmenu(){
    ol.classList.remove("none");
    od.classList.remove("none");
    cl.classList.add("none");
    cd.classList.add("none");
    header.classList.remove("close");
}
