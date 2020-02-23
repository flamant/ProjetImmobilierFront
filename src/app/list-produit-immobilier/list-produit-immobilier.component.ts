import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {ProduitImmobilierDTO} from './../produit-immobilier-dto';
import { Router, NavigationExtras } from '@angular/router';
import {} from 'googlemaps';
import { Search } from '../search';
import { RequestService } from '../request.service';
import { CommonService } from '../common.service';
import { HttpErrorResponse } from '@angular/common/http';


declare var $: any;

@Component({
  selector: 'app-list-produit-immobilier',
  templateUrl: './list-produit-immobilier.component.html',
  styleUrls: ['./list-produit-immobilier.component.scss']
})
export class ListProduitImmobilierComponent implements OnInit, AfterViewInit {

  public annonces: ProduitImmobilierDTO[] = [];
  public pageSize = 5;
  public page = 1;
  public collectionSize: number;

  @ViewChild('map', {static: false}) mapElement0: any;
  private maps: google.maps.Map[] = new Array(this.pageSize);
  private geocoder: google.maps.Geocoder;
  private visibility: boolean[] = [];
  private lat: number;
  private lng: number;

  private search: Search;

  private postalCode: string;

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private requestService: RequestService, private commonService: CommonService) {}

  ngOnInit() {
    this.geocoder = new google.maps.Geocoder();
    // tslint:disable-next-line: max-line-length
    /*const annonce1 = new ProduitImmobilierDTO(1, 'Appartement', '0102030405', 'C’est idéalement situé au 27 quai de Grenelle que Flatlooker vous propose aujourd’hui ce trois pièces d’exception au 5ème étage', 1, 0, 1, 0, 1, 'A', 4, 2, 100, '101', 1215122400000, 1577029066, '27 quai de Grenelle', '75015', 'Paris', 102, 103, 104, 105, 106, 107, 108, 109, 110, 1000, 30, 20, 10, 9);
    // tslint:disable-next-line: max-line-length
    const annonce2 = new ProduitImmobilierDTO(3, 'Maison', '0302030405', 'IAD France - Thierry CARTIGNY vous propose: Superbe appartement situé au 2 étage d’une belle copropriété de 5 lots, séjour, salon, coin cuisine, chambre, salle de bain, le tout sur 40 m² environ (loi carrez), surface au sol 101 m² environ, 2 places de parking. La présente annonce immobilière vise 1 lot principal situé dans une copropriété formant 5 lots au total ne faisant l’objet d’aucune procédure en cours et d’un montant de charges d’environ 50 euros par mois (soit 600 euros annuel) déclaré par le vendeur.Honoraires d’agence à la charge du vendeur. Information d’affichage énergétique sur ce bien: DPE VI indice 0 et GES VI indice 0. La présente annonce immobilière a été rédigée sous la responsabilité éditoriale de M. Thierry CARTIGNY (ID 34376), Agent Commercial mandataire en immobilier immatriculé au Registre Spécial des Agents Commerciaux (RSAC) du Tribunal de Commerce de Valenciennes sous le numéro 844424465.', 3, 0, 1, 0, 1, 'C', 6, 3, 300, '301', 1215295200000, 1577029066, '1 rue du Maréchal Joffre.', '59530', 'Le Quesnoy', 302, 303, 304, 305, 306, 307, 308, 309, 310, 800, 27, 17, 9, 9);
    // tslint:disable-next-line: max-line-length
    const annonce3 = new ProduitImmobilierDTO(4,  'Appartement', '0402030405', 'Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cr', 4, 1, 0, 0, 1, 'D', 4, 2, 400, '401', 1215381600000, 1577029066, '84, Boulevard Maxime Gorki', '94800', 'Villejuif', 402, 403, 404, 405, 406, 407, 408, 409, 410, 700, 22, 13, 7, 9);
    // tslint:disable-next-line: max-line-length
    const annonce4 = new ProduitImmobilierDTO(5, 'Maison', '0502030405', 'EN EXCLUSIVITÉ à ORSINVAL (59530): Vous souhaitez faire un placement dans un secteur très prisé du Valenciennois, acquérir un bien valorisant votre patrimoine, dans une résidence de standing sécurisée ? Ce type 2 en rez-de-jardin est idéal, avec une place parking privative sans oublier 40 m² de jardin clos sans vis à vis. Un locataire sérieux et fidèle vous garantit un loyer annuel de 4830 euros. 59000/59300/59990 Nombre de lots de la copropriété: 114, Montant moyen annuel de la quote-part de charges (budget prévisionnel): 624 euros soit 52 euros par mois. Les honoraires sont à la charge du vendeur. Réseau Immobilier CAPIFRANCE - Votre agent commercial Delphine VANACKER Plus d’informations sur le site de CAPIFRANCE', 5, 0, 1, 0, 1, 'E', 5, 3, 500, '501', 1215468000000, 1577029066, '17 rue du petit Neuilly', '59530', 'ORSINVAL', 502, 503, 504, 505, 506, 507, 508, 509, 510, 800, 24, 16, 8, 9);
    // tslint:disable-next-line: max-line-length
    const annonce5 = new ProduitImmobilierDTO(6, 'Maison', '0602030405', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cr', 6, 1, 0, 0, 1, 'F', 3, 1, 600, '601', 1215554400000, 1577029066, '6, boulevard Dubreuil', '91400', 'Orsay', 602, 603, 604, 605, 606, 607, 608, 609, 610, 750, 29, 18, 9, 9);
    // tslint:disable-next-line: max-line-length
    const annonce6 = new ProduitImmobilierDTO(7, 'Appartement', '0702030405', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus', 7, 0, 1, 0, 1, 'G', 4, 2, 700, '701', 1215640800000, 1577029066, '20, rue du Docteur Pinel', '94800', 'Villejuif', 702, 703, 704, 705, 706, 707, 708, 709, 710, 650, 27, 16, 9, 9);
    // tslint:disable-next-line: max-line-length
    const annonce7 = new ProduitImmobilierDTO(8, 'Maison', '0802030405', '', 8, 1, 0, 0, 1, 'H', 3, 1, 800, '801', 1215727200000, 1577029066, '7 rue du stade', '91400', 'Saclay', 802, 803, 804, 805, 806, 807, 808, 809, 810, 650, 30, 20, 10, 9);
    // tslint:disable-next-line: max-line-length
    const annonce8 = new ProduitImmobilierDTO(9, 'Appartement', '0902030405', '', 9, 0, 1, 0, 1, 'I', 4, 1, 900, '901', 1215813600000, 1577029066, '102 Rue Jean Jaurès', '94800', 'Villejuif', 902, 903, 904, 905, 906, 907, 908, 909, 910, 500, 24, 14, 7, 9);
    // tslint:disable-next-line: max-line-length
    const annonce9 = new ProduitImmobilierDTO(10, 'Appartement', '1002030405', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus', 10, 1, 0, 0, 1, 'J', 5, 3, 1000, '1001', 1215900000000, 1577029066, '38 Rue Georges Lebigot', '94800', 'Villejuif', 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 700, 28, 17, 9, 9);
    this.collectionSize = this.annonces.push(annonce1, annonce2, annonce3, annonce4, annonce5, annonce6, annonce7, annonce8, annonce9);*/
    for (let i = 0; i < this.pageSize; i++) {
      this.visibility.push(false);
    }
    this.commonService.currentMessage.subscribe(search => {this.search = search; this.loadSearch(); });
    this.loadData();
  }

  preloadData() {
    Object.keys(this.search).forEach(key => key = null);
    this.getLocation();
  }

  mapVisibility(i: number) {
    if (this.visibility[i]) {
      return 'visible';
    } else {
      return 'hidden';
    }
  }

  codeAddress(event: { stopPropagation: () => void; }, annonce: { adresse: string; codePostal: string; ville: string; }, i: string) {
    event.stopPropagation();
    this.computeTheMapBoxHeight();
    const self = this;
    if (!this.visibility[i]) {
      this.visibility[i] = true;
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

          const mapi = new google.maps.Map(document.getElementById(('map' + i)), mapProperties);
          self.maps[i] = mapi;
          const marker = new google.maps.Marker({
            position: myLatLng,
            map: mapi,
            title: 'Adress of the property'
          });
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    } else {
      this.visibility[i] = false;
    }
  }



  ngAfterViewInit() {
    this.computeTheMapBoxHeight();
  }

  computeTheMapBoxHeight() {
    for (let i = 0; i < this.pageSize; i++) {
      const reference = $('#matCard' + i).outerHeight();
      $('#mapBox' + i).css({height: reference + 'px'});
    }
  }

  loadPage() {
    // this.page = page;
    for (let i = 0; i < this.pageSize; i++) {
      this.visibility[i] = false;
      this.mapVisibility(i);
    }
    // this.computeTheMapBoxHeight();
  }

  goToDetailsView(annonce: ProduitImmobilierDTO) {
      const navigationExtras: NavigationExtras = {
          queryParams: annonce
      };
      this.router.navigate(['/details/' + annonce.id], navigationExtras);
  }

  generateSpaceString(annonce: ProduitImmobilierDTO) {
      let result = ' ';
      let count = 128;
      if (!(annonce.description === null || annonce.description === undefined)) {
        count = count - annonce.description.length - 4;
      }
      for (let i = 0; i < count; i++) {
        result += ' ';
      }
      if (count !== 128) {
        result += annonce.description.substring(0, 127) + '...' + result;
      }
      return result;
  }

  loadSearch() {
    console.log('LOAD SEARCH');
    //this.requestService.getListProduitImmobilierDTO(this.search).subscribe( result => this.annonces = result);
  }



  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        if (position) {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          const  latlng = new google.maps.LatLng(this.lat, this.lng);
          this.geocoder.geocode({ location: latlng }, (
            (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
            if (status === google.maps.GeocoderStatus.OK) {
                    if (results[0]) {
                        console.log('results[0].address_components=');
                        console.log(results[0].address_components);
                        this.postalCode = results[0].address_components[6].long_name;
                        this.search.codePostal = this.postalCode;
                        this.loadData();
                    }
            }
          }));
        }
      },
        (error: PositionError) => console.log(error));
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  loadData() {
    console.log('LOADDATA is called');
    Object.keys(this.search).forEach(key => key = null);
    this.search.page = 1;
    this.search.pageSize = 5;
    this.requestService.getListProduitImmobilierDTO(this.search).subscribe(
      articles => {this.annonces = articles;
                   this.collectionSize = articles[0].collectionSize; },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }
}
