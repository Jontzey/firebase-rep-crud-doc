import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeFirebaseComponent } from './realtime-firebase.component';

describe('RealtimeFirebaseComponent', () => {
  let component: RealtimeFirebaseComponent;
  let fixture: ComponentFixture<RealtimeFirebaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealtimeFirebaseComponent]
    });
    fixture = TestBed.createComponent(RealtimeFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
