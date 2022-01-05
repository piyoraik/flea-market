import { ItemStatus } from './itemStatus.enum';

export interface Item {
  id: string;
  name: string;
  price: number;
  description: string;
  status: ItemStatus;
}