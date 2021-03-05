import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  lists;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getDataList();
  }

  getDataList(): void {
    this.apiService.getApi().subscribe(
      response => this.lists = response['list']
    )
  }

}
