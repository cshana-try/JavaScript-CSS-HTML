//make an error for sounds

//assign the songs id to the sound
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound 

    //call the button by ID
    btn.addEventListener('click', () => {
        document.getElementsById(sound).play()
    })
    //if you dont add line below, you wont see the buttons
    document.getElementById('button').appendChild(btn) //append means add
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0; 
    })
}

