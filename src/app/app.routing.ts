// Importar componentes y módulos para el routing 
 
// Componentes
import { FormTweetComponent }    from './form-tweet/form-tweet.component';
import { SignupComponent }    from './form-signup/signup.component';
import { FormLoginComponent }    from './form-login/form-login.component';
import { SearchComponent }    from './search/search.component';
import { MenuComponent }    from './menu/menu.component';
import { CanActivateService }	from './shared/services/can-activate-service.service';

export const routing = [
  //{ path: '/', component:  },
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
    path: 'test',
    component: SearchComponent,
    canActivate: [
      CanActivateService
    ]
  },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: FormLoginComponent},
  { path: 'menu', component: MenuComponent},
  { path: '**', component:MenuComponent}
];