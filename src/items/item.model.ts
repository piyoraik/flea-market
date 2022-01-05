import { ItemStatus } from './itemStatus.enum';

export interface Item {
  id: string;
  name: string;
  price: number;
  description: string;
  status: ItemStatus;
}

export interface createItem {
  id: string;
  name: string;
  price: number;
  description: string;
}
