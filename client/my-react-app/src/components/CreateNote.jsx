import React, { useState } from "react";
import { createNote } from "../api";
import { useNavigate } from "react-router-dom";
import axios from "axios";  

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Title: ', title);
      console.log('Content: ', content);
      const note = {
        "title": title,
        "content": content
      }
      const response = await createNote(note);
      // const response = await createNote({
      //   "title": "testmail",
      //   "content": "kskfk"
      // })
      // console.log('token at frontend ', token);
      // const response = await axios.post(
      //   "http://localhost:5000/api/notes",
      //   {
      //     title: "akdsjaks",
      //     content: "sadkjasd"
      //   },
      //   {
      //     headers: {
      //       Authorization: token // Replace this with your token logic
      //     }
      //   }
      // );
      
      // console.log(response.data);
      
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
