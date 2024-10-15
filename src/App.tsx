import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Products from "./components/products";
import Profile from "./components/profile";
import LoginPage from "./components/loginpage";
import Navbar from "./components/navbar";
import { auth } from "./Config";
import { User } from "firebase/auth";

export default function App() {
  const [pageToggle, setPageToggle] = useState(false);
  const [user, setUser] = useState<User | null>();
  console.log(auth.currentUser?.displayName);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        setPageToggle(true);
      }
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <LoginPage {...{ pageToggle, setPageToggle }} />
      <Navbar {...{ pageToggle, setPageToggle }} />
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile {...{ user }} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
