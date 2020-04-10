import { Injectable } from '@angular/core';
import {HttpClient,} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private cliendid = "16f2ea557619fa1ae864";
  private clientsecret = "a69227bddddcefbac0a8f6f4c7cad0d4a02cd1f0"
  
  constructor(private http: HttpClient) { }
}
