import React, { useState } from "react";
import { createNote } from "../api";
import { useNavigate } from "react-router-dom";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createNote(title, content, token);
      navigate("/notes"); // Redirect to notes page after successful creation
    } catch (error) {
      console.error("Error creating note", error);
    }
  };

  return (
    <div>
      <h2>Create Note</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Create Note</button>
      </form>
    </div>
  );
};

export default CreateNote;
