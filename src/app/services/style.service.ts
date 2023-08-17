import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class StyleService {
  private headerHeightSubject = new BehaviorSubject<number>(0);

  setHeaderHeight(height: number) {
    this.headerHeightSubject.next(height);
  }

  getHeaderHeight(): Observable<number> {
    return this.headerHeightSubject.asObservable();
  }
}
