import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {
  name: string;
  username: string;
  password: string;
  email: string;

  constructor( private service: UserService) { }

  ngOnInit(): void {
  }

  newUser(): void {
    const user = {
      name: this.name,
      username: this.username,
      password: this.password,
      email: this.email
    };
    this.service.createUser(user).subscribe({
        // in here if user is created they should be signed in and forwarded to the dash
        next(res) {
          console.log('this is the response ', res);
        },
        error(err) {
          console.log(err);
        }
    });
  }

}

//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJpbGxzZ290amVhbiIsImlhdCI6MTU4NTYyODM3MTYyMiwiZXhwIjoxNTg1NjI4NDU4MDIyfQ.g7mpzUFy638tAbTg9AsJgO28gNugkh0zWURUxl2_id8"