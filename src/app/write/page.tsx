"use client";
import Image from "next/image";
import styles from "./writePage.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import RichTextEditor from "../EditorContent/page";
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const WritePage = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  if(!isAuthenticated){
    router.push("/login");
    return;
  }

  const [open, setOpen] = useState(false);
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [blogImage, setBlogImage] = useState<File | null>(null);
  const [title, setTitle] = useState<string>("");
  const [catSlug, setCatSlug] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setCoverImage(e.target.files[0]);
    }
  };

  
  const handleBlogImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setBlogImage(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!title || !content || !coverImage) {
      setError("Title, content, and cover image are required");
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", content); // Pass the content as the description
    formData.append("type", catSlug); // Category slug

    if (coverImage) {
      formData.append("blogcoverImage", coverImage);
    }
    if (blogImage) {
      formData.append("blogImage", blogImage);
    }

    try {
      // Assuming the backend API endpoint is /api/posts
      const response = await axios.post(`${API_BASE_URL}/blogs`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
      alert("Blog post created successfully!");
      router.push("/"); // Redirect to homepage after successful creation
    } catch (err) {
      setError("Failed to create the blog post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleContentChange = (newContent: string) => {
    setContent(newContent); // Update content state when editor changes
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className={styles.select}
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>

      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/images/plus.png" alt="Plus" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            {/* Cover Image Upload */}
            <div className={styles.imageUpload}>
              <label htmlFor="coverImage">Cover Image:</label>
              {!coverImage ? (
                <>
                  <input
                    type="file"
                    id="coverImage"
                    accept="image/*"
                    onChange={handleCoverImageChange}
                    style={{ display: "none" }}
                  />
                  <button className={styles.addButton}>
                    <label htmlFor="coverImage">
                      <Image
                        src="/images/image.png"
                        alt="Upload Cover Image"
                        width={16}
                        height={16}
                      />
                    </label>
                  </button>
                </>
              ) : (
                <div>
                  <Image
                    src={URL.createObjectURL(coverImage)}
                    alt="Cover"
                    width={100}
                    height={100}
                  />
                  <p>{coverImage.name}</p>
                </div>
              )}
            </div>

            {/* Blog Image Upload */}
            <div className={styles.imageUpload}>
              <label htmlFor="blogImage">Blog Image:</label>
              {!blogImage ? (
                <>
                  <input
                    type="file"
                    id="blogImage"
                    accept="image/*"
                    onChange={handleBlogImageChange}
                    style={{ display: "none" }}
                  />
                  <button className={styles.addButton}>
                    <label htmlFor="blogImage">
                      <Image
                        src="/images/image.png"
                        alt="Upload Blog Image"
                        width={16}
                        height={16}
                      />
                    </label>
                  </button>
                </>
              ) : (
                <div>
                  <Image
                    src={URL.createObjectURL(blogImage)}
                    alt="Blog"
                    width={100}
                    height={100}
                  />
                  <p>{blogImage.name}</p>
                </div>
              )}
            </div>
          </div>
        )}
        <div className={styles.editor}>
        <RichTextEditor content={content} onChange={handleContentChange} />
        </div>
      </div>
   
      {error && <p className={styles.error}>{error}</p>}
      <button className={styles.publish} onClick={handleSubmit} disabled={loading}>
        {loading ? "Publishing..." : "Publish"}
      </button>
    </div>
  );
};

export default WritePage;
