"use client";

import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <button className="cursor-pointer" onClick={() => signOut()}>
      Logout
    </button>
  );
};

export default LogoutButton;
