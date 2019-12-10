import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitImmobilierDTO } from '../produit-immobilier-dto';
import { CommonService } from '../common.service';
import {} from 'googlemaps';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { SearchComponent } from '../search/search.component';
import { Search } from '../search';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

declare var $: any;

@Component({
  selector: 'app-produit-immobilier-details',
  templateUrl: './produit-immobilier-details.component.html',
  styleUrls: ['./produit-immobilier-details.component.scss']
})
export class ProduitImmobilierDetailsComponent implements OnInit, AfterViewInit {

  public annonce: ProduitImmobilierDTO;
  public id: number;
  public moreInfo = false;
  public geocoder: google.maps.Geocoder;
  public map: google.maps.Map = null;
  public marker: google.maps.Marker;
  public search: Search;
  public tabNumber = 1;
  public realEstateFileNumber = 4;
  public realEstateFileFlag: boolean[] = [];
  public realEstateFile = [
    {
      type: 'Pinel',
      years: 12,
      price: 1138,
      // tslint:disable-next-line: max-line-length
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper ',
      monthlyTaxReduction: 145.95,
      reductionImports: 0,
      maximumMonthlyRentPrice: 745.95,
      estimatedMonthlyCreditRate: 1066.53,
      additionalMonthlyCosts: 186
    },
    {
      type: 'Historical Monuments',
      years: 0,
      price: 1208,
      // tslint:disable-next-line: max-line-length
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper ',
      monthlyTaxReduction: 110.50,
      reductionImports: 10,
      maximumMonthlyRentPrice: 800,
      estimatedMonthlyCreditRate: 1200.80,
      additionalMonthlyCosts: 250
    },
        {
      type: 'Pinel',
      years: 9,
      price: 2566,
      // tslint:disable-next-line: max-line-length
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper ',
      monthlyTaxReduction: 280.70,
      reductionImports: 0,
      maximumMonthlyRentPrice: 1200.40,
      estimatedMonthlyCreditRate: 2160.50,
      additionalMonthlyCosts: 400
    },
    {
      type: 'Dismemberment',
      years: 0,
      price: 2589,
      // tslint:disable-next-line: max-line-length
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper ',
      monthlyTaxReduction: 310.30,
      reductionImports: 20,
      maximumMonthlyRentPrice: 870.60,
      estimatedMonthlyCreditRate: 2240.80,
      additionalMonthlyCosts: 430
    }
  ];

  public slides = [
    {
      url: '../../assets/image/image1_1.jpg'
    },
    {
      url: '../../assets/image/image1_2.jpg'
    },
    {
      url: '../../assets/image/image1_3.jpg'
    },
    {
      url: '../../assets/image/image1_4.jpg'
    },
    {
      url: '../../assets/image/image1_5.jpg'
    },
    {
      url: '../../assets/image/image1_6.jpg'
    },
    {
      url: '../../assets/image/image1_7.jpg'
    },
    {
      url: '../../assets/image/image1_8.jpg'
    }
  ];

