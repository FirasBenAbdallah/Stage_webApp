import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAnneComponent } from './new-anne.component';

describe('NewAnneComponent', () => {
  let component: NewAnneComponent;
  let fixture: ComponentFixture<NewAnneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewAnneComponent]
    });
    fixture = TestBed.createComponent(NewAnneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
