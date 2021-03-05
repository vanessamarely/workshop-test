import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/core/services/task.service';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  lists;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // this.getDataList();
    this.getDataStored();
  }

  // getDataList(): void {
  //   this.apiService.getApi().subscribe(
  //     response => this.lists = response['list']
  //   )
  // }

  getDataStored(): void {
    this.taskService.getBoardList$
      .subscribe(
        (response: any) => this.lists = response,
        (error: string) => (console.log('Ups! we have an error: ', error))
    );
  }



}
