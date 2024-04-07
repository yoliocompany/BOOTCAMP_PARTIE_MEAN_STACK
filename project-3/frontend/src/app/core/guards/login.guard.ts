import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../auth/authentication.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const _auth = inject( AuthenticationService );
  const _router= inject( Router );

  if(_auth.isLoggedIn() == false){
    return true;
  }else{
    _router.navigate(['/dashboard']);
    return false;
  }
};
