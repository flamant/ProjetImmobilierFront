import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { SearchComponent } from 'src/app/search/search.component';
import { UserDialogComponent } from 'src/app/user-dialog/user-dialog.component';
import { Search } from 'src/app/search';
import { CommonService } from 'src/app/common.service';
import { Router } from '@angular/router';
import { ProduitImmobilierDTO } from 'src/app/produit-immobilier-dto';
// tslint:disable-next-line: max-line-length
import { CreateProduitImmobilierDialogComponent } from 'src/app/create-produit-immobilier-dialog/create-produit-immobilier-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private search: Search;

  private produitImmobilier: ProduitImmobilierDTO;

  constructor(private router: Router, private dialog: MatDialog, private commonService: CommonService) { }

  ngOnInit() {
  }

  openDialog(prestation: string) {
    const self = this;
    const browserWidth = document.body.offsetWidth;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.width = '450px';
    const left = (browserWidth - 450) / 2.;
    dialogConfig.position = {
      top: '70px',
      left: (left + 'px')
    };

    const dialogRef = this.dialog.open(SearchComponent, dialogConfig);
    dialogRef.componentInstance.prestation = prestation;
    dialogRef.afterClosed().subscribe( data => {this.search = data; self.gotToListProduitImmobilierViewAndPassData(this.search); });
  }

  createProduitImmobilierDialog() {
    const self = this;
    const browserWidth = document.body.offsetWidth;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.width = '470px';
    dialogConfig.maxWidth = '100vw';
    const left = (browserWidth - 450) / 2.;
    dialogConfig.position = {
      top: '70px',
      left: (left + 'px')
    };

    const dialogRef = this.dialog.open(CreateProduitImmobilierDialogComponent, dialogConfig);
    // tslint:disable-next-line: max-line-length
    dialogRef.afterClosed().subscribe( data => {this.produitImmobilier = data; self.gotToListProduitImmobilierViewAndPassData(this.produitImmobilier); });
  }

  gotToListProduitImmobilierViewAndPassData(data: any) {
    this.router.navigate(['/listproduitimmobilier']).then(() => {this.commonService.changeMessage(data); });
  }

  openUserDialog() {
    const browserWidth = document.body.offsetWidth;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.width = '470px';
    const left = (browserWidth - 470) / 2.;
    dialogConfig.position = {
      top: '70px',
      left: (left + 'px')
    };

    const dialogRef = this.dialog.open(UserDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe( () => {});
  }

}
