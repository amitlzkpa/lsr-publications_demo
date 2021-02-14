const sharp = require('sharp');


let inFile = './public/imgs/in.jpg';
let outFile = './out/o.dz';


sharp(inFile)
  .png()
  .tile({
    size: 512
  })
  .toFile(outFile, function(err, info) {
    // output.dzi is the Deep Zoom XML definition
    // output_files contains 512x512 tiles grouped by zoom level
  });