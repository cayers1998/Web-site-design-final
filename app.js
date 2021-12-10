var toggle=false;

document.body.querySelector(".menuIcon").addEventListener("click", function (){

    toggle=!toggle;

    if (toggle){
        document.body.querySelector(".menu").style.right="0";
        document.body.querySelector(".trash").style.display = "flex";

    } else {
        document.body.querySelector(".menu").style.right="-200px";
        document.body.querySelector(".trash").style.display = "none";
    }

})
