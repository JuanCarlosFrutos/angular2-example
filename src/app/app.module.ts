import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
//STORE
import { StoreModule, provideStore } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routing } from './app.routing';
//REDUCES
import { TweetReducer } from './shared/store/reducer/tweet.reducer';
import { UserReducer } from './shared/store/reducer/user.reducer';
import { UserLoged } from './shared/store/reducer/user-loged.reducer';
import { HashtagsReducer } from './shared/store/reducer/hashtags.reducer';
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
    StoreModule.provideStore({ tweets : TweetReducer, 
                               users : UserReducer, 
                               userLogged : UserLoged, 
                               hashtags :HashtagsReducer,
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
