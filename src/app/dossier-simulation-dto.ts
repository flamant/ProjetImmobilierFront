import {ProduitImmobilierDTO} from './produit-immobilier-dto';
import {ResultatLoiPinelDTO} from './resultat-loi-pinel-dto';
import {ResultatBouvardDTO} from './resultat-bouvard-dto';
import {ResultatLmnpDTO} from './resultat-lmnp-dto';

export class DossierSimulationDTO {

  // tslint:disable-next-line: ban-types
  public static fromJson(json: Object): DossierSimulationDTO {
    return new DossierSimulationDTO(
      json['produitImmobilierDTO'],
      json['resultatLoiPinel6DTO'],
      json['resultatLoiPinel9DTO'],
      json['resultatLoiPinel12DTO'],
      json['resultatLmnpReelDto'],
      json['resultatLmnpMicroDto'],
      json['resultatBouvardDTO']
    );
  }

  constructor(
    public produitImmobilierDTO: ProduitImmobilierDTO,
    public resultatLoiPinel6DTO: ResultatLoiPinelDTO,
    public resultatLoiPinel9DTO: ResultatLoiPinelDTO,
    public resultatLoiPinel12DTO: ResultatLoiPinelDTO,
    public resultatLmnpReelDto: ResultatLmnpDTO,
    public resultatLmnpMicroDto: ResultatLmnpDTO,
    public resultatBouvardDTO: ResultatBouvardDTO
  ) {
  }
}
