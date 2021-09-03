import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menu: Array<any> = [
    {
      path: ['/', 'home', 'about'],
      name: 'About',

    },
    {
      path: ['/', 'auth'],
      name: 'Login'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
