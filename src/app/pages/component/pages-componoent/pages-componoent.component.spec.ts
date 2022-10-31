import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesComponoentComponent } from './pages-componoent.component';

describe('PagesComponoentComponent', () => {
  let component: PagesComponoentComponent;
  let fixture: ComponentFixture<PagesComponoentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesComponoentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesComponoentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
