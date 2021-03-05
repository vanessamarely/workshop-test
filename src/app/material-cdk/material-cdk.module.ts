import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';


const components = [ CommonModule, MatIconModule, MatToolbarModule  ];

@NgModule({
  declarations: [],
  imports: components,
  exports: components,
})
export class MaterialCdkModule { }
