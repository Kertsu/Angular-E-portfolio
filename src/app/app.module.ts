import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { InterestsComponent } from './components/interests/interests.component';
import { EducationComponent } from './components/education/education.component';
import { FriendsComponent } from './components/friends/friends.component';
import { AwardsAndHonorsComponent } from './components/awards-and-honors/awards-and-honors.component';
import { MobileNavComponent } from './components/mobile-nav/mobile-nav.component';
import { BlueSectionComponent } from './components/blue-section/blue-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { TestimoniesComponent } from './components/testimonies/testimonies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    InterestsComponent,
    EducationComponent,
    FriendsComponent,
    AwardsAndHonorsComponent,
    MobileNavComponent,
    BlueSectionComponent,
    FooterComponent,
    BannerComponent,
    TestimoniesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
