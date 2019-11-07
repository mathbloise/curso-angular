import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { Observable } from "rxjs/Observable";
import { Order } from "./order.modal";
import { Http, RequestOptions, Headers } from "@angular/http";

import {MEAT_API} from '../app.api'

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService, private http: Http) { }

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

    clear() {
        this.cartService.clear();
    }

    checkOrder(order: Order): Observable<string> {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        return this.http.post(`${MEAT_API}/orders`, 
                            JSON.stringify(order),
                            new RequestOptions({headers: headers}))
                        .map(response => response.json())
                        .map(order => order.id)
    }
}