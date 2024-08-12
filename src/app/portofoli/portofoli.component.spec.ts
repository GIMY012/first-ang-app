import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofoliComponent } from './portofoli.component';

describe('PortofoliComponent', () => {
  let component: PortofoliComponent;
  let fixture: ComponentFixture<PortofoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortofoliComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortofoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
