import express from 'express';
import fs, { readdirSync } from 'fs';
const app = express();
import * as dotenv from 'dotenv'; 
dotenv.config();

const PORT = process.env.PORT;

app.get("/", function (request, response) {
  response.send("App is running");
});

app.get("/getDateTime", function (request, response) {

  const date = new Date().toDateString();
  const time = new Date().toTimeString();

  fs.writeFile("./backend/date-time.txt", 
                `Current Date - ${date} \nCurrent Time - ${time}`,
                (err)=>{
                  if(err) console.log("error occured")
                });
   response.send(`File created successfully, ${date} ${time}`);
});

app.get("/readFiles", function (request, response) {

  let folder = "./backend";
  let filenames = fs.readdirSync(folder);
  
  filenames.forEach((file)=>{
    console.log("Filename:" , file );
  })

  response.send("All the file names are displayed");
});


app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
