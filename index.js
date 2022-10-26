const {parse } = require ('csv-parse');
const fs = require('fs');

const results = [];

function isHabitableplanet (planet){
    return planet[koi_disposition] === 'CONFIRMED'
        && planet[koi_insol] > '0.36' && planet[koi_insol] <= '1.11' ;
}
fs.createReadStream('kepler_data.csv')
    .pipe(parse({
        comment: '#',  // this will tell the function that which line are commented
        columns: true ,

    }))
    .on('data', (data)=>{
        if(isHabitableplanet(data)){
        results.push(data);
        }
    })
    .on('error', (error)=>{
        console.log(error);
    })
    .on('end', ()=>{
        console.log(results);
        console.log("Finished reading");
    });
