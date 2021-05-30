import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveToDatabaseComponent } from './save-to-database.component';

describe('SaveToDatabaseComponent', () => {
  let component: SaveToDatabaseComponent;
  let fixture: ComponentFixture<SaveToDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveToDatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveToDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
