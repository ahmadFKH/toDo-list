import { Component, OnInit } from '@angular/core';
import { Item } from '../item'
import {ListService} from '../list.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  myList: Item[];

  constructor( private listService: ListService ) { }

  ngOnInit() {

    this.myList = this.listService.getMyList();

  }

}
