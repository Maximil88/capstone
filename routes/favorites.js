const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const models = require('../models')
const checkAuth = require('../checkAuth')

// GET /api/v1/favorites/
router.get('/', checkAuth, (req, res) => {
  models.Favorites.findAll({ where: { UserId: req.user.id } })
    .then(favorites => {
      res.json(favorites)
    })
});

// DELETE/api/vi/favorites
router.delete('/:id', checkAuth, (req, res) => {
  models.Favorites.destroy({ where: { 
    id: req.params.id,
    UserId: req.user.id 
  }})
    .then(numberDeleted => {
      if (numberDeleted === 0) {
        res.status(404).json({ error: 'could not find that Favorite' })
      return
    }

    res.json({ success: 'Favorite deleted successfully' })
    })
})


// POST /api/v1/favorites
router.post('/', checkAuth, (req, res) => {
  // check for required fields
  if (!req.body.ArtsyId) {
    res.status(400).json({ error: "please include required field" })
    return
  }
  // create a new favorite in the database
  models.Favorites.create({
    ArtsyId: req.body.ArtsyId,
    UserId: req.user.id
  })
    .then(favorite => {
      // respond to client with new favorite
      res.status(201).json(favorite)
    })
})

module.exports = router;