no.addEventListener("click",function(){
    alert("Excuse me. You were specifically told not to click this button. Why did you click it? Roll an d10 for damage.");
})

fall.addEventListener("click",function(){
    console.log("Started Fall");
    document.getElementById("banner").src = "fall.jpg";
    document.getElementById("default").style.display="none";
    document.getElementById("fall").style.display = "initial";
    document.body.classList.toggle('fall');
    })
