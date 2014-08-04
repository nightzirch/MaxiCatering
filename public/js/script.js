$(document).ready(function(){
   // Lets find the active menu element
    var mainMenu = $("#main-menu li");
    var mainMenuDropdown = $("#main-menu li.dropdown");
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
    $(mainMenuDropdown).hover(function() {
        $(this).addClass("open");
    }, function(){
        $(this).removeClass("open");
    });
 
    //Equal height to the blocks
    var currentTallest = 0,
    currentRowStart = 0,
    rowDivs = new Array(),
    $el,
    topPosition = 0;

    $('.blocks').each(function() {
    
        $el = $(this);
        topPostion = $el.position().top;
        
        if (currentRowStart != topPostion) {
        
            // we just came to a new row.  Set all the heights on the completed row
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
        
        // set the variables for the new row
        rowDivs.length = 0; // empty the array
        currentRowStart = topPostion;
        currentTallest = $el.height();
        rowDivs.push($el);
        
        } else {
        
        // another div on the current row.  Add it to the list and check if it's taller
        rowDivs.push($el);
        currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        
        }
        
        // do the last row
        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
        rowDivs[currentDiv].height(currentTallest);
        }
    
    });
    
});