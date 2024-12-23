const express = require('express');
const router = express.Router();
const songsController = require


router.post('/', songsController.createSong);
router.get('/:id', songsController.getSong);
router.get('/', songsController.getSongs);
router.delete('/:id', songsController.deleteSong);
router.put('/:id', songsController.updateSong);

module.exports = router;