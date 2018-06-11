import { Component, OnInit, Input, Output } from '@angular/core';
import { Item } from '../item';
import { ListService } from '../list.service'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Item = new Item();

  constructor(private listService: ListService) { }

  ngOnInit() {
  }

  deleteItem(item: Item) {
    this.listService.deleteFromList(item);
  }
  checked(e,item) {
    if(e.checked) {
      this.listService.addCompleted(1, item);
    } else {
      this.listService.addCompleted(-1, item);
    }
  }

}
