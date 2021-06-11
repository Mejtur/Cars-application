import { Component, OnInit } from '@angular/core';
import {Cars} from 'src/app/models/cars';
import { CarsService } from 'src/app/services/cars.service';
import {Users} from 'src/app/models/users';
import { UserService } from 'src/app/services/users.service';
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']

})

export class AddCarComponent implements OnInit {
  cars: Cars={
    carbrand:'',
    carmodel:'',
    carplate:'',
    rentdate: '',
    carid: 0

  };
  users: Users={
    username:'',
    usersurname:'',
    userid:0
  };

  submitted: boolean = false;

  constructor(private carsService: CarsService, private UserService: UserService) { }

  ngOnInit(): void {
  }

  saveCar(){
    const buffer: Cars = {
      carbrand:this.cars.carbrand,
      carmodel:this.cars.carmodel,
      carplate:this.cars.carplate,
      rentdate:this.cars.rentdate,
      carid:this.cars.carid
      
    };

    this.carsService.create(buffer)
    .subscribe(
      response => {
        console.log(response);
    this.submitted = true
      },

  error =>console.log(error)
    );
  }

  newCar(){
    this.submitted = false;
    this.cars={
      carbrand:'',
      carmodel: '',
      carplate:'',
      rentdate: '',
      carid:0
    };

  }





  saveUser(){
    const buffer: Users = {
      username:this.users.username,
      usersurname:this.users.usersurname,
      userid:this.users.userid
    };

    this.UserService.create(buffer)
    .subscribe(
      response => {
        console.log(response);
    this.submitted = true
      },

  error =>console.log(error)
    );
  }

  newUser(){
    this.submitted = false;
    this.users={
      username:'',
      usersurname: '',
      userid:0
    };

  }

}
