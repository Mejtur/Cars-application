import { Component, OnInit } from '@angular/core';
import {Cars} from 'src/app/models/cars';
import { CarsService } from 'src/app/services/cars.service';
import {Users} from 'src/app/models/users';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {
  carbrand: string='';
  currentIndex: number =-1;
  currentIndex1: number =-1;
  cars: any=[];
  user: any=[];
  currentCar: Cars = {
    carid: -1,
    carbrand:'',
    carmodel:'',
    carplate: '',
    rentdate:''
  };
  currentUser: Users = {
    userid: -1,
    username:'',
    usersurname:''
  };

  constructor(private carsService: CarsService, private UserService: UserService) { }

  ngOnInit(): void {
    this.getCars();
    this.getUsers();
  }

  getCars(){
    this.carsService.getAll()
      .subscribe(
        data =>{
          this.cars = data as Cars[];
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  getUsers(){
    this.UserService.getAll()
      .subscribe(
        data =>{
          this.user = data as Users[];
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  searchCars(){
    this.carsService.findByTitle(this.carbrand)
      .subscribe(
        data => {
          this.cars=[];
          this.cars.push(data);
          console.log(data);
        },
        
        error => {
          this.getCars();
          console.log(error)
        }
      );
  }
  setActiveCar(car: Cars, index: number){
    this.currentCar = car;
    this.currentIndex = index;
  }
  setActiveUser(user: Users, index: number){
    this.currentUser = user;
    this.currentIndex1 = index;
  }


}

