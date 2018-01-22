import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorddetailsComponent } from './worddetails.component';

describe('WorddetailsComponent', () => {
  let component: WorddetailsComponent;
  let fixture: ComponentFixture<WorddetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorddetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
