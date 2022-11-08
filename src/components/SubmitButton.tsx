import { Button, CircularProgress } from "@mui/material"

const SubmitButton = (props : { loading : Boolean , children : any}) => {
    const { loading } = props;
    return <Button variant="contained" sx={{ height: "48px", width: "192px" , borderRadius:"20px" , alignSelf:"center", fontWeight:"600" , fontSize:"16px"}} type="submit">
    {loading ? <CircularProgress /> : props.children}
  </Button>
}

export default SubmitButton;