let my_alpha = ["a", "s", "d", "f", "g","h","j","k","l"];
let myAllElement = document.querySelectorAll(".sound");

window.addEventListener("keydown", function(e){
    if (my_alpha.includes(e.key)){
        let sound = document.querySelector(`audio[data-key=${e.key}]`);
        let myelement = document.querySelector(`div[data-key=${e.key}]`)
        myelement.classList.add("playing")
        sound.currentTime = 0
        sound.play()
        setTimeout(()=>{
            myelement.classList.remove("playing")
        },500)
    }
})

myAllElement.forEach(e => {
    e.addEventListener("click",()=>{
        let datakey = e.getAttribute("data-key")
        let mycurrentsound = document.querySelector(`audio[data-key=${datakey}]`)
        e.classList.add("playing")
        mycurrentsound.currentTime = 0
        mycurrentsound.play()
        setTimeout(()=>{
            e.classList.remove("playing")
        },500)
    })
});