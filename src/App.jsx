import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import AdminRegister from "./pages/AdminRegister";
import Home from "./pages/Home";
import VoterRegister from "./pages/VoterRegister";
import VoterLogin from "./pages/VoterLogin";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/register-admin" element={<AdminRegister />} />
      <Route path="/login-admin" element={<AdminLogin />} />
      <Route path="/register-voter" element={<VoterRegister />} />
      <Route path="/login-voter" element={<VoterLogin/>} />
    </>
  )
);

function App() {
  return (
    <>
      {/* <Home/> */}
      {/* <AdminRegister/> */}
      {/* <AdminLogin/> */}

      <RouterProvider router={router} />
    </>
  );
}

export default App;
