import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    completed: Number;
  constructor(private listService: ListService) { }

  ngOnInit() {
    this.completed = this.listService.getCompleted();
    this.listService.itemObservable.subscribe((data) => {
      this.completed = data;
    })
  }

}
