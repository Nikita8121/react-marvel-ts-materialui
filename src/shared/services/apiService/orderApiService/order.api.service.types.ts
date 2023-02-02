interface IItem {
  comicId: string;
  quantity: number;
  price: number;
}

export type Payment = "Cash" | "CreditCard";

export interface IMakeOrder {
  name: string;
  secondName: string;
  city: string;
  street: string;
  payment: Payment | string;
  items: IItem;
  totalPrice: number;
}
