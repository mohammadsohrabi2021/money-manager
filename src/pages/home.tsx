import {Grid} from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Header from "../Components/Home/Header";
import Total from "../Components/Home/Total";
import MoneyCard from "../Components/Home/MoneyCard";

const Home = (): JSX.Element => {
    return (
        <Grid container p={2}>
            <Header/>
            <Total/>
            <MoneyCard backgroundColor={'success.main'} title={'هزینه ها'} icon={<TrendingUpIcon/>} type={'income'}/>
            <MoneyCard backgroundColor={'error.main'} title={'خرج ها'} icon={<TrendingDownIcon/>} type={'expense'}/>
        </Grid>
    )
}

export default Home