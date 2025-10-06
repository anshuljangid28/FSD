import React from "react";

export default function NoteCard({ note, onDelete }) {
  return (
    <div className="note-card">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <small>{new Date(note.timestamp).toLocaleString()}</small>
      <button onClick={() => onDelete(note._id)}>Delete</button>
    </div>
  );
}
