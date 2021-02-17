var express = require('express');
var router = express.Router();
var sodaData = require('../data/sodas2.json');


//! CREATE new soda JSON
router.post('/v1/status/sodas/add', (req, res, next) => { 
  var getLastID = sodaData[sodaData.length - 1]
  var newJSON = {
    id:Number(getLastID.id) + 1,
    name: req.body.name
  };
  res.send(newJSON);
//   var newSoda = {
//     id: Number(getLastID.id) + 1,
//     name: req.body.name,
//     cost: req.body.cost,
//     quantity: req.body.quantity,
//     desc: req.body.desc
//   };
//   // sodaData.push(newSoda);
//   sodaData.push({
//     "id": Number(getLastID.id) + 1,
//     "name": "Fizzoooo",
//     "cost": 10,
//     "quantity": 100,
//     "desc": "An effervescent fruity experience with hints of grape and coriander."
// });
//   res.json(sodaData)
});

// //! CREATE new soda JSON
// router.post('/v1/status/sodas/add', (req, res, next) => { 
//   var arr = JSON.parse(sodaData.keys);
//   res.send(arr)
//   fs.readFile(arr, 'utf-8', (err, data) => {
//     if (err) throw err;
//     var getLastID = sodaData[sodaData.length - 1]
//     var newSoda = {
//       "id": Number(getLastID.id) + 1,
//       "name": req.body.name,
//       "cost": req.body.cost,
//       "quantity": req.body.quantity,
//       "desc": req.body.desc
//     };

//     fs.writeFile(sodaData, JSON.stringify(newSoda), 'utf-8', (err) => {
//       if (err) throw err;
//       res.send(sodaData);
//     })
//   })
// });

// //! READ all of soda JSON
router.get('/v1/status/sodas/', (req, res, next) => {
  res.send(sodaData);
});

// //! READ individual soda JSON
router.get('/v1/status/sodas/:id', (req, res, next) => {
  var getID = req.params.id;
  var soda = sodaData.find(x => x.id === parseInt(getID));
  if (!soda) res.status(404).send('Soda not yet added')
  res.send(soda); 
});

//! UPDATE soda JSON
router.put('/v1/status/sodas/:id', (req, res, next) => {
  res.send(req.params);
});

//! DELETE soda JSON
router.put('/v1/status/sodas/:id', (req, res, next) => {
  res.send(req.params);
});

module.exports = router;
