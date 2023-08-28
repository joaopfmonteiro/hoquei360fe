import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralHeaderComponent } from './lateral-header.component';

describe('LateralHeaderComponent', () => {
  let component: LateralHeaderComponent;
  let fixture: ComponentFixture<LateralHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LateralHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LateralHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
