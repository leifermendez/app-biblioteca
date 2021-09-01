import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../modules/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menu: Array<any> = [
    {
      path: ['/', 'users'],
      name: 'usuarios'
    },
    {
      path: ['/', 'books-journals'],
      name: 'Libros/Revistas'
    },


  ]
  user!: string;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const { name } = this.authService.currentUser();
    this.user = name;
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/', 'auth'])
    })
  }

}
