"use client";
import Image from "next/image";
import styles from "./writePage.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import RichTextEditor from "../EditorContent/page";


const WritePage = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  

  const [open, setOpen] = useState(false);
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [blogImage, setBlogImage] = useState<File | null>(null);
  const [value, setValue] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [catSlug, setCatSlug] = useState<string>("");
  const [content, setContent] = useState<string>("");


  // Handle Cover Image Change
  const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setCoverImage(e.target.files[0]);
    }
  };

  // Handle Blog Image Change
  const handleBlogImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setBlogImage(e.target.files[0]);
    }
  };

  const handleContentChange = (newContent: string) => {
    setContent(newContent);  // Update content state when editor changes
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

        <RichTextEditor content={content} onChange={handleContentChange} />
      </div>

      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default WritePage;
