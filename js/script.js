// Menu
const menuIcon = document.getElementById("menuIcon")
const navBar = document.querySelector(".navBar")
const navLinks = document.querySelector(".navLinks")
const logo = document.querySelector(".logo")

menuIcon.addEventListener('click', () => {
    navBar.classList.toggle("h-nav")
    navLinks.classList.toggle("v-class")
    logo.classList.toggle("v-class")
})

// Count Down

const finalTime = new Date("september 8, 2022  10:00:00").getTime()

const updateCountdown = setInterval(function() {
    const currentTime = new Date().getTime()
    const difference = finalTime - currentTime
    
    const days = Math.floor(difference / (3600 * 24 * 1000))
    const hours = Math.floor((difference % (1000 * 3600 * 24)) / (1000 * 3600))
    const minutes = Math.floor((difference % (1000 * 3600)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / (1000))

    document.getElementById("days").innerHTML = 
    days + "<br>" + "Days" 

    document.getElementById("hours").innerHTML = 
    hours + "<br>" + "Hours"

    document.getElementById("minutes").innerHTML = 
    minutes + "<br>" + "Minutes"

    document.getElementById("seconds").innerHTML = 
    seconds + "<br>" + "Seconds"

    if (seconds < 10) {
        document.getElementById("seconds").innerHTML = 
        "0" + seconds + "<br>" + "Seconds"
    }

    if (minutes < 10) {
        document.getElementById("minutes").innerHTML = 
        "0" + minutes + "<br>" + "Minutes"
    }

    if (hours < 10) {
        document.getElementById("hours").innerHTML = 
        "0" + hours + "<br>" + "Hours"
    }

    if (days < 10) {
        document.getElementById("days").innerHTML = 
        "0" + days + "<br>" + "Days"
    }
}, 1000)

// sound track

const playTrack1 = document.getElementById("playTrack1")
const playTrack2 = document.getElementById("playTrack2")
const playTrack3 = document.getElementById("playTrack3")

const audioElement1 = new Audio("/audios/1.mp3")
const audioElement2 = new Audio("/audios/2.mp3")
const audioElement3 = new Audio("/audios/3.mp3")

const rangeBar1 = document.getElementById("rangeBar1")
const rangeBar2 = document.getElementById("rangeBar2")
const rangeBar3 = document.getElementById("rangeBar3")

const gif = document.querySelector(".gif")

audioElement1.addEventListener("timeupdate", () => {
    let progress = parseInt((audioElement1.currentTime / audioElement1.duration) * 100)
    rangeBar1.value = progress
})

rangeBar1.addEventListener("change", () => {
    audioElement1.currentTime = (rangeBar1.value * audioElement1.duration) / 100;
});

playTrack1.addEventListener('click', () => {
    if (audioElement1.paused || audioElement1.currentTime <=0) {
        playTrack1.classList.remove("fa-circle-play");
        playTrack1.classList.add("fa-circle-pause");
        audioElement1.play()
        gif.style.opacity = "1"
    } else {
        playTrack1.classList.add("fa-circle-play");
        playTrack1.classList.remove("fa-circle-pause");
        audioElement1.pause()
        gif.style.opacity = "0"
    }   
})

audioElement2.addEventListener("timeupdate", () => {
    let progress = parseInt((audioElement2.currentTime / audioElement2.duration) * 100)
    rangeBar2.value = progress
})

rangeBar2.addEventListener("change", () => {
    audioElement2.currentTime = (rangeBar2.value * audioElement2.duration) / 100;
});

playTrack2.addEventListener('click', () => {
    if (audioElement2.paused || audioElement2.currentTime <=0) {
        playTrack2.classList.remove("fa-circle-play");
        playTrack2.classList.add("fa-circle-pause");
        audioElement2.play()
        gif.style.opacity = "1"
    } else {
        playTrack2.classList.add("fa-circle-play");
        playTrack2.classList.remove("fa-circle-pause");
        audioElement2.pause()
        gif.style.opacity = "0"
    }   
})

audioElement3.addEventListener("timeupdate", () => {
    let progress = parseInt((audioElement3.currentTime / audioElement3.duration) * 100)
    rangeBar3.value = progress
})

rangeBar3.addEventListener("change", () => {
    audioElement3.currentTime = (rangeBar3.value * audioElement3.duration) / 100;
});

playTrack3.addEventListener('click', () => {
    if (audioElement3.paused || audioElement3.currentTime <=0) {
        playTrack3.classList.remove("fa-circle-play");
        playTrack3.classList.add("fa-circle-pause");
        audioElement3.play()
        gif.style.opacity = "1"
    } else {
        playTrack3.classList.add("fa-circle-play");
        playTrack3.classList.remove("fa-circle-pause");
        audioElement3.pause()
        gif.style.opacity = "0"
    }   
})