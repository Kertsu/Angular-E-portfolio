import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private isToggled: boolean = false;
  private subject = new Subject<any>();
  private isDarkModeSubject = new BehaviorSubject<boolean>(false);
  public isDarkMode$ = this.isDarkModeSubject.asObservable();

  toggleMenu() {
    this.isToggled = !this.isToggled;
    this.subject.next(this.isToggled);
  }

  onToggleMenu() {
    return this.subject.asObservable();
  }

  changeTheme() {
    this.isDarkModeSubject.next(!this.isDarkModeSubject.value);
  }

  // onChangeTheme() {
  //   return this.themeSubject.asObservable();
  // }
}
