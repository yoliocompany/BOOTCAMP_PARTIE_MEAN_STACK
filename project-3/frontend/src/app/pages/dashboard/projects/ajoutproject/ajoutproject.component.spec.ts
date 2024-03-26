import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutprojectComponent } from './ajoutproject.component';

describe('AjoutprojectComponent', () => {
  let component: AjoutprojectComponent;
  let fixture: ComponentFixture<AjoutprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutprojectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
