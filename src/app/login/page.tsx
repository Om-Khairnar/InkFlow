"use client";
import { useState } from "react";
import styles from "./loginPage.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface LoginData {
  email: string; 
  password: string;
}

const defaultData: LoginData = { email: "", password: "" };

const LoginPage: React.FC = () => {
  const [data, setData] = useState<LoginData>(defaultData);
  const [error, setError] = useState<string | null>(null); 
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset error before submission

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      const result = await response.json();
      localStorage.setItem("authToken", result.token); 
      console.log("Login Successful:", result);

      // Redirect to the home page or dashboard
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className="text-3xl mb-4 text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col">
            <label htmlFor="email" className="mb-2">
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              className="p-2 mb-4 border border-gray-400 rounded text-black"
              autoComplete="off"
              required
            />

            <label htmlFor="password" className="mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              className="p-2 mb-4 border border-gray-400 rounded text-black"
              autoComplete="off"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-center mb-4">{error}</p>
          )}

          <button
            type="submit"
            className="bg-blue-400 hover:bg-blue-600 text-white py-4 px-4 rounded-full w-full"
          >
            Submit
          </button>
          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-400 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
