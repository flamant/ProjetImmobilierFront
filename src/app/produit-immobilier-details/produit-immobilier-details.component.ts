import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitImmobilierDTO } from '../produit-immobilier-dto';
import { CommonService } from '../common.service';
import {} from 'googlemaps';
import { MatDialog } from '@angular/material';
import { Search } from '../search';
import {DossierSimulationDTO} from '../dossier-simulation-dto';
import {RequestService} from '../request.service';
import {PinelComponent} from './pinel/pinel.component';
import {ResultatLoiPinelDTO} from '../resultat-loi-pinel-dto';
import {LmnpReelComponent} from './lmnp-reel/lmnp-reel.component';
import {Pinel9Component} from './pinel9/pinel9.component';
import {Pinel12Component} from './pinel12/pinel12.component';

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
  public tabNumber = 2;
  public dossier: DossierSimulationDTO = new DossierSimulationDTO(null, null, null, null, null, null, null);
  public pinel: PinelComponent;
  public lmnp: LmnpReelComponent;
  componentRef1: any;
  componentRef2: any;
  componentRef3: any;
  componentRef4: any;
  componentRef5: any;
  mapSimulation: any;

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



  @ViewChild('option1', {static: false, read: ViewContainerRef }) entry1: ViewContainerRef;
  @ViewChild('option2', {static: false, read: ViewContainerRef }) entry2: ViewContainerRef;
  @ViewChild('option3', {static: false, read: ViewContainerRef }) entry3: ViewContainerRef;
  // tslint:disable-next-line: max-line-length  
  constructor(private changeDetector: ChangeDetectorRef, private resolver: ComponentFactoryResolver, private activatedRoute: ActivatedRoute, private commonService: CommonService, private requestService: RequestService) {
    this.geocoder = new google.maps.Geocoder();
  }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
   //this.annonce = new ProduitImmobilierDTO(1, 'Appartement', '0102030405', 'C’est idéalement situé au 27 quai de Grenelle que Flatlooker vous propose aujourd’hui ce trois pièces d’exception au 5ème étage', 1, 0, 1, 0, 1, 'A', 4, 2, 100, '101', 1215122400000, 1577029066, '27 quai de Grenelle', '75015', 'Paris', 102, 103, 104, 105, 106, 107, 108, 109, 110, 1000, 30, 20, 10, 1);
     this.mapSimulation = new Map();
     this.id = this.activatedRoute.snapshot.params.id;
     this.requestService.getDossierSimulation(this.id).subscribe((data: DossierSimulationDTO) => {
      this.dossier.produitImmobilierDTO = data.produitImmobilierDTO;
      this.dossier.resultatLoiPinel6DTO = data.resultatLoiPinel6DTO;
      this.dossier.resultatLoiPinel9DTO = data.resultatLoiPinel9DTO;
      this.dossier.resultatLoiPinel12DTO = data.resultatLoiPinel12DTO;
      this.dossier.resultatBouvardDTO = data.resultatBouvardDTO;
      this.dossier.resultatLmnpMicroDto = data.resultatLmnpMicroDto;
      this.dossier.resultatLmnpReelDto = data.resultatLmnpReelDto;
      this.mapSimulation.set('PINEL6', this.dossier.resultatLoiPinel6DTO);
      this.mapSimulation.set('PINEL9', this.dossier.resultatLoiPinel9DTO);
      this.mapSimulation.set('PINEL12', this.dossier.resultatLoiPinel12DTO);
      this.mapSimulation = new Map([...this.mapSimulation.entries()].sort((a, b) => (a[1].effortEpargne > b[1].effortEpargne) ? -1 : 1));
      this.createComponent();
      this.annonce = this.dossier.produitImmobilierDTO;
    });

     for (let i = 0; i < this.numberOfImages; i++) {
        this.images[i] = this.imagesText[i];
     }
     this.commonService.currentMessage.subscribe(message => this.search = message);
  }

  displayOrientation(annonce: { produitImmobilierDTO: { orientation: string; }; }) {
    let result = '';
   /* if (annonce.produitImmobilierDTO.orientation === 'N') {
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
    }*/
    return 'Sud Est';
  }

  ngAfterViewInit() {
  }

  displayMap() {
    this.computeTheMapBoxHeight();
    this.codeAddress(this.annonce);
  }

  createComponent() {
    this.entry1.clear();
    this.entry2.clear();
    this.entry3.clear();
    const array = Array.from(this.mapSimulation.keys());
    const factory1 = this.resolver.resolveComponentFactory(this.getComponentType(array[0] + ''));
    this.componentRef1 = this.entry1.createComponent(factory1);
    this.fillComponent(array[0] + '', this.componentRef1.instance);

    const factory2 = this.resolver.resolveComponentFactory(this.getComponentType(array[1] + ''));
    this.componentRef2 = this.entry2.createComponent(factory2);
    this.fillComponent(array[1] + '', this.componentRef2.instance);

    const factory3 = this.resolver.resolveComponentFactory(this.getComponentType(array[2] + ''));
    this.componentRef3 = this.entry3.createComponent(factory3);
    this.fillComponent(array[2] + '', this.componentRef3.instance);
  }

  getComponentType(type: string): any {
    if (type === 'PINEL6') {
      return PinelComponent;
    }
    if (type === 'PINEL9') {
      return Pinel9Component;
    }
    if (type === 'PINEL12') {
      return Pinel12Component;
    }
  }


  fillComponent(type: string, componentRef: any) {
    if (type === 'PINEL6') {
      this.fillComponentPinel(componentRef , this.dossier.resultatLoiPinel6DTO);
    }
    if (type === 'PINEL9') {
      this.fillComponentPinel(componentRef , this.dossier.resultatLoiPinel9DTO);
    }
    if (type === 'PINEL12') {
      this.fillComponentPinel(componentRef , this.dossier.resultatLoiPinel12DTO);
    }
  }

  fillComponentPinel(componentRef: any, resultatLoiPinelDTO: ResultatLoiPinelDTO) {
      componentRef.economyImpots = resultatLoiPinelDTO.economyImpots;
      componentRef.effortEpargne = resultatLoiPinelDTO.effortEpargne;
      componentRef.fraisAnnexe = resultatLoiPinelDTO.fraisAnnexe;
      componentRef.loyerMaximum = resultatLoiPinelDTO.loyerMaximum;
      componentRef.mensualiteCredit = resultatLoiPinelDTO.mensualiteCredit;
      componentRef.montantEmprunt = resultatLoiPinelDTO.montantEmprunt;
      componentRef.reductionImpots = resultatLoiPinelDTO.reductionImpots;
  }


  destroyComponent() {
   this.componentRef1.destroy();
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
      setTimeout(() => { this.displayMap(); }, 1000);
      }
    if (target.attr('id').includes('2')) {
      this.tabNumber = 2;
      this.changeDetector.detectChanges();
      this.createComponent();
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
  }
}
