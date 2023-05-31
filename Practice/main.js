function choosePortfolio(evt, tabName) {
    var i, tablinks;
  
    tablinks = document.getElementsByClassName("portfolioTab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("portfolioTab activeTab", "portfolioTab");
    }
  
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " activeTab";
}

function change(evt, dotID, dotName) {
    var i, dots;

    dots = document.getElementsByName(dotName);
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("dot active", "dot");
    }
  
    document.getElementById(dotID).style.display = "block";
    evt.currentTarget.className += " active";
  }


function changeNews(evt, dotID) {
    var i, dots;

    dots = document.getElementsByClassName("newsDot");
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("newsrDot active", "verDot");
    }

    document.getElementById(dotID).style.display = "block";
    evt.currentTarget.className += " active";
}

function hideMapLayer() {
    document.getElementById("map").remove();
}


function openDropdown() {
    document.getElementById('dropdownNavBar').classList.toggle('show');
}
  
window.onclick = function(event) {
    if (!event.target.matches('.dropdownNavBtn')) {
         var dropdowns = document.getElementsByClassName("dropdownNavBar");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

$(window).scroll(function(){
        $(".hoverBtn").css("opacity", 1 - $(window).scrollTop() / $('#start').height());
    });