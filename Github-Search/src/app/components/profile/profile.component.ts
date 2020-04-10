import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../services/profile.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any[any];

  constructor(private profileService: ProfileService) {
    this.profileService.getProfileInfo().valueOf()
    this.profile = this.profile;
    
    
   }

  ngOnInit(): void {
  }

}
