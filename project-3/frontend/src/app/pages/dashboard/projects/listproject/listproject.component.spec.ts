import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListprojectComponent } from './listproject.component';

describe('ListprojectComponent', () => {
  let component: ListprojectComponent;
  let fixture: ComponentFixture<ListprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListprojectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
