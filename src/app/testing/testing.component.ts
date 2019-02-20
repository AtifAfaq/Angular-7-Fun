import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

 courses: any;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getCourses()
    .subscribe(res => this.courses = res);
  }
}
