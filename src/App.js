import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homes from "./components/Homes";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Protected from "./components/Protected";
import Registration from "./components/Registration";
import Context from "./Global/Context";
import Error from "./components/Error";
import Profile from "./components/Profile";
import EditPost from "./components/EditPost";
import EditComment from "./components/EditComment";

function App() {
  return (
    <div>
      <Context>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Protected Component={Homes} />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Registration />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/edit-items/:user_ids" element={<EditPost />} />
            <Route exact path="/edit-comment/:post_id/:indexNumber" element={<EditComment />} />
            <Route exact path="/*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </Context>
    </div>
  );
}

export default App;
