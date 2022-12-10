const router = require('express').Router()
const places = require('../modules/places.js')

router.get("/", (req, res) => {
    res.render("places/index", { places });
  });
  router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
  })
  
  
  router.get('/new', (req, res) => {
    res.render('places/new')
  })
  
  router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
        console.log(place.comments)
        res.render('places/show', { place: places[id], id})
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
  })
  
  
  
  router.put('/:id', (req, res) => {
       let id = Number(req.params.id)
       if (isNaN(id)) {
           res.render('error404')
       }
       else if (!places[id]) {
        res.render('error404')
      }
      
       else{  (!req.body.pic) {
            req.body.pic = 'http://placekitten.com/400/400'
           }
           if (!req.body.city) {
             req.body.city = 'Anytown'
           }
           if (!req.body.state) {
             req.body.state = 'USA'
           }
        
           places[id] = req.body
          res.redirect('/places/${id}')
     }
 })
  
  router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
   }
  else if (!places[id]) {
      res.render('error404')
  }
   else { 
      places.splice(id, 1)
       res.redirect('/places')
  }
 })
  
 router.get('/:id', (req, res) => {
       let id = Number(req.params.id)
      if (isNaN(id)) {
         res.render('error404')
      }
       else if (!places[id]) {
         res.render('error404')
       }
       else {
       res.render('places/show', { place: places[id], id})
       }
     })
  
  router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
  })
  
  router.delete('/:id/rant/:rantId', (req, res) => {
      res.send('GET /places/:id/rant/:rantId stub')
  })
  
  module.exports = router
  
  
module.exports = router