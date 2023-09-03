import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EducationComponent } from './components/education/education.component';
import { AwardsAndHonorsComponent } from './components/awards-and-honors/awards-and-honors.component';
import { FriendsComponent } from './components/friends/friends.component';
import { InterestsComponent } from './components/interests/interests.component';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '',redirectTo:'/home', pathMatch:'full'},
      { path: 'home',  component: HomeComponent },
      { path: 'education', component: EducationComponent },
      { path: 'awards-and-honors', component: AwardsAndHonorsComponent },
      { path: 'friends', component: FriendsComponent },
      { path: 'interests', component: InterestsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
