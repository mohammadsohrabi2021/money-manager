import {Button, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const Header = (): JSX.Element => {
    return (
        <Grid container item xs={12} alignItems={'center'} bgcolor={'primary.main'} p={1} borderRadius={2}
              color={'common.white'}>
            <Grid item xs={6}>
                <Typography fontWeight={'bold'}>
                    دخل و خرج
                </Typography>
            </Grid>
            <Grid display={'flex'} justifyContent={'flex-end'} item xs={6}>
                <Link to={'/addMoney'}>
                    <Button variant={'contained'} sx={{
                        bgcolor: 'common.white',
                        color: 'primary.main',
                        '&:hover': {bgcolor: 'primary.main', color: 'common.white', border:'1px solid #fff'}
                    }}>
                        <Typography fontSize={10}>
                            دخل و خرج جدید
                        </Typography>
                    </Button>
                </Link>
            </Grid>
        </Grid>
    )
}

export default Header