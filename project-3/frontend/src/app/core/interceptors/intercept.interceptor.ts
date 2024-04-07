import { HttpInterceptorFn } from '@angular/common/http';

export const interceptInterceptor: HttpInterceptorFn = (req, next) => {
  
  const token = localStorage.getItem('token');

  const request = req.clone({
    setHeaders: {
      authorization: 'Bearer ' + token
    }
  })

  return next(request);

};
