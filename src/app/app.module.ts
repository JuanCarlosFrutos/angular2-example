import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { StoreModule, provideStore } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routing } from './app.routing';
//REDUCES
import { TweetReduce } from './shared/store/reduce/tweet.reduce';
import { UserReduce } from './shared/store/reduce/user.reduce';
import { UserLoged } from './shared/store/reduce/user-loged.reduce';
import { HashtagsReduce } from './shared/store/reduce/hashtags.reduce';
//COMPONENTS
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { TweetComponent } from './feed/tweet/tweet.component';
import { FormTweetComponent } from './form-tweet/form-tweet.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignupComponent } from './form-signup/signup.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { SearchComponent }    from './search/search.component'
//SERVICES
import { LoginService } from './shared/services/login-service.service';
import { CanActivateService } from './shared/services/can-activate-service.service';
import { TweetDataService } from './shared/services/tweet-data-service.service';
import { HashtagDataService } from './shared/services/hashtag-data-service.service';
import { FormsService } from './shared/services/forms-service.service';
import { UserComponent } from './feed/user/user.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    FormTweetComponent,
    NavBarComponent,
    FeedComponent,
    TweetComponent,
    SignupComponent,
    FormLoginComponent,
    SearchComponent,
    UserComponent,
    MenuComponent
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
                             }),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [
    LoginService,
    CanActivateService,
    TweetDataService,
    HashtagDataService,
    FormsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
