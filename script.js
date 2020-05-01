const songs = [
  "bensound-acousticbreeze.mp3", "bensound-memories.mp3", "bensound-summer.mp3"
]

const createSongList = () => {
  const list = document.createElement('ol')

  for(let i = 0; i < songs.length; i++) {
    const item = document.createElement('li')
    item.appendChild(document.createTextNode(songs[i]))

    list.appendChild(item)
  }
  return list
}

document.getElementById('songList').appendChild(createSongList())

songList.onclick =(e) => {
 
 const clickedItem = e.target
 const source = document.getElementById('source')
 source.src = 'songs/' + clickedItem.innerText
 

 document.getElementById('currentlyPlayingSong').innerText = "currently Playing: "
 document.getElementById('currentSong').innerText = clickedItem.innerText

 palyer.load()
 palyer.play()
}


const playAudio = () => {

palyer.play()

}

const pauseAudio = () => {
  palyer.pause()
}

const slider = document.getElementById('volumeSlider')
slider.oninput =(e) => {
 const volume = e.target.value
 palyer.volume = volume
}

const updateProgress = () => {
  if(palyer.currentTime > 0) {

    const progressBar = document.getElementById('progress')

    progressBar.value = (palyer.currentTime / palyer.duration) * 100
  }
}