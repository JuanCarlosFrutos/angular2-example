import { Injectable }   from '@angular/core';
import { CanActivate }  from '@angular/router';
import { LoginService } from './login-service.service';

@Injectable()
export class CanActivateService implements CanActivate{

  constructor(
  	private loginService : LoginService 
  ){}

  canActivate(){

  	return this.loginService.isLoggedIn();

  }

}
