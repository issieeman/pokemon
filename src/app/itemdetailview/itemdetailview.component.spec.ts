import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemdetailviewComponent } from './itemdetailview.component';

describe('ItemdetailviewComponent', () => {
  let component: ItemdetailviewComponent;
  let fixture: ComponentFixture<ItemdetailviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemdetailviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemdetailviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
