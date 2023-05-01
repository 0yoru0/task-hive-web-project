import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcardComponent } from './tcard.component';

describe('TcardComponent', () => {
  let component: TcardComponent;
  let fixture: ComponentFixture<TcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
