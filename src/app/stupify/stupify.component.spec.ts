/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StupifyComponent } from './stupify.component';

describe('StupifyComponent', () => {
  let component: StupifyComponent;
  let fixture: ComponentFixture<StupifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StupifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StupifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
