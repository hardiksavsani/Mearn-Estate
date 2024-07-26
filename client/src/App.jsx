import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/SignIn";
import Signup from "./Pages/Signup";
import Header from "./Components/Header";

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="SignUp" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
}
