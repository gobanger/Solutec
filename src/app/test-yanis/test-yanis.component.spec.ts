import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestYanisComponent } from './test-yanis.component';

describe('TestYanisComponent', () => {
  let component: TestYanisComponent;
  let fixture: ComponentFixture<TestYanisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestYanisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestYanisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
