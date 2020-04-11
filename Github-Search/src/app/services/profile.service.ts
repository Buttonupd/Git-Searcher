import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators'
// import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Subscriber } from 'rxjs';
import {Observable, of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile:any[];

  private username: string;
  private cliendid = "16f2ea557619fa1ae864";
  private clientsecret = "a69227bddddcefbac0a8f6f4c7cad0d4a02cd1f0"
  
  constructor(private http: HttpClient) { 
    console.log("service is now ready");
    this.username = 'Buttonupd';
    
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.cliendid + "&client_secret=" + this.clientsecret)
    .pipe(map(res => res));
    
  };

  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.cliendid + "&client_secret=" + this.clientsecret)
    .pipe(map(res => res));

  }
  updateProfile(username:string){
    this.username = username;
    

  }
}
