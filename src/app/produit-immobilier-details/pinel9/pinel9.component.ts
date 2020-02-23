import {Component, Input, OnInit} from '@angular/core';
import {DossierSimulationDTO} from '../../dossier-simulation-dto';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'pinel9',
  templateUrl: './pinel9.component.html',
  styleUrls: ['./pinel9.component.scss']
})
export class Pinel9Component implements OnInit {
  constructor() { }
  public static  type = 'PINEL9';

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
