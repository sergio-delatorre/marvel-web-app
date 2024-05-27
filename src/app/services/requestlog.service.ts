import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RequestLog } from '../interfaces/requestlog.interface';

@Injectable({
  providedIn: 'root'
})
export class RequestlogService {

  private readonly REQUEST_LOG_ENDPOINT = '/request-logs';

  constructor(private http: HttpClient) {}

  public getCharacters() {
    return this.http.get<RequestLog[]>(`${environment.marvelApiBaseUrl}${this.REQUEST_LOG_ENDPOINT}`);
  }

}
