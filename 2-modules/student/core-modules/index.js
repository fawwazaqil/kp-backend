const fs = require('node:fs');
const users = ['John', 'Jane', 'Bob', 'Alice'];
const path = require('node:path');
const crypto = require('node:crypto');

// UUID is universal unique identifier
const uuid = crypto.randomUUID();
console.log(uuid);



// Example1: Create files for each user
const contentToWrite =  "Hello, Data!";
const fileName = `${uuid}.txt`;

    fs.writeFile(fileName, contentToWrite,function(err) {
    {
        if (err) {
            console.logg(err);
        } else {
            console.log("File written successfully");
        }
    }
});

// // Example2: Create files for each user
// const contentToWrite =  "Hello, Data!";
// const fileName = "hello.txt";

// users.forEach((user,index) => {
//     const contentToWrite = `Hello, ${user}!`;
//     const fileName = `users/${index+1}-${user}.txt`;


//     fs.writeFile(fileName, contentToWrite,function(err) {
//         if (err) {
//             console.logg(err);
//         } else {
//             console.log("File written successfully");
//         }
//     });
// });

// //// Example3: Create a single file for all users (using LINUX + WINDOWS)
// // Below is "hardcoded" to the fileName;
// // const fileName = "data/thisisdata.txt"; 
// // Below is best-practice to use on both LINUX and WINDOWS:
// const fileName = path.join("users_path","users.txt");
// const contentToWrite = users.join('\n');

// fs.writeFile(fileName, contentToWrite, function(err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File written successfully");
//     }
// });