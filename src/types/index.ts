export type History  = {
  id: number
  name: string
  amount: number | string,
  deposit_amount?: number
}
export type Person = {
    id: number
    name: string;
    urdu: string
    // amount: number | string
    details: {
      dues: number | string,
      history: History[]
    }
  };