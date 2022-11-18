import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPostItNotesComponent } from './all-post-it-notes.component';

describe('AllPostItNotesComponent', () => {
  let component: AllPostItNotesComponent;
  let fixture: ComponentFixture<AllPostItNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPostItNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPostItNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
