import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { createItem, Item } from './item.model';
import { ItemsService } from './items.service';
import { ItemStatus } from './itemStatus.enum';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Item {
    return this.itemsService.findById(id);
  }

  @Post()
  create(@Body() item: createItem): Item {
    const createItem: Item = {
      id: item.id,
      name: item.name,
      price: item.price,
      description: item.description,
      status: ItemStatus.ON_SALE,
    };
    return this.itemsService.create(createItem);
  }

  @Put(':id')
  updateStatus(@Param('id') id: string): Item {
    return this.itemsService.updateStatus(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.itemsService.delete(id);
  }
}
