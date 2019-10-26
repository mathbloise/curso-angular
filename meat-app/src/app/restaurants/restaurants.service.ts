import { Http } from '@angular/http';
import { Injectable } from '@angular/core'
import { Restaurant } from './restaurant/restaurant.model'
import { MEAT_API } from 'app/app.api';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Review } from 'app/reviews/reviews.model';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';

@Injectable()
export class RestaurantsService {

    constructor(private http: Http) { }

    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(response => response.json());
    }

    restaurantById(id: string): Observable<Restaurant> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
            .map(response => response.json())
    }

    reviewsOfRestaurant(id: string): Observable<Review> {
        return this.http.get(`${MEAT_API}/restaurant/${id}/reviews`)
            .map(response => response.json())
    }

    getMenuItem(id: string): Observable<MenuItem[]> {
        return this.http.get(`${MEAT_API}/restaurant/${id}/menu`)
            .map(response => response.json())
    }
}