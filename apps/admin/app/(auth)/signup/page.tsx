"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";

export default function AdminSignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    
    try {
      const res = await fetch(`${process.env.NEST_API_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) setError(data.message || "Signup failed");
      else {
        setSuccess("Signup successful! Redirecting to login...");
        setTimeout(() => router.push("/login"), 1500);
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Box width={400} p={4} boxShadow={3} borderRadius={2}>
        <Typography variant="h5" mb={2}>Admin Signup</Typography>
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}
        <form onSubmit={handleSignup}>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Signup
          </Button>
        </form>
      </Box>
    </Box>
  );
}
