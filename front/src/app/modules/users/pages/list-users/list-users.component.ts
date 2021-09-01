import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NotificacitionService } from '../../../../shared/services/notificacition.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  public users: User[] = []
  displayedColumns: string[] = ['ID', 'name', 'lastName', 'user', 'role', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private usersService: UsersService,
    private notification: NotificacitionService,
  ) { }

  ngOnInit(): void {
    this.loads();
  }

  loads() {
    this.usersService.getUsers().subscribe((res: any) => {
      const { data } = res
      this.users = data;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteUser(id: string = '') {
    this.notification.confirm('Eliminar usuario', 'Esta seguro de querer eliminar este usuario', 'Ok')
      .then((res) => {
        this.usersService.deleteUser(id)
          .subscribe(res => {
            this.loads();
          })

      }).catch((err) => {
        console.log(err);
      });
  }

}
