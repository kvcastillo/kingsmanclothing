"use client";

import { signIn } from "next-auth/react";

const SigninButton = () => {
  return (
    <button className="cursor-pointer" onClick={() => signIn("google")}>
      Sign-in
    </button>
  );
};
export default SigninButton;
