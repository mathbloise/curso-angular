import { Component, OnInit, Input } from '@angular/core';
import {Restaurant} from './restaurant/restaurant.model';
import {RestaurantsService} from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[];

  constructor(private service: RestaurantsService) { }

  ngOnInit() {
    this.service.restaurants().subscribe(restaurants => this.restaurants = restaurants);
  }

}
