import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorCatalogusComponent } from './motor-catalogus.component';

describe('MotorCatalogusComponent', () => {
  let component: MotorCatalogusComponent;
  let fixture: ComponentFixture<MotorCatalogusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorCatalogusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorCatalogusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
