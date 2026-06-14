const particles = document.getElementById("particles");

for(let i=0;i<150;i++){
const p = document.createElement("div");
p.classList.add("particle");

const h = Math.random()*20+10;

p.style.width = "1.5px";
p.style.height = h + "px";
p.style.left = Math.random()*100 + "%";
p.style.animationDuration = (Math.random()*5+3) + "s";
p.style.animationDelay = Math.random()*5 + "s";

particles.appendChild(p);
}

/* INTRO ENTER */
document.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        const intro = document.getElementById("intro");

        intro.style.opacity = "0";
        intro.style.transition = "1s ease";

        setTimeout(()=> intro.remove(), 1000);

        document.querySelector(".container").style.opacity = "1";
    }
});