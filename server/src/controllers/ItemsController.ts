import { Request, Response } from 'express';
import { TableDescriptor } from 'knex';
import knex from '../database/connection';

class ItemsController {
  async index(request : Request, response : Response) {
    const items = await knex('items').select('*');
    const serializedItems = items.map((item : TableDescriptor) => {
      return {
        title: item.title,
        image_url: `http://localhost:7777/uploads/${item.image}`
      }
    });
  
    response.json(items);
  }
}

export default ItemsController;