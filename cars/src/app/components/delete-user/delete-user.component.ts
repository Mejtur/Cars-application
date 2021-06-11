import { Component, OnInit } from '@angular/core';
import {Users} from 'src/app/models/users';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  currentIndex1: number =-1;
  users: any=[];
  currentUser: Users = {
    userid:-1,
    username:'',
    usersurname:''
  
  };

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  DeleteUser(carid){
    this.UserService.deleteById(this.currentUser.userid)
    .subscribe(
      response => {
        console.log(response);
        this.getUsers();
      },
      error => {
        console.log(error);
      });
  }

  getUsers(){
    this.UserService.getAll()
      .subscribe(
        data =>{
          this.users = data as Users[];
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  setActiveUser(user: Users, index: number){
    this.currentUser = user;
    this.currentIndex1 = index;
  }


}



