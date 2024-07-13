import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagLinksComponent } from './pag-links.component';

describe('PagLinksComponent', () => {
  let component: PagLinksComponent;
  let fixture: ComponentFixture<PagLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
