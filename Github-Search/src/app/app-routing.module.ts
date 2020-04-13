import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';



const routes: Routes = [
  { path: 'profiles', component: ProfileComponent},
  { path: 'about', component: AboutComponent},
  { path:'**', component:NotFoundComponent},

  { path: '', redirectTo:"/profiles", pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
