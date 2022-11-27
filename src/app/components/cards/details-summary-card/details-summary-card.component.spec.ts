import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSummaryCardComponent } from './details-summary-card.component';

describe('DetailsSummaryCardComponent', () => {
  let component: DetailsSummaryCardComponent;
  let fixture: ComponentFixture<DetailsSummaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsSummaryCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
