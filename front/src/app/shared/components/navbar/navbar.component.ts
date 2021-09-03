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
      name: 'Usuarios',
      role: ['admin'],
    },
    {
      path: ['/', 'books-journals'],
      name: 'Libros/Revistas',
      role: ['admin', 'student'],
    },
    {
      path: ['/', 'reports'],
      name: 'Reportes',
      role: ['admin'],
    },
    {
      path: ['/', 'loans', 'history'],
      name: 'Historial',
      role: ['student', 'librarian'],
    },
    {
      path: ['/', 'loans'],
      name: 'Prestamos de libro',
      role: ['student', 'librarian'],
    }

  ]
  user!: any;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = this.authService.currentUser();
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/', 'home'])
    })
  }

}
