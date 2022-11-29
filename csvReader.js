const fs = require('fs')

fs.readFile('testCSV.csv', 'utf-8', (err,data)=>{
  let something = data.split('\n')
  console.log(something)
  const songs = [];
  something.shift()
  
  // something.forEach(song => {

  // })
})