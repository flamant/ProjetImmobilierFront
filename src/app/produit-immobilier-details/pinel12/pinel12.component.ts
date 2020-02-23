import {Component, Input, OnInit} from '@angular/core';
import {DossierSimulationDTO} from '../../dossier-simulation-dto';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'pinel12',
  templateUrl: './pinel12.component.html',
  styleUrls: ['./pinel12.component.scss']
})
export class Pinel12Component implements OnInit {
  constructor() { }
  public static type = 'PINEL12';

  public realEstateFileFlag = true;
  @Input() dossier: DossierSimulationDTO;
  @Input() loyerMaximum: number;
  @Input() reductionImpots: number;
  @Input() montantEmprunt: number;
  @Input() economyImpots: number;
  @Input() mensualiteCredit: number;
  @Input() fraisAnnexe: number;
  @Input() effortEpargne: number;

  ngOnInit() {
    this.realEstateFileFlag = false;
  }

}
