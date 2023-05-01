import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplComponent } from './expl.component';

describe('ExplComponent', () => {
  let component: ExplComponent;
  let fixture: ComponentFixture<ExplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
