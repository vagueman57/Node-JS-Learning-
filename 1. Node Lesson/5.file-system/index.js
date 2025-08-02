// fs --> file system
const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, 'data');

if(!fs.existsSync(dataFolder)){
  fs.mkdirSync(dataFolder);
  console.log("data folder created");
}

const filePath = path.join(dataFolder, 'example.txt')
// synchronised way of creating the file 
fs.writeFileSync(filePath, "Hello from node js")
console.log("file created successfully")


const readContentFromFile = fs.readFileSync(filePath, "utf8");
console.log('file content:', readContentFromFile)

fs.appendFileSync(filePath, '\nThis is a new line added to that file');
console.log("new file content added")

// async way of creating the file
const asyncFilePath = path.join(dataFolder, 'async-example.txt');
fs.writeFile(asyncFilePath, "Hello, async node js", (err) => {
  if(err) throw err;
  console.log('Async File is created successfully');

  fs.readFile(asyncFilePath, 'utf8', (err, data) => {
    if(err) throw err;
    console.log("Async file content:", data);

    fs.appendFile(asyncFilePath, "\nThis is another line added", (err) => {
      if(err) throw err;
      console.log("New line added async file")

      fs.readFile(asyncFilePath, "utf8", (err, updatedData) => {
        if(err) throw err;
        console.log("updated file content:", updatedData)
      })
    })
  })
})