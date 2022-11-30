export interface MoneyType {
    id: number,
    type: 'income' | 'expense' | '',
    title: string,
    price: string
}