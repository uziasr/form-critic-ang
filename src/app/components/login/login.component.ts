import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
// import {}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void  {
    const credentials = {
      username: this.username,
      password: this.password
    };
    const newRouter = this.router;

    this.service.userLogin(credentials).subscribe({
      next(res) {
        console.log(res);
        localStorage.setItem('authorization', res.token);
        newRouter.navigate(['/posts']);
      },
      error(err) {
        console.log(err);
      }
    });
  }

}
