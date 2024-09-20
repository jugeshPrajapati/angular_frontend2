import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchExComponent } from './ng-switch-ex.component';

describe('NgSwitchExComponent', () => {
  let component: NgSwitchExComponent;
  let fixture: ComponentFixture<NgSwitchExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgSwitchExComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgSwitchExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
