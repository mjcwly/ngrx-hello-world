// Core imports...
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { World } from '../entities/world.entity';

@Injectable({
  providedIn: 'root'
})
export class WorldService {

  constructor(
    private http: HttpClient
  ) { }

  getWorlds(): Observable<World[]> {
    return this.http.get<World[]>("api/worlds");
  }
}
