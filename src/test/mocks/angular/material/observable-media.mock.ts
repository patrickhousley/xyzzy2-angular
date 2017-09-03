import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class ObservableMediaMockService extends ObservableMedia {
  currentMediaChange: MediaChange;

  isActive(query: string): boolean {
    return this.currentMediaChange && this.currentMediaChange.mqAlias === query;
  }
  asObservable(): Observable<MediaChange> {
    return Observable.of(this.currentMediaChange);
  }
  subscribe(next?: (value: MediaChange) => void, error?: (error: any) => void, complete?: () => void): Subscription {
    return Observable.of(this.currentMediaChange).subscribe(next, error, complete);
  }
}
