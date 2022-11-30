import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Grid, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { deleteMoney } from '../../redux/slice/moneySlice';
import { useDispatch } from 'react-redux';

const Delete = ({ m }:any): JSX.Element => {



    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    //   const handleDelet = (id) => {
    //     dispatch(deleteCard(id))
    //   }
    const handleClose = () => {
        setOpen(false);
    };
    const dispatch = useDispatch()
    const handleDelet = (id: number) => {
        dispatch(deleteMoney(id))
    }
    return (
        <>
            <Button  onClick={handleClickOpen} sx={{ cursor: 'pointer',color:'#fff' }} >
                <DeleteIcon />
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogContent>
                    <DialogContentText >
                        {"آیا از حذف این آیتم مطمئن هستید ؟"}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>{"خیر"}</Button>
                    <Button onClick={() => handleDelet(m.id)} autoFocus>
                        {"بله "}
                    </Button>
                </DialogActions>
            </Dialog>




        </>
    )
}

export default Delete