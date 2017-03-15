import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {RouterModule} from '@angular/router';

import { routing } from './app-routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormTweetComponent } from './form-tweet/form-tweet.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormTweetComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routing)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
