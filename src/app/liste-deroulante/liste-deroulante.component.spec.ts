import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDeroulanteComponent } from './liste-deroulante.component';

describe('ListeDeroulanteComponent', () => {
  let component: ListeDeroulanteComponent;
  let fixture: ComponentFixture<ListeDeroulanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDeroulanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDeroulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
