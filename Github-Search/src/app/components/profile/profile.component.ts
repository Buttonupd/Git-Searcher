import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../services/profile.service';
import { Subscriber } from 'rxjs';
// import {Profile} from  '../../profile';
import { Identifiers } from '@angular/compiler';
import { stringify } from 'querystring';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any['ProfileService'];
  repos:any['ProfileService'];
  username:string;

  // profile:Profile[] = [
  //   new Profile, {name:'', repos:''},
  // ]
 

  constructor(private profileService: ProfileService) {
   
   }

   findProfile(){
     this.profileService.updateProfile(this.username);
     this.profileService.getProfileInfo().subscribe(profile =>{
      console.log(profile)
      // return profile;
     this.profile = profile;
    });

    this.profileService.getProfileRepos().subscribe(repos =>{
      console.log(repos);
      this.repos = repos;
      
      
    });
     
   }

  ngOnInit(): void {
  }

}
