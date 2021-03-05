import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { DragDropModule } from '@angular/cdk/drag-drop';

const components = [ CommonModule, MatIconModule, MatToolbarModule, DragDropModule  ];

@NgModule({
  declarations: [],
  imports: components,
  exports: components,
})
export class MaterialCdkModule { }
