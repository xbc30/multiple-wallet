const fs = require('fs');
const jsonFormat = require('strip-json-comments');
const path = require('path');

const loc = path.join(__dirname, '/config.json');
const config = function(){
    let exists = fs.existsSync(loc);
    let items = {};
    if(exists){
        let data = fs.readFileSync(loc).toString();
        try{
            items = JSON.parse(jsonFormat(data));
        }catch(error){
            console.error("load json error, msg=" + error.message)
        }
    }else{
        console.log("'config.json doesn't existed");
    }
    return items;
}();
module.exports = config;