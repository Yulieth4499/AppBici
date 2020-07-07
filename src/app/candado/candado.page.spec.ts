import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CandadoPage } from './candado.page';

describe('CandadoPage', () => {
  let component: CandadoPage;
  let fixture: ComponentFixture<CandadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CandadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
