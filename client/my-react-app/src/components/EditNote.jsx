import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateNote } from "../api";

const EditNote = () => {
  const { id } = useParams(); // Get note ID from URL
  const [note, setNote] = useState({ title: "", content: "" });
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await fetchNotes(token);
        const noteToEdit = response.notes.find((note) => note._id === id);
        if (noteToEdit) {
          setNote(noteToEdit);
        }
      } catch (error) {
        console.error("Error fetching note", error);
      }
    };
    fetchNote();
  }, [id, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateNote(id, note.title, note.content, token);
      navigate("/notes"); // Redirect to notes page after successful update
    } catch (error) {
      console.error("Error updating note", error);
    }
  };

  return (
    <div>
      <h2>Edit Note</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={note.title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          value={note.content}
          onChange={(e) => setNote({ ...note, content: e.target.value })}
        ></textarea>
        <button type="submit">Update Note</button>
      </form>
    </div>
  );
};

export default EditNote;
