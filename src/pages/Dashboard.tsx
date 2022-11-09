import { Paper } from "@mui/material"
import { Login } from "../components/Login"
import Register from "../components/Register"

const Dashboard = () => {
    return (
        <Paper sx={{ maxWidth: 800, marginTop: 10, margin: "auto " }}>
            <Login />
        </Paper>
    )

}

export default Dashboard