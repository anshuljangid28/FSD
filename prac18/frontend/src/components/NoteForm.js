import React, { useState } from "react";

export default function NoteForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return alert("Please fill all fields");
    onAdd({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Write your note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">Add Note</button>
    </form>
  );
}
