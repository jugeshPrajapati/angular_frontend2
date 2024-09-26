import { HttpInterceptorFn, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Auth Interceptor called!');
  const modifiedReq = req.clone({
    headers: req.headers.append('auth', 'abcxyz'),
  });
  return next(modifiedReq).pipe(
    tap((event) => {
      if (event.type === HttpEventType.Response) {
        console.log('Response has arrived. Response data: ');
        console.log(event.body);
      }
    })
  );
};
