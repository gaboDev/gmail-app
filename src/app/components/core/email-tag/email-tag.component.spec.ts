import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTagComponent } from './email-tag.component';

describe('EmailTagComponent', () => {
  let component: EmailTagComponent;
  let fixture: ComponentFixture<EmailTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
