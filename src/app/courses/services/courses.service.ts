import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function

  private readonly API = '/assets/courses.json';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      delay(5000),
      tap((courses) => console.log(courses))
    ); //retorno com observable com array de cursos.
  }
}
