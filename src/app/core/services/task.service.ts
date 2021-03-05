import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService  } from './';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly boardList = new BehaviorSubject<any>([]);
  readonly list$ = this.boardList.asObservable();
  readonly getBoardList$ = this.list$.pipe(map((list) => list));

  constructor(private apiService: ApiService) {
    this.loadInitialData();
   }

   loadInitialData(): any {
    return this.apiService.getApi().subscribe((response: any) => {
      if (!!response) {
        this.boardList.next(response['list']);
      }
    });
  }

  get list() {
    return this.boardList.getValue();
  }

  set list(value) {
    this.boardList.next(value);
  }

  addTask(data) {}

  updateTask(data, listId) {}

  remoTask(dataId, listId){

  }
}
