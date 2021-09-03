import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-books-loans',
  templateUrl: './list-books-loans.component.html',
  styleUrls: ['./list-books-loans.component.css']
})
export class ListBooksLoansComponent implements OnInit {
  @Input() data: any;
  @Input() report: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
