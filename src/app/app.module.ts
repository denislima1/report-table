import { ReportModule } from './report/report.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';


import { AppComponent } from './app.component';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { pt_PT } from 'ng-zorro-antd/i18n';
import { CoreModule } from './core/core.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    NzMenuModule,
    NzSpaceModule,
    NzCardModule,
    NzButtonModule,
    NzIconModule,
    NzDropDownModule,
    NzLayoutModule,
    NzDatePickerModule,

    ReportModule,
    CoreModule
  ],
  providers: [{ provide: NZ_I18N, useValue: pt_PT }],
  bootstrap: [AppComponent]
})
export class AppModule { }
