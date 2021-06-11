import { Component, OnInit } from '@angular/core';
import {Cars} from 'src/app/models/cars';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css']
})
export class DeleteCarComponent implements OnInit {
  carmodel: string='';
  currentIndex: number =-1;
  cars: any=[];
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
  DeleteCar(carid){
    this.carsService.deleteById(this.currentCar.carid)
    .subscribe(
      response => {
        console.log(response);
        this.getCars();
      },
      error => {
        console.log(error);
      });
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

  setActiveCar(car: Cars, index: number){
    this.currentCar = car;
    this.currentIndex = index;
  }


}


