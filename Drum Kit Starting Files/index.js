document.addEventListener("keypress",function(event){
    makeSound(event.key)
    changeColor(event.key)
})

countDrum = document.querySelectorAll('.drum').length
for(let i=0;countDrum;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function (){
        key=this.innerHTML;
        makeSound(key)
        changeColor(key)
    })
}


function makeSound(key){
    switch(key){
        case "w":{
            let audio = new Audio("sounds/music_sound0.mp3")
            audio.play()
        }
        case "a":{
            let audio = new Audio("sounds/music_sound1.mp3")
            audio.play()
        }
        case "s":{
            let audio = new Audio("sounds/music_sound2.mp3")
            audio.play()
        }
        case "d":{
            let audio = new Audio("sounds/music_sound3.mp3")
            audio.play()
        }
        case "j":{
            let audio = new Audio("sounds/music_sound4.mp3")
            audio.play()
        }
        case "k":{
            let audio = new Audio("sounds/music_sound5.mp3")
            audio.play()
        }
        case "l":{
            let audio = new Audio("sounds/music_sound6.mp3")
            audio.play()
        }

    }
}
function changeColor(key){
    activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed")
    activeButton.style.color="yellow"
    setTimeout(function(){
        activeButton.classList.remove("pressed")
        activeButton.style.color="rgb(43, 7, 7)"
    },200)
}

