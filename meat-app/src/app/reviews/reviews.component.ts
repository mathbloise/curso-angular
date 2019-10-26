import { Component, OnInit } from '@angular/core';
import { Review } from './reviews.model';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<Review>;

  constructor(private service: RestaurantsService, private router: ActivatedRoute) { }

  ngOnInit() {

    this.reviews = this.service.reviewsOfRestaurant(this.router.snapshot.parent.params['id'])
  }

}
