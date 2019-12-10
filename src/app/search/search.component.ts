import { Component, OnInit, HostListener } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MAT_RADIO_DEFAULT_OPTIONS, MAT_CHECKBOX_CLICK_ACTION } from '@angular/material';
import { Search } from '../search';

declare var $: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [
    {provide: MAT_RADIO_DEFAULT_OPTIONS, useValue: { color: 'accent' }},
    {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}
  ]
})
export class SearchComponent implements OnInit {


  public dialogFormGroup: FormGroup;
  public advancedResearch = false;
  public aim = 'L';
  public prestation = 'A';

    @HostListener('window:resize', ['$event'])
    onResize() {
      const browserWidth = document.body.offsetWidth;
      const left = (browserWidth - 450) / 2.;
      this.dialogRef.updatePosition({ top: '70px', left: (left + 'px')});
    }

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<SearchComponent>) {}

  ngOnInit() {
    this.dialogFormGroup = this.formBuilder.group({
      ville: ['', []],
      budget: ['', []],
      codePostal: ['', []],
      type: ['', []],
      budgetMin: ['', []],
      budgetMax: ['', []],
      surfaceMin: ['', []],
      surfaceMax: ['', []],
      nbrPieceMin: ['', []],
      nbrPieceMax: ['', []],
      nbrChambreMin: ['', []],
      nbrChambreMax: ['', []],
      zone: ['', []],
      dateMiseEnLigneMin: ['', []],
      dateMiseEnLigneMax: ['', []],
      dateConstructionMin: ['', []],
      dateConstructionMax: ['', []],
      parking: ['', []],
      ascenceur: ['', []],
      gardien: ['', []],
      cheminee: ['', []]
    });
    this.dialogFormGroup.setValidators([this.townOrPostalCodeMandatory, this.budgetMandatory]);
  }

  townOrPostalCodeMandatory(group: FormGroup): any {
    // tslint:disable-next-line: max-line-length
    if ((!group.get('ville').value || group.get('ville').value.length === 0) && (!group.get('codePostal').value || group.get('codePostal').value.length === 0)) {
      return { townOrPostalCodeMandatory : true };
    }
    return null;
  }

  budgetMandatory(group: FormGroup): any {
    // tslint:disable-next-line: max-line-length
    if ((!group.get('budget').value || group.get('budget').value.length === 0) && (!group.get('budgetMin').value || group.get('budgetMin').value.length === 0) && (!group.get('budgetMax').value || group.get('budgetMax').value.length === 0)) {
      return { budgetMandatory : true };
    }
    return null;
  }


  save() {
    const search = new Search();
    search.type = this.dialogFormGroup.get('type').value === null ? '' : this.dialogFormGroup.get('type').value;
    search.isParking = (this.dialogFormGroup.get('parking').value  === null || this.dialogFormGroup.get('parking').value === '') ? 0 : 1;
    search.isLift = (this.dialogFormGroup.get('ascenceur').value === null || this.dialogFormGroup.get('ascenceur').value === '') ? 0 : 1;
    search.isGardien = (this.dialogFormGroup.get('gardien').value === null || this.dialogFormGroup.get('gardien').value === '') ? 0 : 1;
    search.isCheminee = (this.dialogFormGroup.get('cheminee').value === null || this.dialogFormGroup.get('cheminee').value === '') ? 0 : 1;
    // tslint:disable-next-line: max-line-length
    search.nbrPieceMin = (this.dialogFormGroup.get('nbrPieceMin').value === null || this.dialogFormGroup.get('nbrPieceMin').value === '') ? 0 : this.dialogFormGroup.get('nbrPieceMin').value;
    // tslint:disable-next-line: max-line-length
    search.nbrPieceMax = (this.dialogFormGroup.get('nbrPieceMax').value === null || this.dialogFormGroup.get('nbrPieceMax').value === '') ? 0 : this.dialogFormGroup.get('nbrPieceMax').value;
    // tslint:disable-next-line: max-line-length
    search.nbrChambreMin = (this.dialogFormGroup.get('nbrChambreMin').value === null || this.dialogFormGroup.get('nbrChambreMin').value === '') ? 0 : this.dialogFormGroup.get('nbrChambreMin').value;
    // tslint:disable-next-line: max-line-length
    search.nbrChambreMax = (this.dialogFormGroup.get('nbrChambreMax').value === null || this.dialogFormGroup.get('nbrChambreMax').value === '') ? 0 : this.dialogFormGroup.get('nbrChambreMax').value;
    // tslint:disable-next-line: max-line-length
    search.dateMiseEnLigneMin = (this.dialogFormGroup.get('dateMiseEnLigneMin').value === null || this.dialogFormGroup.get('dateMiseEnLigneMin').value === '') ? 0 : (new Date(this.dialogFormGroup.get('dateMiseEnLigneMin').value)).getTime();
    // tslint:disable-next-line: max-line-length
    search.dateMiseEnLigneMax = (this.dialogFormGroup.get('dateMiseEnLigneMax').value === null || this.dialogFormGroup.get('dateMiseEnLigneMax').value === '') ? 0 : (new Date(this.dialogFormGroup.get('dateMiseEnLigneMax').value)).getTime();
    // tslint:disable-next-line: max-line-length
    search.dateConstructionMin = (this.dialogFormGroup.get('dateConstructionMin').value === null || this.dialogFormGroup.get('dateConstructionMin').value === '') ? 0 : (new Date(this.dialogFormGroup.get('dateConstructionMin').value)).getTime();
    // tslint:disable-next-line: max-line-length
    search.dateConstructionMax = (this.dialogFormGroup.get('dateConstructionMax').value === null || this.dialogFormGroup.get('dateConstructionMin').value === '') ? 0 : (new Date(this.dialogFormGroup.get('dateConstructionMax').value)).getTime();
    search.codePostal = this.dialogFormGroup.get('codePostal').value === null ? '' : this.dialogFormGroup.get('codePostal').value;
    search.zone = this.dialogFormGroup.get('zone').value === null ? '' : this.dialogFormGroup.get('zone').value;
    search.ville = this.dialogFormGroup.get('ville').value === null ? '' : this.dialogFormGroup.get('ville').value;
    // tslint:disable-next-line: max-line-length
    search.prix = (this.dialogFormGroup.get('budget').value === null || this.dialogFormGroup.get('nbrChambreMax').value === '') ? 0 : this.dialogFormGroup.get('budget').value;
    // tslint:disable-next-line: max-line-length
    search.prixMin = (this.dialogFormGroup.get('budgetMin').value === null || this.dialogFormGroup.get('budgetMin').value === '') ? 0 : this.dialogFormGroup.get('budgetMin').value;
    // tslint:disable-next-line: max-line-length
    search.prixMax = (this.dialogFormGroup.get('budgetMax').value === null || this.dialogFormGroup.get('budgetMax').value === '') ? 0 : this.dialogFormGroup.get('budgetMax').value;
    // tslint:disable-next-line: max-line-length
    search.surfaceMin = (this.dialogFormGroup.get('surfaceMin').value === null || this.dialogFormGroup.get('surfaceMin').value === '') ? 0 : this.dialogFormGroup.get('surfaceMin').value;
    // tslint:disable-next-line: max-line-length
    search.surfaceMax = (this.dialogFormGroup.get('surfaceMax').value === null || this.dialogFormGroup.get('surfaceMax').value === '') ? 0 : this.dialogFormGroup.get('surfaceMax').value;
    search.aim = this.prestation === 'A' ? this.aim : '0';
    search.prestation = this.prestation;
    search.page = 1;
    search.pageSize = 10;
    this.dialogRef.close(search);
  }

  close() {
    this.dialogRef.close(true);
  }

  addClassSelected(event: { target: { id: string; }; }) {
    $('#searchBuy').removeClass('selected');
    $('#searchRent').removeClass('selected');
    if (event.target.id === 'searchRent') {
      this.prestation = 'L';
    } else if (event.target.id === 'searchBuy') {
      this.prestation = 'A';
    }
    const target = $(event.target);
    target.toggleClass('selected');
  }
}

