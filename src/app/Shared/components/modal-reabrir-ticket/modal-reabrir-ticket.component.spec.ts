import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalReabrirTicketComponent } from './modal-reabrir-ticket.component';

describe('ModalReabrirTicketComponent', () => {
  let component: ModalReabrirTicketComponent;
  let fixture: ComponentFixture<ModalReabrirTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalReabrirTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalReabrirTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
