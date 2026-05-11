import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Preferides } from './preferides';

describe('Preferides', () => {
  let component: Preferides;
  let fixture: ComponentFixture<Preferides>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Preferides]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Preferides);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
