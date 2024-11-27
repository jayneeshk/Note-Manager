const Note = require('../models/Note');

// Create Note
exports.createNote = async (req, res) => {
  try {
    console.log('hello', req.body);
    const note = new Note({
      ...req.body,
      userId: req.user.id,
    });
    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get Notes
exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.id }).sort({ isPinned: -1, createdAt: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Update Note
exports.updateNote = async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedNote);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Delete Note
exports.deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: 'Note deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Pin Note
exports.pinNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    note.isPinned = !note.isPinned;
    await note.save();
    res.json(note);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
