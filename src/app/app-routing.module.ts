import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './administrator/calendar/calendar.component';
import { ListClientsComponent } from './administrator/list-clients/list-clients.component';
import { ListDoctorsComponent } from './administrator/list-doctors/list-doctors.component';
import { PushesComponent } from './administrator/pushes/pushes.component';
import { RecordListComponent } from './administrator/record-list/record-list.component';
import { RecordComponent } from './administrator/record/record.component';
import { AuthorizationComponent } from './autorization/authorization.component';
import { CalendarCardComponent } from './doctors/calendar-card/calendar-card.component';
import { CalendarDoctorComponent } from './doctors/calendar-doctor/calendar-doctor.component';
import { CardComponent } from './doctors/card/card.component';
import { ListClientsDoctorComponent } from './doctors/list-clients-doctor/list-clients-doctor.component';
import { LayoutComponent } from './layout/layout.component';
import { ProfileComponent } from './profile/profile.component';
import { AddBannersComponent } from './web-admin/add-banners/add-banners.component';
import { AddNewsComponent } from './web-admin/add-news/add-news.component';
import { AddSharesComponent } from './web-admin/add-shares/add-shares.component';
import { RolesComponent } from './web-admin/roles/roles.component';

const routes: Routes = [
  { path: 'auth', component: AuthorizationComponent },
  {
    path: '', component: LayoutComponent, canActivate: [], children: [
      { path: '', pathMatch: 'full', redirectTo: '/profile' },
      { path: 'profile', component: ProfileComponent },
      { path: 'calendar', component: CalendarComponent },
      { path: 'doctors', component: ListDoctorsComponent },
      { path: 'clients', component: ListClientsComponent },
      { path: 'pushes', component: PushesComponent },
      { path: 'news', component: AddNewsComponent },
      { path: 'banners', component: AddBannersComponent },
      { path: 'shares', component: AddSharesComponent },
      { path: 'roles', component: RolesComponent },
      { path: 'calendar-doctor', component: CalendarDoctorComponent },
      { path: 'list-clients-doctor', component: ListClientsDoctorComponent },
      { path: 'cardClient/:id', component: CardComponent },
      { path: 'calendar-card/:selectDateCard', component: CalendarCardComponent },
      { path: 'record/:selectDate', component: RecordComponent },
      { path: 'record-list/:selectDate', component: RecordListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
