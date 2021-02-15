const router = require('express').Router();


let wait = async function(ms) {
	return new Promise((resolve) => setTimeout(() => resolve(), ms));
}


let allProjects = [
  {
    _id: 'phuktal-gonpa',
    title: 'Phunktal Gonpa',
    sheets: [
      { title: "Site Introduction"},
      { title: "Site Evolution"},
      { title: "Site Layout"},
      { title: "Site Analysis"},
      { title: "Stages of Construction"},
      { title: "Phase 1 Evolution I"},
      { title: "Phase 1 Evolution II"},
      { title: "Phase 1 Tumbalukhang"},
      { title: "Phase 1 Isometric View"},
      { title: "Phase 2&3 Evolution"},
      { title: "Phase 2&3 Structural Analysis"},
      { title: "Phase 2&3 Isometric View"},
      { title: "Phase 2&3 Structural Analysis"}
    ]
  },
];


router.get('/id/:id', async (req, res) => {
  let id = req.params.id;
  let project = allProjects.find(p => p._id === id);
  await wait(4000);
  return res.json(project);
});


router.get('/all', async (req, res) => {
  let projects = [
    {
      _id: 'phuktal-gonpa',
      sheets: []
    }
  ];
  return res.json(projects);
});




router.get('/test', function(req, res) {
  console.log('Test projects route');
  return res.send('Test projects route');
});



module.exports = router;