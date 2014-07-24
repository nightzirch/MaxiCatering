$(document).ready(function(){
   // Lets find the active menu element
    var mainMenu = $("#main-menu li");
    var path = window.location.pathname.split("/");
    var loop = true;
    
    for(var i = path.length -1; i > 0; i--) {    
        if(loop) {
            var loc = "";
            for(var y = 1; y <= i; y++) {
                loc += "/" + path[y];
            }

            for(var y = 0; y < mainMenu.length; y++) {
                var href = $(mainMenu[y]).find("a")[0].getAttribute("href");

                if(href == loc) {
                    mainMenu[y].classList.add("active");
                   // loop = false;
                }
            }
        }
    }
});