import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateItemDto } from './dto/createItem.dto';
import { Item } from './item.model';
import { ItemStatus } from './itemStatus.enum';

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  findAll(): Item[] {
    return this.items;
  }

  findById(id: string): Item {
    return this.items.find((item) => item.id === id);
  }

  create(createItemDto: CreateItemDto): Item {
    const item: Item = {
      id: uuid(),
      ...createItemDto,
      status: ItemStatus.SOLD_OUT,
    };
    this.items.push(item);
    return item;
  }

  updateStatus(id: string): Item {
    const item = this.findById(id);
    item.status = ItemStatus.SOLD_OUT;
    return item;
  }

  delete(id: string): void {
    this.items = this.items.filter((item) => {
      item.id != id;
    });
  }
}
