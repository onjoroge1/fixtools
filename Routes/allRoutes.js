const express = require("express");
const routers = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const libre = require('libreoffice-convert');
var toPdf = require("office-to-pdf")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads/");
    },
    filename: function (req, file, cb) {
        cb(
            null,
            new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
        );
    },
});



const docsToPDF = (req , file , callback) => {
    let ext = path.extname(file.originalname)


    console.log(ext )

    if(ext !== '.docx' && ext !== '.doc' ){
        return callback('this is not supported')
    }

    callback(null , true)
}



const docxToPDF = multer({
    storage: storage,
    fileFilter : docsToPDF
});

routers.get('/down', (req, res)=>{
    res.send('ok')
})

const pdfToDocxFilter = (req , file , callback) => {
    var ext = path.extname(file.originalname)

    if(ext !== '.pdf' ){
        return callback('not supported')
    }
    callback(null , true)
}

const pdfToDocx = multer({
    storage: storage,
    fileFilter : pdfToDocxFilter
});





routers.post("/fileUpload",  docxToPDF.single('file') ,(req , res) => {
    if(req.file){
        const file =  fs.readFileSync(req.file.path)
        let outputFilePath = Date.now() + "output.pdf"

        libre.convert(file , '.pdf' , undefined , (err , done) => {
            if(err){
                fs.unlinkSync(req.file.path)
                fs.unlinkSync(outputFilePath)

                res.send('some error has taken in convertion')
            }

            try {
                fs.writeFileSync(`./uploads/${outputFilePath}`, done)
                console.log({outputFilePath})

            }catch(err){
                console.log(({err}))
            }
            res.download(`./uploads/${outputFilePath}` , (err , done) => {
                if(err){
                    console.log({err})
                    fs.unlinkSync(req.file.path)
                    fs.unlinkSync(outputFilePath)

                    res.send('some error has taken in download ')
                }
                fs.unlinkSync(req.file.path)
                fs.unlinkSync(`./uploads/${outputFilePath}`)

            })
        } )

    }



});


routers.post('/officetopdf' , pdfToDocx.single('file') , async (req , res) => {
    let path = `./${req.file.path}`
    var wordBuffer = fs.readFileSync(path)


    var pdfBuffer = await toPdf(wordBuffer)
    // return res.status(200).json({
    //     success: true,
    //     file : pdfBuffer,
    //     message: 'your request has been submitted'
    // })


    console.log(pdfBuffer);
    res.send(pdfBuffer)


    // converter.generatePdf(req.file.filename, function(err, result) {
    //     console.log(err)
    //     if (result?.status === 0) {
    //         console.log('Output File located at ' + result.outputFile);
    //     }
    // });




} )

module.exports = routers