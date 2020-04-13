import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment } from '../../environments/environment';
import { Subscriber } from 'rxjs';
import {Observable, of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile:any[];
  private clientid = environment.clientdid;
  private clientsecret = environment.clientsecret;
  private username: string;
  
  
  constructor(private http: HttpClient) { 
    console.log("service is now ready")
    this.username = 'Buttonupd';
    
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .pipe(map(res => res));
    
  };

  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .pipe(map(res => res));

  }
  updateProfile(username:string){
    this.username = username;
    

  }
}
