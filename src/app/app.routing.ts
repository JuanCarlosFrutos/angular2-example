// Importar componentes y módulos para el routing 
 
// Componentes
import { HeaderComponent }    from './header/header.component';
import { FormTweetComponent }    from './form-tweet/form-tweet.component';
import { SignupComponent }    from './signup/signup.component';
import { FormLoginComponent }    from './form-login/form-login.component';
import { CanActivateService }	from './can-activate-service.service';

export const routing = [
  //{ path: '/', component:  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  // { 
  //   path: 'tweet',
  //   component: FormTweetComponent,
  //   canActivate: [
  //   	CanActivateService
  //   ]
  // },
  { path: 'signup', component: SignupComponent },
  { 
    path: 'login',
    component: FormLoginComponent,
    children: [
      {
        path: 'tweet',
        component : FormTweetComponent,
        canActivate: [
         CanActivateService
        ]
      }
    ]
  },
  { path: '**', component: FormLoginComponent }
];