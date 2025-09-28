import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    console.log("Login page loaded");
  }, []);

  return (
    <div>
      <h1>login</h1>
    </div>
  );
}
