const fs = require('fs')

fs.readFile('test2.csv', 'utf-8', (err,data)=>{
  let something = data.split('\n')
  const songs = [];
  // something.shift()
  
  something.forEach(data => {
    
    const song = data.split(',')
    const title = song[0]
    const genre = song[1]
    const composer = song[2]
    const visualizer = song[3]
    const vocal = song[4]
    const dlc = String(song[5]).toLowerCase().includes('dlc')
    // const dlc = song[5]
    songs.push({title,genre,composer,visualizer,vocal,dlc})
  })
  console.log(songs)
})