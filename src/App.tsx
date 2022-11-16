import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import Register from "./components/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/app">
          <Route path="signin" element={<Login />} />
          <Route path="signup">
            <Route path="customer" element={<Register />} />
            <Route path="seller" element={<Register />} />
            <Route path="delivery_partner" element={<Register />} />
          </Route>
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
