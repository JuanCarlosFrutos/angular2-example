// Importar componentes y módulos para el routing 
 
// Componentes
import { HeaderComponent }    from './header/header.component';
import { FormTweetComponent }    from './form-tweet/form-tweet.component';
import { SignupComponent }    from './signup/signup.component';
import { FormLoginComponent }    from './form-login/form-login.component';

export const routing = [
  //{ path: '/', component:  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: 'tweet', component: FormTweetComponent },
  { path: 'signUp', component: SignupComponent },
  { path: 'login', component: FormLoginComponent }
];