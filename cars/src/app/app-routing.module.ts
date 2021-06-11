import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{AddCarComponent} from './components/add-car/add-car.component';
import{DeleteCarComponent} from './components/delete-car/delete-car.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import{EditCarComponent} from './components/edit-car/edit-car.component';
import { HomeComponent } from './components/home/home.component';
import{ListCarComponent} from './components/list-car/list-car.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'delete', component: DeleteCarComponent},
  { path: 'deleteuser', component: DeleteUserComponent},
  { path: 'list', component: ListCarComponent},
  { path: 'add', component:AddCarComponent},
  { path: 'edit', component: EditCarComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
