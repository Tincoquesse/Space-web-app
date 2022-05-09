import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Dragon} from "../models/dragon";
import {environment} from "../../../environments/environment";
import {Launch} from "../models/launch";

@Injectable({
  providedIn: 'root'
})
export class SpacexService{

  constructor(private http: HttpClient) { }

  getDragons = (): Observable<Dragon[]> =>
    this.http.get<Dragon[]>(`${environment.spacexBaseUrl}dragons/`);

  getNextLaunch = (): Observable<Launch[]> =>
    this.http.get<Launch[]>(`${environment.spacexBaseUrl}launches/next`)

}
