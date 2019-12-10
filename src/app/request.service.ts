import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProduitImmobilierDTO } from './produit-immobilier-dto';
import { Search } from './search';
import { map } from 'rxjs/operators';
import { UserDTO } from './user-dto';
import { DossierPinelDTO } from './dossier-pinel-dto';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getListProduitImmobilierDTO(search: Search): Observable<ProduitImmobilierDTO[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers };
    // tslint:disable-next-line: no-shadowed-variable
    // tslint:disable-next-line: max-line-length
    return this.http.post<Search>('/api/produitimmobilier/all', JSON.stringify(search), options).pipe(map((search: Search) => search.result as ProduitImmobilierDTO[]));
  }

  login(userDTO: UserDTO): Observable<UserDTO> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers };
    return this.http.post<UserDTO>('/api/user/login', userDTO, options).pipe(map(response => UserDTO.fromJson(response)));
  }

  createUser(userDTO: UserDTO): Observable<UserDTO> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers };
    return this.http.post<UserDTO>('/api/user/createUser', userDTO, options).pipe(map(response => UserDTO.fromJson(response)));
  }

  getDossierPinelDTO(id: number): Observable<DossierPinelDTO> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers };
    return this.http.get('/api/produitimmobilier/' + id, options).pipe(map(response => DossierPinelDTO.fromJson(response)));
  }


}
