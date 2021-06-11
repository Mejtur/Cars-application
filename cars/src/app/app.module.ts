import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCarComponent } from './components/add-car/add-car.component';

import { ListCarComponent } from './components/list-car/list-car.component';
import { DeleteCarComponent } from './components/delete-car/delete-car.component';
import { EditCarComponent } from './components/edit-car/edit-car.component';
import { HomeComponent } from './components/home/home.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCarComponent,
    ListCarComponent,
    DeleteCarComponent,
    EditCarComponent,
    HomeComponent,
    DeleteUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
