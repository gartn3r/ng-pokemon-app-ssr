import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import { PokemonDetailsComponent } from './PokemonDetails.component';
import { beforeEach } from 'node:test';
describe('PokemonDetailsComponent', () => {

  let component: PokemonDetailsComponent;
  let fixture: ComponentFixture<PokemonDetailsComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({imports: [PokemonDetailsComponent]}).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeDefined();
  });
});