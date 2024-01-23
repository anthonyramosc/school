import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolComponent } from './hol.component';

describe('HolComponent', () => {
  let component: HolComponent;
  let fixture: ComponentFixture<HolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
