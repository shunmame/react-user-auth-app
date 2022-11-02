import { BrowserRouter, Routes, Route } from "react-router-dom";

import User from "./User";
import Login from "./Login";
import Header from "./Header";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/user`} element={<User />} />
        <Route path={`/login/`} element={<Login />} />
        <Route path={`/header/`} element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
