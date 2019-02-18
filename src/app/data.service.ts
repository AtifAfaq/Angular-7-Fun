import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getCourses() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
      .map(courses => courses.json())
      .toPromise();
  }
}

// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }
