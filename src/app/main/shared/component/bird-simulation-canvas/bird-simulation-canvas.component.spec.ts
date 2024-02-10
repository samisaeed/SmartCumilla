import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdSimulationCanvasComponent } from './bird-simulation-canvas.component';

describe('BirdSimulationCanvasComponent', () => {
  let component: BirdSimulationCanvasComponent;
  let fixture: ComponentFixture<BirdSimulationCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdSimulationCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdSimulationCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
