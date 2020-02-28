// Core imports...
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Greeting } from '../entities/greeting.entity';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  constructor(
    private http: HttpClient
  ) { 
    console.log("GreetingService | constructor");
  }

  getGreetings(): Observable<Greeting[]> {
    return this.http.get<Greeting[]>("api/greetings");
  }
}
