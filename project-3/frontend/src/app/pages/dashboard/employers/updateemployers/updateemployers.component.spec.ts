import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateemployersComponent } from './updateemployers.component';

describe('UpdateemployersComponent', () => {
  let component: UpdateemployersComponent;
  let fixture: ComponentFixture<UpdateemployersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateemployersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateemployersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
