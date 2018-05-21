import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelmetCatalogusComponent } from './helmet-catalogus.component';

describe('HelmetCatalogusComponent', () => {
  let component: HelmetCatalogusComponent;
  let fixture: ComponentFixture<HelmetCatalogusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelmetCatalogusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelmetCatalogusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
