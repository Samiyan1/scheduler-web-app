import Agenda from './pages/agenda/Agenda'
import MyProfile from './pages/myprofile/Profile'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import PageNotFound from "./pages/error/PageNotFound";
import OnBoarding from './pages/onboarding/OnBoarding';
import CreateTask from './pages/createtask/CreateTask';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path="Login" element={<Login />} />
        <Route path="agenda" element={<Agenda />} />
        <Route path="onboarding" element={<OnBoarding />} />
        <Route path="profile" element={<MyProfile />} />
        <Route path="Agenda" element={<Agenda />} />
        <Route path="create-Task" element={<CreateTask />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;