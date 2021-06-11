import { Component, OnInit } from '@angular/core';
import {Cars} from 'src/app/models/cars';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  carmodel: string='';
  currentIndex: number =-1;
  cars: any=[];
  message = '';
  currentCar: Cars = {
    carid: -1,
    carbrand:'',
    carmodel:'',
    carplate: '',
    rentdate:''
  };

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.getCars();
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

  EditCar() {
    this.carsService.update(this.currentCar.carid, this.currentCar)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'Samochód został edytowany';
        },
        error => {
          console.log(error);
        });
  }
  setActiveCar(car: Cars, index: number){
    this.currentCar = car;
    this.currentIndex = index;
  }


}


