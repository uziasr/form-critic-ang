import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {
  loggedIn = localStorage.getItem('authorization') ? true  : false;

  constructor() { }

  ngOnInit(): void {
  }

  logOut(e) {
    localStorage.removeItem('authorization');
    this.loggedIn = false;
  }

}
