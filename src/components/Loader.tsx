import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
// import { Backdrop, CircularProgress } from "@mui/material"
import Loading from "./Loading";


const Loader = () => {

    return (
        <>
        <div className="loader-background">
            <Loading/>
        </div>

        </>
    )
}

export default Loader;