// collapse to see the delicacies chosen
var collapsible = document.getElementsByClassName("click-collapsible"); 
for (var i = 0; i < collapsible.length; i++){
    collapsible[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "flex"){
            content.style.display = "none"; 
        }
        else{
            content.style.display = "flex"
           
        }
    });

    }


    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    
    btn.onclick = function() {
        modal.style.display = "block";
    }

  
    span.onclick = function() {
        modal.style.display = "none";
    }


    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    