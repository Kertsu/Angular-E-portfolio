import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private isToggled: boolean = false;

  toggleMenu() {
    this.isToggled = !this.isToggled;
  }

  getIsToggled() {
    return this.isToggled;
  }
}
