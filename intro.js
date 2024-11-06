no.addEventListener("click",function(){
    alert("Excuse me. You were specifically told not to click this button. Why did you click it? Roll an d10 for damage.");
})

fall.addEventListener("click",function(){
    console.log("started fall");
    document.getElementById("banner").src = "fall.jpg";
    document.body.classList.toggle('fall');
    })

    spring.addEventListener("click",function(){
        console.log("started spring");
        document.getElementById("banner").src = "spring.jpg";
        document.body.classList.toggle('spring');
        })

        winter.addEventListener("click",function(){
            console.log("started winter");
            document.getElementById("banner").src = "winter.jpg";
            document.body.classList.toggle('winter');
            })

            summer.addEventListener("click",function(){
                console.log("started summer");
                document.getElementById("banner").src = "summer.jpg";
                document.body.classList.toggle('summer');
                })