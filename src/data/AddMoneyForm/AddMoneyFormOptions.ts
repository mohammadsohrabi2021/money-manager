interface AddMoneyFormOptionsType {
    id:number,
    value: 'income' | 'expense' | '',
    title: string
}

export const AddMoneyFormOptions: AddMoneyFormOptionsType[] = [
    {id: 1, value: 'income', title: 'دخل'},
    {id: 2, value: 'expense', title: 'خرج'},
    {id: 3, value: '', title: ''},
]