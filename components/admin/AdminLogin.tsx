"use client"

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { z } from "zod";

// Define the Zod schema for validation
const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password is required"),
});

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<any>({});
  const { push } = useRouter();

  const handleLogin = (e: any) => {
    e.preventDefault();

    // Validate form data with Zod
    const validation = loginSchema.safeParse({ username, password });

    if (!validation.success) {
      // Set error messages from Zod
      const fieldErrors = validation.error.flatten().fieldErrors;
      setError({
        username: fieldErrors.username?.[0],
        password: fieldErrors.password?.[0],
      });
      return;
    }

    // Reset errors if validation passes
    setError({});

    // Placeholder for actual authentication
    if (username === "admin" && password === "password123") {
      push("/admin/dashboard");
    } else {
      setError({ general: "Invalid username or password" });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Admin Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {error.username && (
              <p className="text-sm text-red-500">{error.username}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {error.password && (
              <p className="text-sm text-red-500">{error.password}</p>
            )}
          </div>

          {error.general && (
            <p className="text-sm text-red-500">{error.general}</p>
          )}

          <button
            type="submit"
            className="w-full py-2 text-white bg-primary rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
