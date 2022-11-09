import { Button, CircularProgress } from "@mui/material"

const SubmitButton = (props : { loading : Boolean , children : any}) => {
    const { loading } = props;
    return <Button variant="contained" sx={{ height: "3rem", width: "12rem" , borderRadius:"1rem" , alignSelf:"center", fontWeight:"600" , fontSize:"1rem"}} type="submit">
    {loading ? <CircularProgress /> : props.children}
  </Button>
}

export default SubmitButton;