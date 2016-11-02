var qm =window.matchMedia( "(max-width: 1024px)" );

if(qm.matches)
     {
         var ekip=document.getElementById("ekip");
         ekip.setAttribute("data-position","-30,100.7");
         var doctor=document.getElementById("kadin");
         doctor.setAttribute("data-position","0.8,420");
     }
    //  else{
    //      var ekip=document.getElementById("ekip");
    //      ekip.setAttribute("data-position","-20,29.7");
    //      var doctor=document.getElementById("kadin");
    //      doctor.setAttribute("data-position","4,60");
}

window.onresize=function(event)
{
     if(qm.matches)
     {
         var ekip=document.getElementById("ekip");
         ekip.setAttribute("data-position","-20,9.7");
         var doctor=document.getElementById("kadin");
         doctor.setAttribute("data-position","4,40");
     }
    //  else{
    //      var ekip=document.getElementById("ekip");
    //      ekip.setAttribute("data-position","-20,29.7");
    //      var doctor=document.getElementById("kadin");
    //      doctor.setAttribute("data-position","4,60");
    //  }
}
