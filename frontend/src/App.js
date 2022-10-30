import { BrowserRouter, Routes, Route } from "react-router-dom";

import User from "./User";
import Login from "./Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/user`} element={<User />} />
        <Route path={`/login/`} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
