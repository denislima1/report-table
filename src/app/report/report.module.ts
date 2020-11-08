import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';


@NgModule({
  declarations: [
    ReportComponent
  ],
  imports: [
    CommonModule,
    
    NzTableModule,
    NzSpaceModule,
    NzCardModule,
    NzButtonModule,
    NzIconModule,
    NzDropDownModule,
    NzLayoutModule,
    NzGridModule,
    NzDatePickerModule

  ],
  exports: [
    ReportComponent
  ]
})
export class ReportModule { }
