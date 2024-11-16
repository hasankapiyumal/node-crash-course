//read file data
const fs = require("fs");
// fs.readFile('./docs/blog.txt',(err,data)=>{
// if(err){
//     console.log(err);
// }else{
//     console.log(data.toString());
// }
// });

//writing files
// fs.writeFile("./docs/blog.txt", "Hello world", () => {
//   console.log("file was written");
// });

// fs.writeFile("./docs/blog1.txt", "Hello node", () => {
//   console.log("file was written");
// });

//directories
// if(!fs.existsSync('./assets')){

//     fs.mkdir('./assets',(err)=>{
//         if(err){
//             console.log(err);
//         }else{
//             console.log('folder created');
//         }
//     })
// }else{
//     //deleteing directories
//     fs.rmdir('./assets',(err)=>{
//         if(err){
//             console.log(err);
//         }else{
//             console.log('folder deleted');
//         }
//     })
// }

//delete files
if(fs.existsSync('./docs/deleteme.txt')){

    fs.unlink('/docs/deleteme.txt',(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log('file deleted');
        }
    })
}