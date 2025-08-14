export type History  = {
  id: number
  name: string
  amount: number | string,
  deposit_amount?: number,
  death_date?: string
}
export type Person = {
    id: number
    name: string;
    urdu: string
    details: {
      dues: number | string,
      history: History[]
    }
  };