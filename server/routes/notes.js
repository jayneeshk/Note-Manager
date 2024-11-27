const express = require('express');
const { createNote, getNotes, updateNote, deleteNote, pinNote } = require('../controllers/notes');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createNote);
router.get('/', auth, getNotes);
router.put('/:id', auth, updateNote);
router.delete('/:id', auth, deleteNote);
router.put('/:id/pin', auth, pinNote);

module.exports = router;
