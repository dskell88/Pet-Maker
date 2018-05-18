import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsComponent }      from './pets/pets.component';
import { DashboardComponent }   from './dashboard/dashboard.component'
import { PetDetailComponent }  from './pet-detail/pet-detail.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: PetDetailComponent },
  { path: 'pets', component: PetsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  
}


