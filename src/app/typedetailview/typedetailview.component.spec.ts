import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypedetailviewComponent } from './typedetailview.component';

describe('TypedetailviewComponent', () => {
  let component: TypedetailviewComponent;
  let fixture: ComponentFixture<TypedetailviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypedetailviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypedetailviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
