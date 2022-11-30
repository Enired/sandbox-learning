require('dotenv').config()
const fs = require('fs');
const pg = require('pg');
const dbConnectionString = process.env.ELEPHANT_DB_URL;


fs.readFile('sheet2.tsv', 'utf-8', (err, data) => {
  let something = data.split('\n');
  const songs = [];
  something.shift()
  const client = new pg.Client(dbConnectionString);
  client.connect((err) => {
    if (err) {
      return console.error('!!!!!!!Error!!!!!!: ', err);
    }

    let counter = 0;
    something.forEach(data => {
      const song = data.split('\t');
      const title = song[0];
      const genre = song[1];
      const composer = song[2];
      const visualizer = song[3];
      const vocal = song[4][0] !== '—' ? song[4] : 'N/A';
      const dlc = String(song[5]).toLowerCase().includes('dlc');
      // const dlc = song[5]
      // songs.push({ title, genre, composer, visualizer, vocal, dlc });
      
      const query = `
      INSERT INTO songs (name, genre, composer, visualizer, vocal, dlc)
      VALUES ($1, $2, $3, $4, $5, $6)
      `;
      const values = [title, genre, composer, visualizer, vocal, dlc];
      
      client.query(query, values).then(()=>{
        counter++
        console.log(`Item ${counter}/${something.length} inserted.`)
        if (counter === something.length) {
          console.log('done inserting');
          client.end();
      }

      })
      // client.query(query,values).then(()=>{
        //   counter++
        // })
        
    });
    
    
    
  });
  
  console.log('really done');
});