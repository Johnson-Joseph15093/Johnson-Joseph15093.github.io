function hamburger() {
    document.getElementById("primaryNav").classList.toggle("hide");  
}

function Settoday() {
    var today = new Date();

    var weekday = today.getDate();
    if(weekday == "5"){
        document.getElementById("Fri").style.display="block";
    }
    else {
        document.getElementById("other").style.display="block";
    }
}