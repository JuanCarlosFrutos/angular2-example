/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormTweetComponent } from './form-tweet.component';

describe('FormTweetComponent', () => {
  let component: FormTweetComponent;
  let fixture: ComponentFixture<FormTweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
