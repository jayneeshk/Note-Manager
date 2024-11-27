import React, { useState } from "react";
import styles from "../styles/NoteForm.module.css";

const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Note Saved:", { title, content });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
      />
      <textarea
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)}
        className={styles.textarea}
      />
      <button type="submit" className={styles.button}>
        Save Note
      </button>
    </form>
  );
};

export default NoteForm;
