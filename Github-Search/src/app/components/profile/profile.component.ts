import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../services/profile.service';
import { Subscriber } from 'rxjs';
// import {Profile} from  '../../profile';
import { Identifiers } from '@angular/compiler';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any['ProfileService'];

  // profile:Profile[] = [
  //   new Profile, {name:'', repos:''},
  // ]
 

  constructor(private profileService: ProfileService) {
    this.profileService.getProfileInfo().subscribe(profile =>{
      console.log(profile)
      // return profile;
     this.profile = profile;
    });
   }

  ngOnInit(): void {
  }

}
