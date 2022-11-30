import {Button, Grid, TextField} from "@mui/material";
import {useCallback, useEffect, useState } from "react";
import {MoneyType} from "../../model/moneyType";
import {AddMoneyFormOptions} from "../../data/AddMoneyForm/AddMoneyFormOptions";
import {useDispatch , useSelector} from "react-redux";
import {addMoney , updateMoney} from "../../redux/slice/moneySlice";
import AddMoneyFormDialog from "./AddMoneyFormDialog";
import { useParams } from 'react-router-dom';
const AddMoneyForm = (): JSX.Element => {
    const [disabled, setDisabled] = useState<boolean>(true)
    const [openDialog,setOpenDialog] = useState<boolean>(false)
    const [form, setForm] = useState<MoneyType>({
        id: Math.floor(Math.random() * 1000),
        type: '',
        title: '',
        price: ''
    })
    const { monyId } = useParams()
    const moneyArr = useSelector((state: { money: MoneyType[] }) => state.money)
    const dispatch = useDispatch()

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [event.target.name]: event.target.value})
    },[form])

    const [state, setState] = useState<string>('اضافه کردن')

    useEffect(() => {
        setDisabled(form.title === '' || form.price === '' || form.type === '')
    }, [form])

    const handleSubmit = () => {
        if (state === 'اضافه کردن') {
            dispatch(addMoney(form))}
            else if(state === 'تایید'){
                dispatch(updateMoney(form))
            }
            setOpenDialog(true)
    }
    useEffect(() => {
        const c = moneyArr.filter(arr => arr.id === Number(monyId))[0]
        if (c) {
          setForm(c)
          setState('تایید')
        }
      }, [])
    // const handleSubmit = event => {
    //     event.preventDefault()
    //     if (update === 'add') {
    //         dispatch(addMoney(form))
    //         setOpenDialog(true)
    //     } else {
    //         dispatch(updateCard(FormStatus))
    //     }
    //     setFormStatus({
    //         id: Math.floor(Math.random() * 1000),
    //         f: '',
    //         title: '',
    //     })
    //     setUpdate('add')
    // }
    return (
        <Grid container item xs={12}>
            <Grid container item xs={12}>
                <Grid item xs={12} md={4} p={2}>
                    <TextField name={'type'} onChange={handleChange} select value={form.type} fullWidth
                               label={'نوع دخل و خرج'} SelectProps={{native: true}}>
                        {AddMoneyFormOptions.map(o => (
                            <option key={o.id} value={o.value}>
                                {o.title}
                            </option>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} md={4} p={2}>
                    <TextField name={'title'} onChange={handleChange} value={form.title} fullWidth label={'موضوع'}/>
                </Grid>
                <Grid item xs={12} md={4} p={2}>
                    <TextField type={'number'} name={'price'} onChange={handleChange} value={form.price} fullWidth
                               label={'مبلغ'}/>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Button fullWidth variant={'contained'} disabled={disabled}
                        color={form.type === 'income' ? 'success' : 'error'} onClick={handleSubmit}>
                            
                    اضافه کردن {form.type === 'income' ? 'دخل' : 'خرج'}
                </Button>
             
            </Grid>
            <AddMoneyFormDialog open={openDialog}/>
        </Grid>
    )
}

export default AddMoneyForm