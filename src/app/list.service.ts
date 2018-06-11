import { Injectable } from '@angular/core';
import { Item } from './item'
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {


  public completed: number = 0;
  public myList: Item[] = [];
  public itemSubject : Subject<Number>;
  public itemObservable : Observable<Number>;
  public listSubject : Subject<Item>;
  public listObservable : Observable<Item>;

  constructor() {
    this.itemSubject = new Subject<Number>();
    this.itemObservable = this.itemSubject.asObservable();
    this.listSubject = new Subject<Item>();
    this.listObservable = this.listSubject.asObservable();
  }

  addToList(text: string) {
    let newItem = new Item();
    newItem.id = new Date();
    newItem.text = text;
    this.myList.push(newItem);
    // this.listSubject.next(item);
  }

  deleteFromList(item: Item) {
    if (item.completed) {
      if (this.completed == 0) {
        this.completed = 0;
      } else {
        this.completed--;
      }
      this.itemSubject.next(this.completed);
    }
    let index = this.myList.indexOf(item);
    this.myList.splice(index, 1);
  }

  getMyList() {
    return this.myList;
  }

  addCompleted(increment: number, item: Item) {
    if (increment == 1) {
      item.completed = true;
    } else if (increment == -1) {
      item.completed = false;
    }
    this.completed += increment;
    this.itemSubject.next(this.completed);
  }

  getCompleted() {
    return this.completed;
  }


}
