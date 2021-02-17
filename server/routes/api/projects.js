const router = require('express').Router();


let wait = async function(ms) {
	return new Promise((resolve) => setTimeout(() => resolve(), ms));
}


let allProjects = [
  {
    _id: 'phuktal-gonpa',
    title: 'Phunktal Gonpa',
    coverContent: 'Phuktal is an ancient Buddhist monastic settlement nestled in the Zanskar ranges of Northern India. It is an example of the development of an isolated human settlement in response to the geology and human ingenuity in construction using earth as the raw material. The architecture of the settlement performatively explores the very nature of the existing landscape, maintaining a type of conditional isolation, acting as an important agent which shapes the community. Here the architecture does not metabolize its landscape, but landscape acts like a machine that makes environments.  The initial stages of construction of the structure dates back to a thousand years, when it started inside a cave, gradually developing over time. Landscape, extreme climate, and isolation are the key elements shaping this monastic community. These elements were not only important in determining the geometry of the structure but also played an important role in defining the use of materials.  High amounts of snow and rainfall made it essential to use materials like Stone and Mud. Since pure mud is not suitable for such harsh climatic conditions, the main foundation of the complex is made of decreasing sizes of stone and the walls are then built with adobe blocks. This gradient allows for random voids which absorbs any tremors by constantly settling, in order to achieve stability. The undressed stones along with the inward gradient in the foundation helps in added stability by maintaining an angle of repose. This angle of repose in relation to the scale of the foundations allows for an added space in the lower section of the houses as a basement level. The natural feature that has helped this construction withstand even more, is the shallow reach of the hard strata. This helps in minimizing vibrations by acting as a shock absorber. This complex amalgamation of the natural terrain and construction technique,  gives a visual appearance as if they were carved out if the cliff face. The geometry of the monastery developed organically over time makes it a challenge to establish connections between different structures. The pathways connecting the structures are very steep. Thus to make them safer, there are various construction techniques adapted. A stone base on the outer periphery of the pathway has been constructed in order to make the pathway strong, avoiding the top strata from losing grip. This is done using a technique called pitching. This monastery has always been a source of ancient Buddhist history since the arrival of the Buddhist culture from Tibet into India. Today this complex stands as a Buddhist monastery which is visited by many tourists every year and is an example of earth architecture that has been ongoing since over 1000 years. This research compiles an architectural analysis of the settlement by trying to understand the different factors determining the development of the place. The report includes a set of conservation documents of the historic place undertaken by a team of students as a means to understand the place.',
    teamCredits: '',
    sheets: [
      {
        title: 'Site Introduction',
        _id: '01_site_introduction',
        content: 'Landscape, extreme climate, and isolation are the key elements shaping this monastic community. These elements were not only important in determining the geometry of the structure but also played an important role in defining the use of materials. High amounts of snow and rainfall made it essential to use materials like Stone and Mud. Since pure mud is not suitable for such harsh climatic conditions, the main foundation of the complex is made of decreasing sizes of stone and the walls are then built with adobe blocks. This gradient allows for random voids which absorbs any tremors by constantly settling, in order to achieve stability. The undressed stones along with the inward gradient in the foundation helps in added stability by maintaining an angle of repose. This angle of repose in relation to the scale of the foundations allows for an added space in the lower section of the houses as a basement level. The natural feature that has helped this construction withstand even more, is the shallow reach of the hard strata. This helps in minimizing vibrations by acting as a shock absorber. This complex amalgamation of the natural terrain and construction technique,  gives a visual appearance as if they were carved out if the cliff face.'
      },
      {
        title: 'Site Evolution',
        _id: '02_site_evolution',
        content: 'able was I'
      },
      {
        title: 'Site Layout',
        _id: '03_site_layout',
        content: 'errrrr....'
      },
      {
        title: 'Site Analysis',
        _id: '04_site_analysis',
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