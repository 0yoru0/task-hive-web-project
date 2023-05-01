import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpCComponent } from './exp-c.component';

describe('ExpCComponent', () => {
  let component: ExpCComponent;
  let fixture: ComponentFixture<ExpCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
