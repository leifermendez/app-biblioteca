import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { JournalsService } from '../../services/journals.service';
import { NotificacitionService } from '../../../../shared/services/notificacition.service';

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
  constructor(
    private journalsService: JournalsService,
    private notification: NotificacitionService,

  ) { }

  ngOnInit(): void {
    this.loads();
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

}
