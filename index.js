const fs = require('fs/promises');

async function processFile(){
    await fs.appendFile('simple.text',"helloosoismdklc")
    await fs.writeFile('simple.text', 'ambuj mishra')
}
processFile()