"use client";

import { signOut } from "next-auth/react";
import { Button } from "@mui/material";

export default function LogoutButton() {
  return (
    <Button
      variant="contained"
      color="error"
      onClick={() => signOut({ callbackUrl: "/login" })}
    >
      Logout
    </Button>
  );
}
