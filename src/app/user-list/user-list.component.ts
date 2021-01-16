import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:User[];
  constructor(private userservice: UserService,
    private router:Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(){
    this.userservice.getUsersList().subscribe(data =>{
      this.users=data;
    });
  }

userDetails(id:number)
{
  this.router.navigate(['user-details',id]);
}

  updateUser(id:number)
  {
    this.router.navigate(['update-user',id]);
  }

  deleteUser(id:number)
  {
    this.userservice.deleteUser(id).subscribe(data => {
      console.log(data);
      this.getUsers();
    })
  }

  lockUser(id:number)
  {
    this.userservice.lockUser(id).subscribe(data => {
      console.log(data);
      this.getUsers();
    })
  }

  unlockUser(id:number)
  {
    this.userservice.unlockUser(id).subscribe(data => {
      console.log(data);
      this.getUsers();
    })
  }

  
}
