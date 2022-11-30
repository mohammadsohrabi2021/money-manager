import {Grid} from "@mui/material";
import AddMoneyHeader from "../Components/AddMoney/AddMoneyHeader";
import AddMoneyForm from "../Components/AddMoney/AddMoneyForm";


const AddMoney = (): JSX.Element => {
    return (
        <Grid container p={2}>
            <AddMoneyHeader/>
            <AddMoneyForm/>
        </Grid>
    )
}

export default AddMoney