const sharp = require('sharp');


let inFile = './public/imgs/in.jpg';
let outFolder = './out/output.dz';


sharp(inFile)
  .png()
  .tile({
    size: 512
  })
  .toFile(outFolder, function(err, info) {
    // output.dzi is the Deep Zoom XML definition
    // output_files contains 512x512 tiles grouped by zoom level
  });