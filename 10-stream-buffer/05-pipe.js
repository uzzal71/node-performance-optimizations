const fs = require("fs");

const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/output2.txt`);

ourReadStream.pipe(ourWriteStream);
