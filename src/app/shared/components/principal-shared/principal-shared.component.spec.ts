import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalSharedComponent } from './principal-shared.component';

describe('PrincipalSharedComponent', () => {
  let component: PrincipalSharedComponent;
  let fixture: ComponentFixture<PrincipalSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalSharedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrincipalSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