  public numberOfImages = 8;
  public images = [];
  public imagesText = [
    {
      orderLo: 'first',
      orderUp: 'First',
      comment: 'first comment'
    },
    {
      orderLo: 'second',
      orderUp: 'Second',
      comment: 'second comment'
    },
    {
      orderLo: 'third',
      orderUp: 'Third',
      comment: 'third comment'
    },
    {
      orderLo: 'fourth',
      orderUp: 'Fourth',
      comment: 'fourth comment'
    },
    {
      orderLo: 'fifth',
      orderUp: 'Fifth',
      comment: 'fifth comment'
    },
    {
      orderLo: 'sixth',
      orderUp: 'Sixth',
      comment: 'sixth comment'
    },
    {
      orderLo: 'seventh',
      orderUp: 'Seventh',
      comment: 'seventh comment'
    },
    {
      orderLo: 'eighth',
      orderUp: 'Eighth',
      comment: 'eighth comment'
    },
    {
      orderLo: 'ninth',
      orderUp: 'Ninth',
      comment: 'ninth comment'
    },
    {
      orderLo: 'tenth',
      orderUp: 'Tenth',
      comment: 'tenth comment'
    }
  ];

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private commonService: CommonService, private dialog: MatDialog) {
    this.geocoder = new google.maps.Geocoder();
  }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.annonce = new ProduitImmobilierDTO(1, 'Appartement', '0102030405', 'C’est idéalement situé au 27 quai de Grenelle que Flatlooker vous propose aujourd’hui ce trois pièces d’exception au 5ème étage', 1, 0, 1, 'A', 4, 2, 100, '101', 1215122400000, '27 quai de Grenelle', '75015', 'Paris', 102, 103, 104, 105, 106, 107, 108, 109, 110, 1000, 30, 20, 10, 1);
    this.activatedRoute.queryParams.subscribe(params => {
        console.log(params);
    });
    for (let i = 0; i < this.numberOfImages; i++) {
        this.images[i] = this.imagesText[i];
    }
    for (let i = 0; i < this.realEstateFileNumber; i++) {
      this.realEstateFileFlag.push(false);
    }
    this.commonService.currentMessage.subscribe(message => this.search = message);
  }

  displayOrientation(annonce: { produitImmobilierDTO: { orientation: string; }; }) {
    let result = '';
    if (annonce.produitImmobilierDTO.orientation === 'N') {
        result = 'Nord';
    }
    if (annonce.produitImmobilierDTO.orientation === 'O') {
        result = 'Ouest';
    }
    if (annonce.produitImmobilierDTO.orientation === 'E') {
        result = 'Est';
    }
    if (annonce.produitImmobilierDTO.orientation === 'S') {
        result = 'Sud';
    }
    if (annonce.produitImmobilierDTO.orientation === 'NO') {
        result = 'Nord Ouest';
    }
    if (annonce.produitImmobilierDTO.orientation === 'NE') {
        result = 'Nord Est';
    }
    if (annonce.produitImmobilierDTO.orientation === 'SO') {
        result = 'Sud Ouest';
    }
    if (annonce.produitImmobilierDTO.orientation === 'SE') {
        result = 'Sud Est';
    }
    return result;
  }

  ngAfterViewInit() {
    this.displayMap();
  }

  displayMap() {
    this.computeTheMapBoxHeight();
    this.codeAddress(this.annonce);
  }

  computeTheMapBoxHeight() {
    const reference = $('#mapBox').width();
    $('#mapBox').css({height: reference + 'px'});
  }

  codeAddress(annonce: ProduitImmobilierDTO) {
    const self = this;
    // tslint:disable-next-line: only-arrow-functions
    this.geocoder.geocode( { address: annonce.adresse + ', ' + annonce.codePostal + ' ' + annonce.ville}, function(results, status) {
      if (status === 'OK') {
        const latitude = results[0].geometry.location.lat();
        const longitude = results[0].geometry.location.lng();
        const mapProperties = {
          center: new google.maps.LatLng(latitude, longitude),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        const myLatLng = {lat: latitude, lng: longitude};
        const mapi = new google.maps.Map(document.getElementById('map'), mapProperties);
        self.map = mapi;
        self.marker = new google.maps.Marker({
          position: myLatLng,
          map: mapi,
          title: 'Adress of the property'
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  applyClickCss(event: { target: any; }) {
    $('#menuHorizon1').removeClass('expanded');
    $('#menuHorizon2').removeClass('expanded');
    $('#menuHorizon3').removeClass('expanded');
    $('#menuHorizon4').removeClass('expanded');
    $('#menuHorizon5').removeClass('expanded');

    $('#menuVertical1').removeClass('expanded');
    $('#menuVertical2').removeClass('expanded');
    $('#menuVertical3').removeClass('expanded');
    $('#menuVertical4').removeClass('expanded');
    $('#menuVertical5').removeClass('expanded');

    const target = $(event.target);
    if (target.attr('id').includes('1')) {
      this.tabNumber = 1;
    }
    if (target.attr('id').includes('2')) {
      this.tabNumber = 2;
    }
    if (target.attr('id').includes('3')) {
      this.tabNumber = 3;
    }
    if (target.attr('id').includes('4')) {
      this.tabNumber = 4;
    }
    if (target.attr('id').includes('5')) {
      this.tabNumber = 5;
    }
    target.toggleClass('expanded');
    setTimeout(() => { this.displayMap(); }, 1000);
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
    dialogRef.afterClosed().subscribe( data => {this.search = data; self.gotToListProduitImmobilierViewAndPassData(); });
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

  gotToListProduitImmobilierViewAndPassData() {
    this.router.navigate(['/listproduitimmobilier']).then(() => {this.commonService.changeMessage(this.search); });
  }
}
