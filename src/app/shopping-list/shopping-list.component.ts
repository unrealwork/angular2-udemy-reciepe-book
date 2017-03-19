import {Component, OnInit, Input} from '@angular/core';
import {Ingridient} from '../shared/ingridient';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  @Input() items: Ingridient[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
