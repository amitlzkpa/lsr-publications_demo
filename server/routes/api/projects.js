const router = require('express').Router();


let wait = async function(ms) {
	return new Promise((resolve) => setTimeout(() => resolve(), ms));
}


let allProjects = [
  {
    _id: 'phuktal-gonpa',
    title: 'Phunktal Gonpa',
    coverContent: 'Phugtal Monastery or Phugtal Gompa (often transliterated as Phuktal) is a Buddhist monastery located in the remote Lungnak Valley in south-eastern Zanskar, in the Himalayan region of Ladakh, in Northern India. It is one of the only Buddhist monasteries in Ladakh that can still be reached only by foot. Supplies to the monastery are brought on horses, donkeys, and mules in the warmer months, and in the frozen winters, they are transported through the frozen Zanskar River. A road is expected to be built up to the monastery, however, for now, it is a day\'s walk from Village Cha or Village Khangsaar, the end of the road leading from Padum.',
    teamCredits: '',
    sheets: [
      {
        title: 'Site Introduction',
        _id: 'site_introduction',
        content: 'Landscape, extreme climate, and isolation are the key elements shaping this monastic community. These elements were not only important in determining the geometry of the structure but also played an important role in defining the use of materials. High amounts of snow and rainfall made it essential to use materials like Stone and Mud. Since pure mud is not suitable for such harsh climatic conditions, the main foundation of the complex is made of decreasing sizes of stone and the walls are then built with adobe blocks. This gradient allows for random voids which absorbs any tremors by constantly settling, in order to achieve stability. The undressed stones along with the inward gradient in the foundation helps in added stability by maintaining an angle of repose. This angle of repose in relation to the scale of the foundations allows for an added space in the lower section of the houses as a basement level. The natural feature that has helped this construction withstand even more, is the shallow reach of the hard strata. This helps in minimizing vibrations by acting as a shock absorber. This complex amalgamation of the natural terrain and construction technique,  gives a visual appearance as if they were carved out if the cliff face.'
      },
      {
        title: 'Site Evolution',
        _id: 'site_evolution',
        content: 'able was I'
      },
      {
        title: 'Site Layout',
        _id: 'site_layout',
        content: 'errrrr....'
      },
      {
        title: 'Site Analysis',
        _id: 'site_analysis',
        content: 'I saw elba'
      },
    ]
  },
];


router.get('/id/:id', async (req, res) => {
  let id = req.params.id;
  let project = allProjects.find(p => p._id === id);
  // await wait(4000);
  return res.json(project);
});


router.get('/all', async (req, res) => {
  return res.json(allProjects);
});




router.get('/test', function(req, res) {
  console.log('Test projects route');
  return res.send('Test projects route');
});



module.exports = router;