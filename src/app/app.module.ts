import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {StoreModule, provideStore} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import { routing } from './app.routing';
//REDUCES
import { TweetReduce } from './store/reduce/tweet.reduce';
import { UserReduce } from './store/reduce/user.reduce';
import { UserLoged } from './store/reduce/user-loged.reduce';
import { HashtagsReduce } from './store/reduce/hashtags.reduce';
import { GlobalId } from './store/global-id';
//COMPONENTS
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { TweetComponent } from './tweet/tweet.component';
import { HeaderComponent } from './header/header.component';
import { FormTweetComponent } from './form-tweet/form-tweet.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignupComponent } from './signup/signup.component';
import { FormLoginComponent } from './form-login/form-login.component';
//SERVICES
import { LoginService } from './login-service.service';
import { CanActivateService } from './can-activate-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormTweetComponent,
    NavBarComponent,
    FeedComponent,
    TweetComponent,
    SignupComponent,
    FormLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routing),
    StoreModule.provideStore({ TweetReduce, 
                               UserReduce, 
                               UserLoged, 
                               HashtagsReduce,
                               GlobalId
                             }),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [
    LoginService,
    CanActivateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
