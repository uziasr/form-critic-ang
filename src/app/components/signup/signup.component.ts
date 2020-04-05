import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

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

  constructor( private service: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  newUser(): void {
    const user = {
      name: this.name,
      username: this.username,
      password: this.password,
      email: this.email
    };
    const newRouter = this.router;
    this.service.createUser(user).subscribe({
        // in here if user is created they should be signed in and forwarded to the dash
        next(res) {
          console.log('this is the response ', res);
          localStorage.setItem('authorization', res.token);
          newRouter.navigate(['/posts']);
        },
        error(err) {
          console.log(err);
        }
    });
  }

}
