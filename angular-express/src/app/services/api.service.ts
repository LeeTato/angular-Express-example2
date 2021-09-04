import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3333'

  constructor(private http:HttpClient) { }

  get<T>(resource:string){
    return this.http.get<T>(this.baseUrl+resource).pipe(shareReplay())
  }
}
