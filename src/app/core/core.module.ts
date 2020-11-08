import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { NzMenuModule } from 'ng-zorro-antd/menu';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    NzMenuModule 
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule { }
