import {Button, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const AddMoneyHeader = (): JSX.Element => {
    return (
        <Grid container item xs={12} alignItems={'center'}>
            <Grid item xs={6}>
                <Typography fontSize={12}>
                    اضافه کردن دخل و خرج ها
                </Typography>
            </Grid>
            <Grid display={'flex'} justifyContent={'flex-end'} item xs={6}>
                <Link to={'/'}>
                    <Button variant={'contained'}>
                        <Typography fontSize={12}>
                            بازشگت به صفحه اصلی
                        </Typography>
                    </Button>
                </Link>
            </Grid>
        </Grid>
    )
}

export default AddMoneyHeader