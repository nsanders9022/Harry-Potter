/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TransfigureComponent } from './transfigure.component';

describe('TransfigureComponent', () => {
  let component: TransfigureComponent;
  let fixture: ComponentFixture<TransfigureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransfigureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
