import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColorSchemeToggleComponent } from './color-scheme-toggle.component';

describe('ColorSchemeToggleComponent', () => {
  let component: ColorSchemeToggleComponent;
  let fixture: ComponentFixture<ColorSchemeToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorSchemeToggleComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColorSchemeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
