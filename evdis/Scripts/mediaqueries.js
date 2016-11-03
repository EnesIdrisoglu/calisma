var qm = window.matchMedia("(max-width: 1024px)");
var qm2=window.matchMedia("(max-width:768px)");
var qm3 = window.matchMedia ("(max-width:425px)");
if (qm.matches) {
    var ekip = document.getElementById("ekip");
    ekip.setAttribute("data-position", "-30,100.7");
    var doctor = document.getElementById("kadin");
    doctor.setAttribute("data-position", "0.8,420");
}
if(qm2.matches){
        var doctor = document.getElementById("kadin");
        doctor.setAttribute("data-position", "50,450");
    }
    if(qm3.matches){
        var ekip = document.getElementById("ekip");
    ekip.setAttribute("data-position", "-30,190.7");
    var doctor = document.getElementById("kadin");
    doctor.setAttribute("data-position", "50,520");
    }
// else {
//     var ekip = document.getElementById("ekip");
//     ekip.setAttribute("data-position", "-100,297");
//     var doctor = document.getElementById("kadin");
//     doctor.setAttribute("data-position", "20,600");
// }

window.onresize = function (event) {
    if (qm.matches) {
        var ekip = document.getElementById("ekip");
        ekip.setAttribute("data-position", "-20,9.7");
        var doctor = document.getElementById("kadin");
        doctor.setAttribute("data-position", "4,40");
    }
    if(qm2.matches){
        var doctor = document.getElementById("kadin");
        doctor.setAttribute("data-position", "4,40");
    }
     else{
         var ekip=document.getElementById("ekip");
         ekip.setAttribute("data-position","-20,29.7");
         var doctor=document.getElementById("kadin");
         doctor.setAttribute("data-position","4,60");
     }
     if(qm3.matches){
        var ekip = document.getElementById("ekip");
        ekip.setAttribute("data-position", "0,20.7");
        var doctor = document.getElementById("kadin");
        doctor.setAttribute("data-position", "20,55");
    }
}
