import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateEntryComponent } from './candidate-entry.component';

describe('CandidateEntryComponent', () => {
  let component: CandidateEntryComponent;
  let fixture: ComponentFixture<CandidateEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
