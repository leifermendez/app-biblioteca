import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  image: string = 'https://cloudfront-us-east-1.images.arcpublishing.com/radiomitre/AFKEW2EGVZFCLDKRA2B7TJ65Z4.png'
  constructor() { }

  ngOnInit(): void {
  }

}
