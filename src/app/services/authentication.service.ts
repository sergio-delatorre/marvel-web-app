import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserRequest, UserResponse } from '../interfaces/authentication.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly AUTH_ENDPOINT = environment.authUri;

  constructor(private http: HttpClient) { }

  signUp(user: UserRequest): Observable<any> {
    const url = `${environment.marvelApiBaseUrl}${this.AUTH_ENDPOINT}`;
    return this.http.post<UserResponse>(url, user);
  }

}
