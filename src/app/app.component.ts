import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Shoes.com UI Test';
  constructor(private httpService: HttpClient) { };
  musicData: string [];

  ngOnInit() {
    this.httpService.get('../assets/data/UITestData.json').subscribe(
      data => {
        this.musicData = data as string [];
        console.log(this.musicData);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}
