"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./profilePage.module.css";
import Link from "next/link";
import Image from "next/image";

const LoginPage: React.FC = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        fullName: "",
        avatar: "",
        coverImage: "",
      });
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({ ...user });

  useEffect(() => {
    
    const fetchUserData = async () => {
      try {
        const response = await axios.get("NEXT_PUBLIC_API_BASE_URL/user/profile/api/user"); // Replace with your actual endpoint
        setUser(response.data);
        setUpdatedUser(response.data);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      // Save the updated user profile data
      const response = await axios.put("NEXT_PUBLIC_API_BASE_URL/user/profile", updatedUser); // Replace with your actual endpoint
      setUser(response.data);
      setIsEditing(false); // Switch to view mode after saving
    } catch (error) {
      console.error("Error saving user data", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className="profile-page">
        <div className="cover-image-container">
          <Image
            src={user.coverImage || "/default-cover-image.jpg"}
            alt="Cover"
            width={1200}
            height={300}
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="profile-container">
          <div className="avatar-container">
            <Image
              src={user.avatar || "/default-avatar.jpg"}
              alt="Avatar"
              width={150}
              height={150}
              className="avatar"
              style={{ objectFit: 'cover', borderRadius: '50%' }}
            />
            {isEditing && (
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={(e) =>
                  setUpdatedUser({ ...updatedUser, avatar: e.target.files[0] })
                }
              />
            )}
          </div>

          <div className="profile-info">
            {isEditing ? (
              <>
                <input
                  type="text"
                  name="username"
                  value={updatedUser.username}
                  onChange={handleInputChange}
                  placeholder="Username"
                />
                <input
                  type="email"
                  name="email"
                  value={updatedUser.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="fullName"
                  value={updatedUser.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                />
              </>
            ) : (
              <>
                <h2>{user.fullName}</h2>
                <p>{user.username}</p>
                <p>{user.email}</p>
              </>
            )}
          </div>

          <div className="actions">
            {isEditing ? (
              <button onClick={handleSaveChanges}>Save Changes</button>
            ) : (
              <button onClick={() => setIsEditing(true)}>Edit Profile</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
