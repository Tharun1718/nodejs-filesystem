import express from 'express';
import fs from 'fs';
const app = express();

const PORT = 4000;
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩 hello");
});

function getTimeStamp(){
    let d = Date.now();
    let date = new Date(d);
    // console.log(date);
    let day = date.getDate();
    // console.log("day", day);
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    // console.log(month,year)
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time = `${hours}:${minutes}:${seconds}`;
    // console.log(time);
    let fileName =`${day}-${month}-${year}_${time}`;
    // console.log(fileName);
    return {time,fileName};
}

app.post("/createfile", (request, response) => {
    let { time, fileName } = getTimeStamp();
    console.log(time,fileName)
    fs.writeFile(`./files/${fileName}.txt`, time, (err)=>{
       if(err) {
          console.log("Error");
       } else {
        console.log("File created Successfully");
       }
    })
    response.send("file created succesfully");
});

app.get("/readfile", (request,response)=>{
    fs.readdir("./files/",(err, files)=>{
      if(files.length === 0){
        response.send("no files in the directory")
      }else{
        let fileList = "Files available <br>";
        files.forEach((file)=> fileList += file )
      }
      response.send(files)
    })
})



app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
