import Note from "../models/Note.js";

// Create a new note
export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all notes
export const getNotes = async (req, res) => {
  const notes = await Note.find().sort({ timestamp: -1 });
  res.json(notes);
};

// Get one note
export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json(note);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update note
export const updateNote = async (req, res) => {
  try {
    const updated = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete note
export const deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
