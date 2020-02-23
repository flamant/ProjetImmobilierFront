import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MAT_RADIO_DEFAULT_OPTIONS, MAT_CHECKBOX_CLICK_ACTION, MatSelect } from '@angular/material';
import { ProduitImmobilierDTO } from '../produit-immobilier-dto';
import { RequestService } from '../request.service';
import { HttpErrorResponse } from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-create-produit-immobilier-dialog',
  templateUrl: './create-produit-immobilier-dialog.component.html',
  styleUrls: ['./create-produit-immobilier-dialog.component.scss'],
  providers: [
    {provide: MAT_RADIO_DEFAULT_OPTIONS, useValue: { color: 'accent' }},
    {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}
  ]
})
export class CreateProduitImmobilierDialogComponent implements OnInit {


  public dialogFormGroup: FormGroup;
  public aim = 'V';
  public files: any = [];
  public panel = 'obligatoire';
  public produitImmobilierDTO: ProduitImmobilierDTO;

  @ViewChild('mySelect', {static: false}) mySelect: MatSelect;


    @HostListener('window:resize', ['$event'])
    onResize() {
      const browserWidth = document.body.offsetWidth;
      if (browserWidth < 470) {
        const left = 0;
        this.dialogRef.updatePosition({ top: '70px', left: (left + 'px')});
        this.dialogRef.updateSize( '100vw', '100vw');
      } else {
        const left = (browserWidth - 450) / 2.;
        this.dialogRef.updatePosition({ top: '70px', left: (left + 'px')});
        this.dialogRef.updateSize( '470px', '100vw');
      }
    }

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ProduitImmobilierDTO>,
    private requestService: RequestService) {}

  ngOnInit() {
    this.dialogFormGroup = this.formBuilder.group({
      type: ['', Validators.required],
      surfaceHabitable: ['', Validators.required],
      surfaceLoiQuarez: ['', Validators.required],
      nbrPiece: ['', Validators.required],
      nbrChambre: ['', Validators.required],
      nbrSalleDeBain: ['', Validators.required],
      nbrSalleDeDouche: ['', Validators.required],
      nbrToiletteSepare: [''],
      nbrToiletteNonSepare: [''],
      prix: [''],
      loyerMaximum: [''],
      adresse: ['', Validators.required],
      codePostal: ['', Validators.required],
      ville: ['', Validators.required],
      telephone: ['', Validators.required],
      etage: [''],
      nbrEtage: [''],
      chargesCoprop: ['', Validators.required],
      taxeFonciaire: [''],
      dateConstruction: [''],
      dateMiseEnLigne: ['', Validators.required],
      isParking: [''],
      isBox: [''],
      isCave: [''],
      isBalcon: [''],
      isTerasse: [''],
      isLoggia: [''],
      isSurfaceAnnexe: [''],
      isDuplex: [''],
      isTriplex: [''],
      isLift: [''],
      isGardien: [''],
      isCheminee: [''],
      isInterphone: [''],
      isDigicode: [''],
      dpe: [''],
      nbrLots: [''],
      surfaceBalcon: [''],
      surfaceTerrasse: [''],
      surfaceCave: [''],
      surfaceLoggia: [''],
      autreSurfaceAnnexe: [''],
      zone: [''],
      orientation: ['', Validators.required],
      description: ['']
    });
    this.setValidatorBasedOnTypeValue();
    this.dialogFormGroup.controls.dateMiseEnLigne.setValue(new Date());
    setTimeout(() => {
            this.mySelect.focus();
          }, 1000);
  }

  ngAfterViewInit() {

  }


  setValidatorBasedOnTypeValue() {
    this.dialogFormGroup.get('type').valueChanges.subscribe( type => {
      if (type === 'Appartement') {
        this.dialogFormGroup.get('etage').setValidators([Validators.required]);
      }
      if (type === 'Maison') {
        this.dialogFormGroup.get('nbrEtage').setValidators([Validators.required]);
      }
    });

  }

  aimChanged() {
    if (this.aim === 'V') {
      this.dialogFormGroup.get('prix').setValidators([Validators.required]);
      this.dialogFormGroup.get('loyerMaximum').setValidators([Validators.required]);
    }
    if (this.aim === 'L') {
      this.dialogFormGroup.get('loyerMaximum').setValidators([Validators.required]);
    }
  }



  save() {
    const id = 0;
    const type = this.dialogFormGroup.get(['type']).value;
    const telephone = this.dialogFormGroup.get(['telephone']).value;
    const description = this.dialogFormGroup.get(['description']).value;
    const nbrLots = this.dialogFormGroup.get(['nbrLots']) ? this.dialogFormGroup.get(['nbrLots']).value : -1;
    const isParking = this.dialogFormGroup.get(['isParking']).value ? 1 : 0;
    const isBox = this.dialogFormGroup.get(['isBox']).value ? 1 : 0;
    const isCave = this.dialogFormGroup.get(['isCave']).value ? 1 : 0;
    const isBalcon = this.dialogFormGroup.get(['isBalcon']).value ? 1 : 0;
    const isTerasse = this.dialogFormGroup.get(['isTerasse']).value ? 1 : 0;
    const isLoggia = this.dialogFormGroup.get(['isLoggia']).value ? 1 : 0;
    const isSurfaceAnnexe = this.dialogFormGroup.get(['isSurfaceAnnexe']).value ? 1 : 0;
    const isDuplex = this.dialogFormGroup.get(['isDuplex']).value ? 1 : 0;
    const isTriplex = this.dialogFormGroup.get(['isTriplex']).value ? 1 : 0;
    const isLift = this.dialogFormGroup.get(['isLift']).value ? 1 : 0;
    const isGardien = this.dialogFormGroup.get(['isGardien']).value ? 1 : 0;
    const isCheminee = this.dialogFormGroup.get(['isCheminee']).value ? 1 : 0;
    const isInterphone = this.dialogFormGroup.get(['isInterphone']).value ? 1 : 0;
    const isDigicode = this.dialogFormGroup.get(['isDigicode']).value ? 1 : 0;
    const orientation = this.dialogFormGroup.get(['orientation']).value;
    const dpe = this.dialogFormGroup.get(['dpe']).value;
    const etage = (this.dialogFormGroup.get(['type']).value === 'Appartement') ? this.dialogFormGroup.get(['etage']).value : -1;
    const nbrEtage = this.dialogFormGroup.get(['nbrEtage']) ? this.dialogFormGroup.get(['nbrEtage']).value : -1;
    const nbrPiece = this.dialogFormGroup.get(['nbrPiece']).value;
    const nbrChambre = this.dialogFormGroup.get(['nbrChambre']).value;
    const nbrSalleDeBain = this.dialogFormGroup.get(['nbrSalleDeBain']).value;
    const nbrSalleDeDouche = this.dialogFormGroup.get(['nbrSalleDeDouche']).value;
    const nbrToiletteSepare = this.dialogFormGroup.get(['nbrToiletteSepare']) ? this.dialogFormGroup.get(['nbrToiletteSepare']).value : -1;
    // tslint:disable-next-line: max-line-length
    const nbrToiletteNonSepare = this.dialogFormGroup.get(['nbrToiletteNonSepare']) ? this.dialogFormGroup.get(['nbrToiletteNonSepare']).value : -1;
    const chargesCoprop = this.dialogFormGroup.get(['chargesCoprop']).value;
    const taxeFonciaire = this.dialogFormGroup.get(['taxeFonciaire']) ? this.dialogFormGroup.get(['taxeFonciaire']).value : -1;
    // tslint:disable-next-line: max-line-length
    const dateConstruction = this.dialogFormGroup.get(['dateConstruction']).value ? this.dialogFormGroup.get(['dateConstruction']).value.getTime() : 0;
    const dateMiseEnLigne = this.dialogFormGroup.get(['dateMiseEnLigne']).value.getTime();
    const adresse = this.dialogFormGroup.get(['adresse']).value;
    const codePostal = this.dialogFormGroup.get(['codePostal']).value;
    const ville = this.dialogFormGroup.get(['ville']).value;
    const zone = this.dialogFormGroup.get(['zone']).value;
    const prix = this.dialogFormGroup.get(['prix']).value;
    const surfaceHabitable = this.dialogFormGroup.get(['surfaceHabitable']).value;
    const surfaceLoiQuarez = this.dialogFormGroup.get(['surfaceLoiQuarez']).value;
    const surfaceBalcon = this.dialogFormGroup.get(['surfaceBalcon']) ? this.dialogFormGroup.get(['surfaceBalcon']).value : -1;
    const surfaceTerrasse = this.dialogFormGroup.get(['surfaceTerrasse']) ? this.dialogFormGroup.get(['surfaceTerrasse']).value : -1;
    const surfaceCave = this.dialogFormGroup.get(['surfaceCave']) ? this.dialogFormGroup.get(['surfaceCave']).value : -1;
    const surfaceLoggia = this.dialogFormGroup.get(['surfaceLoggia']) ? this.dialogFormGroup.get(['surfaceLoggia']).value : -1;
    // tslint:disable-next-line: max-line-length
    const autreSurfaceAnnexe = this.dialogFormGroup.get(['autreSurfaceAnnexe']) ? this.dialogFormGroup.get(['autreSurfaceAnnexe']).value : -1;
    const loyerMaximum = this.dialogFormGroup.get(['loyerMaximum']).value;
    const venteLocation = this.aim;
    const collectionSize = 0;
    // tslint:disable-next-line: max-line-length
    const produitImmobilier = new ProduitImmobilierDTO(id, type, telephone, description, nbrLots, isParking, isBox, isCave, isBalcon, isTerasse, isLoggia, isSurfaceAnnexe, isDuplex, isTriplex, isLift, isGardien, isCheminee, isInterphone, isDigicode, orientation, dpe, etage, nbrEtage, nbrPiece, nbrChambre, nbrSalleDeBain, nbrSalleDeDouche, nbrToiletteSepare, nbrToiletteNonSepare, chargesCoprop, taxeFonciaire, dateConstruction, dateMiseEnLigne, adresse, codePostal, ville, zone, prix, surfaceHabitable, surfaceLoiQuarez, surfaceBalcon, surfaceTerrasse, surfaceCave, surfaceLoggia, autreSurfaceAnnexe, loyerMaximum, venteLocation, collectionSize);
    this.requestService.createProduitImmobilier(produitImmobilier).subscribe(
      produitImmobilierDto => {this.produitImmobilierDTO = produitImmobilierDto;
                               const formData: FormData = new FormData();
                               // tslint:disable-next-line: prefer-for-of
                               for (let i = 0; i < this.files.length; i++) {
                                  formData.append('document', this.files[i]);
                               }
                               formData.append('id', this.produitImmobilierDTO.id + '');
                               this.requestService.uploadFiles(formData).subscribe(
                                        resp => {
                                          console.log(resp.body);
                                          this.dialogRef.close(produitImmobilier);
                                        },
                                        err => {
                                          console.log(err);
                                        }
                                      );
                                },
                                (err: HttpErrorResponse) => {
                                  console.log(err);
                                }
    );
  }

  close() {
    this.dialogRef.close(true);
  }



  uploadFile(events: any) {
    for (const event of events) {
      this.files.push(event);
    }
  }
  deleteAttachment(index: any) {
    this.files.splice(index, 1);
  }


}


