// const calc= require('./calcualtor.js');

// console.log(calc.sum(6,5));
// console.log(calc.diff(5,3));

// const http = require('http');

// http.createServer((req,res)=>{
//     //localhost:4000
//    if(req.url==='/'){
//        if(res.statusCode===200){
//           res.write('<h1>Hello Home</h1>')
//        }
//     }
//     else if(req.url==='/about')
//     {
//             res.write('<h1>Hello From About</h1>');
//     }
//     else{
//         res.write('<h1>404 Page not Found</h1>')
//     }
//        res.end();
// }).listen(4000);

// const fs =require('fs');

//  fs.writeFile('hello.txt','Hello World', (err)=>{
//     if(err){
//         console.log(err);
//     }
//  });

// fs.readFile('hello.txt',(err,data)=>{
//     if(err){
//         console.log(err.message);
//     }
//   console.log(data.toString());
// })

// fs.writeFile('./hello.txt', 'Mahmoud World', (err) => {
//       if(err){
//         console.log(err.message);
//       }
// });
 

// fs.appendFile('./hello.txt', 'Hello Mahmoud', (err) => {
//      if(err){
//         console.log(err.message);
//      }
// });

// fs.mkdir('mydir', (err) => {
//       if(err){
//         console.log(err.message);
//       }
// });

// fs.rmdir('mydir', (err) => {
//       if(err){
//         console.log(err.message);
//       }
// });

// const os =require('os');

// console.log(os.networkInterfaces());

// const _ = require('lodash');

// const nums=[1,2,3,3,4];
// console.log(_.isArray(nums));
// console.log(_.uniq(nums));
