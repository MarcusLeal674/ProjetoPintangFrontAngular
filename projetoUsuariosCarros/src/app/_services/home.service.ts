import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '@app/_interfaces/users';
import { environment } from '@environments/environment';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  listUsers() {
    return this.http
      .get<Users[]>(`${environment.apiUrl}/api/users`)
      .pipe(tap(console.log));
  }

  deleteUser(id: number) {
    return this.http
      .delete<string>(`${environment.apiUrl}/api/users/${id}`)
      .pipe(tap(msg => { return msg; }));
  }

  findUser(id: number): Observable<Users> {
    return this.http.get<Users>(`${environment.apiUrl}/api/users/${id}`);
  }

  updateUser(user: Users, id: number): Observable<string> {
    return this.http.put<string>(`${environment.apiUrl}/api/users/${id}`, user)
    .pipe(tap(msg => {
      console.log('Update: ' + msg)
      return msg; }));
  }
}
