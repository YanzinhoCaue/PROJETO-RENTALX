import { v4 as uuidV4 } from 'uuid';


class Category {
  id?: string;
  name: string;
  description: string;
  created_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuidV4();
    }
    this.created_at = new Date(); 
    this.description = '';
    this.name = '';
  }
}

export { Category };