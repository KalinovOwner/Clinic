import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import localeRu from '@angular/common/locales/ru';

import { NZ_I18N, ru_RU } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

import { AppComponent } from './app.component';
import { PushesComponent } from './administrator/pushes/pushes.component';
import { ListDoctorsComponent } from './administrator/list-doctors/list-doctors.component';
import { ListClientsComponent } from './administrator/list-clients/list-clients.component';
import { AddNewsComponent } from './web-admin/add-news/add-news.component';
import { AddBannersComponent } from './web-admin/add-banners/add-banners.component';
import { AddSharesComponent } from './web-admin/add-shares/add-shares.component';
import { RolesComponent } from './web-admin/roles/roles.component';
import { ListClientsDoctorComponent } from './doctors/list-clients-doctor/list-clients-doctor.component';
import { CalendarDoctorComponent } from './doctors/calendar-doctor/calendar-doctor.component';
import { LayoutComponent } from './layout/layout.component';
import { CalendarComponent } from './administrator/calendar/calendar.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthorizationComponent } from './autorization/authorization.component';
import { CardComponent } from './doctors/card/card.component';
import { CalendarCardComponent } from './doctors/calendar-card/calendar-card.component';
import { RecordComponent } from './administrator/record/record.component';
import { RecordListComponent } from './administrator/record-list/record-list.component';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CalendarComponent,
    ProfileComponent,
    PushesComponent,
    ListDoctorsComponent,
    ListClientsComponent,
    AddNewsComponent,
    AddBannersComponent,
    AddSharesComponent,
    RolesComponent,
    ListClientsDoctorComponent,
    CalendarDoctorComponent,
    AuthorizationComponent,
    CardComponent,
    CalendarCardComponent,
    RecordComponent,
    RecordListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzAvatarModule,
    NzButtonModule,
    NzIconModule,
    NzFormModule,
    NzUploadModule,
    NzModalModule,
    NzMessageModule,
    NzInputModule,
    NzTableModule,
    NzCalendarModule,
    NzSelectModule,
    NzDescriptionsModule,
    NzBadgeModule,
    NzPopconfirmModule,
    NzDatePickerModule,
    NzTimePickerModule
  ],
  providers: [{ provide: NZ_I18N, useValue: ru_RU }],
  bootstrap: [AppComponent]
})
export class AppModule { }
