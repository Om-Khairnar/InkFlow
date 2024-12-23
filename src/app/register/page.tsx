"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./register.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface RegisterData {
  fullName: string;
  email: string;
  password: string;
  username: string;
  avatar?: File | null;
  coverImage?: File | null;
}

const defaultData: RegisterData = {
  fullName: "",
  email: "",
  password: "",
  username: "",
  avatar: null,
  coverImage: null,
};

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState<RegisterData>(defaultData);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value) formData.append(key, value as Blob | string);
    });

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/register`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      router.push("/login"); // Redirect to login page on success
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className="text-3xl mb-4 text-center">Register</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col">
            <label htmlFor="name" className="mb-2">
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={data.fullName}
              onChange={handleInputChange}
              className="p-2 mb-4 border border-gray-400 rounded text-black"
              autoComplete="off"
              required
            />

            <label htmlFor="email" className="mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={handleInputChange}
              className="p-2 mb-4 border border-gray-400 rounded text-black"
              autoComplete="off"
              required
            />

            <label htmlFor="password" className="mb-2">
              Password:
            </label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={data.password}
                onChange={handleInputChange}
                className="p-2 mb-4 border border-gray-400 rounded w-full text-black"
                autoComplete="new-password"
                required
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 cursor-pointer text-gray-500 "
              >
                {showPassword ? <FaEye size={25} /> : <FaEyeSlash size={25} />}
              </div>
            </div>

            <label htmlFor="username" className="mb-2">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={data.username}
              onChange={handleInputChange}
              className="p-2 mb-4 border border-gray-400 rounded text-black"
              autoComplete="off"
              required
            />

            <label htmlFor="avatar" className="mb-2">
              Avatar Image:
            </label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              onChange={handleInputChange}
              className="p-2 mb-4 border border-gray-400 rounded"
              accept="image/*"
              required
            />

            <label htmlFor="cover-image" className="mb-2">
              Cover Image:
            </label>
            <input
              type="file"
              id="coverImage"
              name="coverImage"
              onChange={handleInputChange}
              className="p-2 mb-4 border border-gray-400 rounded"
              accept="image/*"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-400 hover:bg-blue-600 text-white py-4 px-4 rounded-full w-full"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-400 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
