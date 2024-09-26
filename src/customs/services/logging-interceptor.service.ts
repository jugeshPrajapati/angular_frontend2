import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class LoggingInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Logging Interceptor called!');
    console.log('Request sent to URL: ' + req.url);
    return next.handle(req);
  }
}
