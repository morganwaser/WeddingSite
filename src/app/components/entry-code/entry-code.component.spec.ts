import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryCodeComponent } from './entry-code.component';

describe('EntryCodeComponent', () => {
  let component: EntryCodeComponent;
  let fixture: ComponentFixture<EntryCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
