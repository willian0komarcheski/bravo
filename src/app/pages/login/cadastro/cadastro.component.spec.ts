import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrologinComponent } from './cadastro.component';

describe('CadastrologinComponent', () => {
  let component: CadastrologinComponent;
  let fixture: ComponentFixture<CadastrologinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrologinComponent]
    });
    fixture = TestBed.createComponent(CadastrologinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
