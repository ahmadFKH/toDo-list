import { Component, OnInit } from '@angular/core';
import { Item } from '../item'
import { ListService } from '../list.service'

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  text: string;

  constructor( private listService: ListService ) { }

  ngOnInit() {
    
  }

  addItem() {
    this.listService.addToList(this.text);
  }

}
