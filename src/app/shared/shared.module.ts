import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialCdkModule } from 'src/app/material-cdk/material-cdk.module';

const declarables = [HeaderComponent, FooterComponent];

@NgModule({
  declarations: [declarables],
  imports: [
    CommonModule,
    RouterModule,
    MaterialCdkModule
  ],
  exports: declarables,
})
export class SharedModule { }
