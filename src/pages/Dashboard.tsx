import { Paper } from "@mui/material";
import { Login } from "../components/Login";
import Register from "../components/Register";
import { Link, useNavigate, useParams } from "react-router-dom";

const Dashboard = () => {
  const { form } = useParams();
  const navigate = useNavigate();

  const forms = ["signin", "signup"];
  //   if (!forms.includes(form!)) {
  //     navigate("/notfound");
  //   }
  return (
    <Paper>
      <Link to="signin">
        {/* <Login /> */}
      </Link>

      {/* <Register /> */}
    </Paper>
  );
};

export default Dashboard;
