import inquirer  from "inquirer";
// const qr = require("qr-image");
import qr from "qr-image";
import fs from "fs";

inquirer.prompt(
    [{
        name: 'url',
        message: "Enter the site url"
    }],).then(
    (answers) => {
        const url = answers.url;
        var qr_image = qr.image(url, {type: 'png'});
        qr_image.pipe(fs.createWriteStream(`qr.png`));

        fs.writeFile("URL.text", url, (err) => {
            if (err) throw err;
            console.log("File has been created")
        })
    }
).catch((error) => {
    console.log(error);
});