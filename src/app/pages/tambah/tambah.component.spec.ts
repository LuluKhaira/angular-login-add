import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahComponent } from './tambah.component';

describe('TambahComponent', () => {
  let component: TambahComponent;
  let fixture: ComponentFixture<TambahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TambahComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TambahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
