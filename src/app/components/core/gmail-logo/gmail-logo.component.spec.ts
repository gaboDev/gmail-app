import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmailLogoComponent } from './gmail-logo.component';

describe('GmailLogoComponent', () => {
  let component: GmailLogoComponent;
  let fixture: ComponentFixture<GmailLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GmailLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GmailLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
