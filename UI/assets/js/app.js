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
  