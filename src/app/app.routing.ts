// Componentes
import { FormTweetComponent }    from './form-tweet/form-tweet.component';
import { SignupComponent }    from './form-signup/signup.component';
import { FormLoginComponent }    from './form-login/form-login.component';
import { SearchComponent }    from './search/search.component';
import { MenuComponent }    from './menu/menu.component';
import { CanActivateService }	from './shared/services/can-activate-service.service';

export const routing = [

  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { 
    path: 'tweet',
    component: FormTweetComponent,
    canActivate: [
    	CanActivateService
    ]
  },
  { 
    path: 'search',
    component: SearchComponent,
    canActivate: [
      CanActivateService
    ]
  },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: FormLoginComponent},
  { path: 'menu',
    component: MenuComponent,
    canActivate: [
      CanActivateService
    ]
  },
  { path: '**', component:MenuComponent}
];