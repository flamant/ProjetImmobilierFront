import {Component, Input, OnInit} from '@angular/core';
import {DossierSimulationDTO} from '../../dossier-simulation-dto';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'pinel',
  templateUrl: './pinel.component.html',
  styleUrls: ['./pinel.component.scss']
})
export class PinelComponent implements OnInit {
  constructor() { }
  public static type = 'PINEL6';

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
