import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewprojectComponent } from './previewproject.component';

describe('PreviewprojectComponent', () => {
  let component: PreviewprojectComponent;
  let fixture: ComponentFixture<PreviewprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewprojectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreviewprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
