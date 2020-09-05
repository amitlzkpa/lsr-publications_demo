const sharp = require('sharp');


sharp('./public/imgs/in.jpg')
  .png()
  .tile({
    size: 512
  })
  .toFile('./out/output.dz', function(err, info) {
    // output.dzi is the Deep Zoom XML definition
    // output_files contains 512x512 tiles grouped by zoom level
  });