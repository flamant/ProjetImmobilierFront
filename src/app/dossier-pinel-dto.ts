import {ProduitImmobilierDTO} from './produit-immobilier-dto';
import {ResultatLoiPinelDTO} from './resultat-loi-pinel-dto';

export class DossierPinelDTO {

    // tslint:disable-next-line: ban-types
    public static fromJson(json: Object): DossierPinelDTO {
        return new DossierPinelDTO(
            json['produitImmobilierDTO'],
            json['resultatLoiPinelDTO']
        );
    }
    constructor(
        public produitImmobilierDTO: ProduitImmobilierDTO,
        public resultatLoiPinelDTO: ResultatLoiPinelDTO) {
    }
}
