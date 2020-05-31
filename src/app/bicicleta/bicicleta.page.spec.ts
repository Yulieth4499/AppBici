import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BicicletaPage } from './bicicleta.page';

describe('BicicletaPage', () => {
  let component: BicicletaPage;
  let fixture: ComponentFixture<BicicletaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BicicletaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BicicletaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
