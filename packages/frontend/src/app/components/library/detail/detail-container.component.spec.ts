import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailContainerComponent } from './detail-container.component';

describe('DetailContainerComponent', () => {
  let component: DetailContainerComponent;
  let fixture: ComponentFixture<DetailContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
