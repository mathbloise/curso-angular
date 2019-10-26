import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private service: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): any[] {
    return this.service.items;
  }

  value(): any {
    return this.service.items.values();
  }

  total(): number {
    return this.service.total();
  }

  removeItem(item: any) {    
    this.service.removeItem(item);
  }

  addItem(item: any) {
    this.service.addItem(item);
  }

  clear() {
    this.service.clear();
  }

}
