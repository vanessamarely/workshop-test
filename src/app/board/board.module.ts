import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board/board.component';
import { ListComponent } from './components/list/list.component';
import { TaskComponent } from './components/task/task.component';

import { MaterialCdkModule } from 'src/app/material-cdk/material-cdk.module';
@NgModule({
  declarations: [BoardComponent, ListComponent, TaskComponent],
  imports: [
    CommonModule,
    BoardRoutingModule,
    MaterialCdkModule
  ]
})
export class BoardModule { }
