function changeBackground()
{
    console.log("PRINT SOMETHING")
    // get files
    var fs = require('fs');
    var files = fs.readdirSync('backgrounds/')
    // generate random number to select image from folder
    var randomNum = Math.floor(Math.random() * files.length);
    console.log("This is the random number generated: " + randomNum);
    // now return file at randomNum index
    var file = files[randomNum];
    console.log("This is the randomly selected filename: " + file);
    return file;
}