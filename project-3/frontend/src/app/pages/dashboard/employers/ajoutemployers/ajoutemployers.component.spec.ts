import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutemployersComponent } from './ajoutemployers.component';

describe('AjoutemployersComponent', () => {
  let component: AjoutemployersComponent;
  let fixture: ComponentFixture<AjoutemployersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutemployersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutemployersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
