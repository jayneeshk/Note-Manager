import React, { useState, useEffect } from "react";
import { fetchNotes, deleteNote, createNote } from "../api";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: "", content: "" });
  const [successMessage, setSuccessMessage] = useState(""); // For success message
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserNotes = async () => {
      try {
        const response = await fetchNotes();
        setNotes(response.notes);
      } catch (error) {
        console.error("Error fetching notes", error);
      }
    };

    if (token) {
      fetchUserNotes();
    } else {
      navigate("/login");
    }
  }, [token, navigate]);

  const handleCreateNote = async (e) => {
    e.preventDefault();
    try {
      const response = await createNote(newNote);
      setNotes((prevNotes) => [...prevNotes, response.note]);
      setNewNote({ title: "", content: "" }); // Reset form
      setSuccessMessage("Note created successfully!");

      // Clear the message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error creating note", error);
      alert("Error creating note: " + (error.message || "Unknown error"));
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    } catch (error) {
      console.error("Error deleting note", error);
    }
  };

  return (
    <div>
      <h2>Your Notes</h2>
      {/* Success Message */}
      {successMessage && <div style={{ color: "green", marginBottom: "10px" }}>{successMessage}</div>}
      
      {/* New Note Form */}
      <form onSubmit={handleCreateNote}>
        <input
          type="text"
          placeholder="Title"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          value={newNote.content}
          onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
        ></textarea>
        <button type="submit">Add Note</button>
      </form>

      {/* Notes List */}
      <ul>
        {notes.map((note) => (
          <li key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button onClick={() => handleDelete(note._id)}>Delete</button>
            <button onClick={() => navigate(`/edit/${note._id}`)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
