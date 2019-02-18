import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

 courses = [];

  constructor(private dataService:DataService) { }

  ngOnInit() {

    this.dataService.getCourses()
      .then((data) => {
        this.courses = data
      });
  }

}
