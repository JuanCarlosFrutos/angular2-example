import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {StoreModule, provideStore} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import { routing } from './app.routing';
//REDUCES
import { TweetReduce } from './store/reducer/tweet.reducer';
import { FilterReduce } from './store/reducer/filter.reducer';
//COMPONENTS
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { TweetComponent } from './tweet/tweet.component';
import { HeaderComponent } from './header/header.component';
import { FormTweetComponent } from './form-tweet/form-tweet.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormTweetComponent,
    NavBarComponent,
    FeedComponent,
    TweetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routing),
    StoreModule.provideStore({TweetReduce, FilterReduce}),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
