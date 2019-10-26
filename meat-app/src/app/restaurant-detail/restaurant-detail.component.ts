import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private service: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.restaurantById(this.route.snapshot.params['id'])
      .subscribe(restautant => this.restaurant = restautant)
  }

}
