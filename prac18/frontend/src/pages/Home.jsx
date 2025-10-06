import React, { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";
import NoteForm from "../components/NoteForm";
import { getNotes, createNote, deleteNote } from "../api/notesApi";
import "../styles/Notes.css";

export default function Home() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const res = await getNotes();
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleAdd = async (note) => {
    await createNote(note);
    fetchNotes();
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    fetchNotes();
  };

  return (
    <div className="home-container">
      <NoteForm onAdd={handleAdd} />
      <div className="notes-grid">
        {notes.map((note) => (
          <NoteCard key={note._id} note={note} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
