import {Button, Dialog, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";

interface AddMoneyFormDialogProps {
    open: boolean,
    type:'income' | 'expense' | ''
}

const AddMoneyFormDialog = ({open,type}: AddMoneyFormDialogProps): JSX.Element => {
    return(
        <Dialog open={open}>
            <Grid container p={2}>
                <Grid textAlign={'center'} item xs={12} mb={4}>
                    <Typography>
                        {type === 'income' ? 'دخل' : 'خرج'} با موفقیت ثبت شد
                    </Typography>
                </Grid>
                <Grid display={'flex'} justifyContent={'center'} item xs={12}>
                    <Link to={'/'}>
                        <Button variant={'contained'}>
                            <Typography>
                                بازگشت به صفحه اصلی
                            </Typography>
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Dialog>
    )
}

export default AddMoneyFormDialog