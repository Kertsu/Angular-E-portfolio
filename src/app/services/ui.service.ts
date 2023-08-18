import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private isToggled: boolean = false;
  private isDarkMode: boolean = false;
  private themeSubject = new Subject<any>();
  private subject = new Subject<any>();

  toggleMenu() {
    console.log(123);
    this.isToggled = !this.isToggled;
    this.subject.next(this.isToggled);
  }

  onToggleMenu() {
    return this.subject.asObservable();
  }

  changeTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.themeSubject.next(this.isDarkMode);
    console.log(this.isDarkMode);
  }

  onChangeTheme() {
    return this.themeSubject.asObservable();
  }
}
