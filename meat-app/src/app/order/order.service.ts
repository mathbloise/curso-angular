import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService) { }

    cartItems(): CartItem[] {
        return this.cartService.items;
    }

    emitIncreaseQty(item: CartItem) {
        this.cartService.increaseQty(item);
    }

    emitdecreaseQty(item: CartItem) {
        this.cartService.decreaseQty(item);
    }

    emitRemove(item: CartItem) {
        this.cartService.removeItem(item);
    }

    valueItem(): number {
        return this.cartService.total();
    }
}