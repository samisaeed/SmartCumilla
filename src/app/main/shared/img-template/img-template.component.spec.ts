import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgTemplateComponent } from './img-template.component';

describe('ImgTemplateComponent', () => {
  let component: ImgTemplateComponent;
  let fixture: ComponentFixture<ImgTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
