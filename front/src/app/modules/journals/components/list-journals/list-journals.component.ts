import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { JournalsService } from '../../services/journals.service';
import { NotificacitionService } from '../../../../shared/services/notificacition.service';
import { AuthService } from '../../../auth/services/auth.service';
import { LoansService } from '../../../loans-books-journals/services/loans.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-list-journals',
  templateUrl: './list-journals.component.html',
  styleUrls: ['./list-journals.component.css']
})
export class ListJournalsComponent implements OnInit {
  displayedColumns: string[] = ['author', 'title', 'edition', 'keyword', 'description', 'currentFrequency', 'specimens', 'theme', 'copy', 'available', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  journals: any[] = [];
  user: any;
  loading!: boolean;
  constructor(
    private journalsService: JournalsService,
    private notification: NotificacitionService,
    private authService: AuthService,
    private loansService: LoansService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.loads();
    this.user = this.authService.currentUser();
  }

  loads() {
    this.journalsService.getJournals().subscribe((res: any) => {
      this.journals = res.data;
      this.dataSource = new MatTableDataSource(this.journals);
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

  deleteJournal(id: string = '') {
    this.notification.confirm('Eliminar Revista', 'Esta seguro de querer eliminar esta revista', 'Ok')
      .then((res) => {
        this.journalsService.deleteJournal(id)
          .subscribe(res => {
            this.loads();
          })

      }).catch((err) => {
        console.log(err);
      });
  }
  loansJournal(id: string) {
    this.loading = true;
    const body = {
      journal: id
    }
    this.loansService.loansJournal(body)
      .pipe(finalize(() => this.loading = false))
      .subscribe(res => {       
        this.router.navigate(['/', 'loans'])
      }, err => this.loading = false)
  }

}
