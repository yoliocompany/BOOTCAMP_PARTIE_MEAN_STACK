import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListemployersComponent } from './listemployers.component';

describe('ListemployersComponent', () => {
  let component: ListemployersComponent;
  let fixture: ComponentFixture<ListemployersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListemployersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListemployersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
