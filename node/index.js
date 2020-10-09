const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
   const endpoint = req.url;
   if( endpoint==='/start' ){
      fs.readFile('./index.html',(err, data)=>{
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.write(data);
         res.end();
      });
   }
   if( endpoint==='/api' ){
      // ここに処理を記述してください。  
      req.on("data",(data)=>{
         const obj = JSON.parse(data);
         const objArray = obj["obj"];
         const patternNum = []
         const patternText = []
         const result = []
         let tmp = 3
         for(let i=0;i<4;i++){
            for(let j=0; j<tmp; j++){
               patternNum.push(objArray[i]["num"]*objArray[i+j]["num"])
               patternText.push(objArray[i]["text"] + " " + objArray[i+j]["text"])
            }
            tmp = tmp - 1;  
         }
         
         for(let k=1; k<=30; k++){
            for(let l=0; l<patternNum.length; l++){
               if(patternNum[l]==k){
                  result.push(patternText[l]);
               }
            }
            if()

         }
      }).on("end",()=>{
         res.end();
      })
      
   }
});
server.listen(8080); 