import {Grid, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {MoneyType} from "../../model/moneyType";
import {useMemo} from "react";

const Total = (): JSX.Element => {
    const moneyArr = useSelector((state: { money: MoneyType[] }) => state.money)
    const income: number = useMemo(() => moneyArr.filter(m => m.type === 'income').reduce((count, item) => count = count + +item.price, 0), [moneyArr])
    const expense: number = useMemo(() => moneyArr.filter(m => m.type === 'expense').reduce((count, item) => count = count + +item.price, 0), [moneyArr])
    const total: number = income - expense
    return (
        <Grid alignItems={'center'} container item xs={12} md={4} borderRadius={2} p={2} bgcolor={'secondary.main'}
              my={2} color={'common.white'}>
            <Grid item xs={6}>
                <Typography>
                    موجودی
                </Typography>
            </Grid>
            <Grid display={'flex'} justifyContent={'flex-end'} item xs={6}>
                <Typography>
                    {total} تومان
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Total