import { Injectable } from '@angular/core';
import { RxStomp } from '@stomp/rx-stomp';
import { Message } from '@stomp/stompjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Notification } from '../../model/notification.model';
import { UrlService } from '../url-service/url.service';
import { STOMP_SOCKET_CONFIG } from './stomp.config';

/**
 * Subscription service for listening to a socket and processing
 * the notification that is passed in.
 *
 * @author Sam Butler
 * @since August 11, 2022
 */
@Injectable({
  providedIn: 'root',
})
export class SubscriptionService extends RxStomp {
  private readonly SOCKET_URL = '/topic/notification';

  constructor(private readonly urlService: UrlService) {
    super();
  }

  /**
   * Initialize the socket connection.
   */
  init() {
    if (!this.active) {
      this.configure(STOMP_SOCKET_CONFIG);
      this.configure({
        brokerURL: `${this.urlService.getSocketAPIUrl()}?${localStorage.getItem(
          'token'
        )}`,
      });
      this.activate();
    }
  }

  /**
   * This will listen to the websocket url for any request and show it to the
   * provided user.
   *
   * @param destination What socket path to listen too.
   * @returns Observable of the caught Notification object.
   */
  listen(destination?: string): Observable<Notification> {
    this.deactivate;
    return super
      .watch(`${destination ? destination : this.SOCKET_URL}`)
      .pipe(map((res: Message) => JSON.parse(res.body)));
  }

  /**
   * Kill the websocket connection.
   */
  disconnect() {
    this.deactivate();
  }
}
