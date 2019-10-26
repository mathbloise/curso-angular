import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item.model';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menuItem: MenuItem[];

  constructor(private service: RestaurantsService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.service.getMenuItem(this.router.parent.snapshot.params['id']).subscribe(item => this.menuItem = item)
  }

  addMenuItem(item: MenuItem) {
    console.log(item);
  }

}
