import { Injectable } from '@angular/core';
import {HttpClient,} from '@angular/common/http';
// import {HttpHeaders} from '@angular/common/http';
// import {catchError, map} from 'rxjs/operators'
// import {throwError} from 'rxjs';
// import {Observable} from 'rxjs/Observable' 

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private cliendid = "16f2ea557619fa1ae864";
  private clientsecret = "a69227bddddcefbac0a8f6f4c7cad0d4a02cd1f0"
  
  constructor(private http: HttpClient) { 
    console.log("service is now ready");
    this.username = 'Buttonupd';
    
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.cliendid + "&client_secret=" + this.clientsecret)
    .subscribe(res => console.log(res));
    ;
    
  }
}
