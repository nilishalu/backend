import inquirer  from "inquirer";
// const qr = require("qr-image");
import qr from "qr-image";
import fs from "fs";

inquirer.prompt(
    [{
        type: 'input',
        name: 'url',
        message: "Enter the site url"
    }],).then(
    (answers) => {
        console.log(`Got your url ${answers.url}`);
        var qr_image = qr.image(answers.url, {type: 'png'});
        qr_image.pipe(fs.createWriteStream(`${answers.url}.png`));

        // var png_string = qr.imageSync(answers.url, {type: 'png'});
    }
).catch((error) => {
    console.log(error);
});