import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAnneeComponent } from './index-annee.component';

describe('IndexAnneeComponent', () => {
  let component: IndexAnneeComponent;
  let fixture: ComponentFixture<IndexAnneeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexAnneeComponent]
    });
    fixture = TestBed.createComponent(IndexAnneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
