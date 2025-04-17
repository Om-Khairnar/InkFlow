"use client";
import { useState , useEffect} from "react";
import styles from "./loginPage.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
interface LoginData {
  email: string; 
  password: string;
}
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const defaultData: LoginData = { email: "", password: "" };

const LoginPage: React.FC = () => {
  const router = useRouter();
  const { login } = useAuth();
  
  const [data, setData] = useState<LoginData>(defaultData);
  const [error, setError] = useState<string | null>(null);
  
  
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!data.email || !data.password) {
      setError("Please provide both email and password.");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Invalid email or password.");
      }

      const { token } = await response.json(); // Assuming your backend returns a token
      login(token);
      router.push("/");
    } catch (error) {
      setError((error as Error).message); 
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
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
              onChange={handleChange} // Fixed here
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
              onChange={handleChange} // Fixed here
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
            Don&apos;t have an account?{" "}
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
