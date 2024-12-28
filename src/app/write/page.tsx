"use client";

import Image from "next/image";
import styles from "./writePage.module.css";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import ReactQuill from "react-quill";
import { useAuth } from "@/components/authcontext/AuthContext";
import axios from "axios";


const WritePage = () => {
  const router = useRouter();
  const {isAuthenticated} = useAuth();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [video, setVideo] = useState<File | null>(null);
  const [value, setValue] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [catSlug, setCatSlug] = useState<string>("");

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     setFile(e.target.files[0]);
  //   }
  // };

  // const handlePublish = async () => {
  //   if (!title || !value || !catSlug) {
  //     alert("Title, content, and category are required!");
  //     return;
  //   }

  //   // Create a FormData object to send data
  //   const formData = new FormData();
  //   formData.append("title", title);
  //   formData.append("description", value);
  //   formData.append("type", catSlug);

  //   // Append files if they exist
  //   if (file) formData.append("blogcoverImage", file);
  //   if (video) formData.append("blogVideo", video);

  //   try {
  //     // Send the request with the JWT token
  //     const token = localStorage.getItem("authToken");
  //     const response = await axios.post("/api/blogs/write", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     // Redirect after successful blog post creation
  //     router.push("/"); // You can customize the redirection
  //   } catch (error) {
  //     console.error("Error publishing blog:", error);
  //     alert("Failed to publish blog.");
  //   }
  // };

  

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/images/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              // onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/images/image.png" alt="" width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image src="/images/external.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        {/* <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        /> */}
      </div> 
      {/* onClick={handlePublish} */}
      <button className={styles.publish} >
        Publish
      </button>
    </div>
  );
};

export default WritePage;