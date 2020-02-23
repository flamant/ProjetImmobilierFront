import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProduitImmobilierDTO } from './produit-immobilier-dto';
import { Search } from './search';
import { map } from 'rxjs/operators';
import { UserDTO } from './user-dto';
import { DossierSimulationDTO } from './dossier-simulation-dto';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  public PRODUIT_API = '192.168.99.100:5555/api/produit/produits';
  constructor(private http: HttpClient) { }

  getListProduitImmobilierDTO(search: Search): Observable<ProduitImmobilierDTO[]> {
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.append('Access-Control-Allow-Origin: *', 'utf-8');
    const options = { headers };
    // tslint:disable-next-line: max-line-length
    return this.http.post<Search>('/api/produitimmobilier/all', JSON.stringify(search), options).pipe(map((search1: Search) => search1.result as ProduitImmobilierDTO[]));
//     return this.http.post<Search>('http://192.168.99.100:5555/api/produit/produits'
  }

  login(userDTO: UserDTO): Observable<UserDTO> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers };
    return this.http.post<UserDTO>('/api/user/login', userDTO, options).pipe(map(response => UserDTO.fromJson(response)));
  }

  createUser(userDTO: UserDTO): Observable<UserDTO> {
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.append('Access-Control-Allow-Origin: *', 'utf-8');
    const options = { headers };
    return this.http.post<UserDTO>('/api/user/createUser', userDTO, options).pipe(map(response => UserDTO.fromJson(response)));
  }

  createProduitImmobilier(produitImmobilierDTO: ProduitImmobilierDTO): Observable<ProduitImmobilierDTO> {
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.append('Access-Control-Allow-Origin: *', 'utf-8');
    const options = { headers };
    // tslint:disable-next-line: max-line-length
    return this.http.post<ProduitImmobilierDTO>('/api/produitimmobilier/save', produitImmobilierDTO, options).pipe(map(response => ProduitImmobilierDTO.fromJson(response)));
  }

  uploadFiles(formData: FormData) {
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.append('Access-Control-Allow-Origin: *', 'utf-8');
    return this.http.post('/api/produitimmobilier/uploadFiles', formData, {observe: 'response'});
  }

  getDossierSimulation(id: number): Observable<DossierSimulationDTO> {
    const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.append('Access-Control-Allow-Origin: *', 'utf-8');
    const options = { headers };
    return this.http.get('/api/audit/dossier' + '/' + id, options).pipe(map(response => DossierSimulationDTO.fromJson(response)));
  //  return  this.http.get('http://192.168.99.100:5555/api/audit/dossier' + '/' + id);
  }
  getAll(): Observable<ProduitImmobilierDTO[]> {
    return this.http.get(this.PRODUIT_API).pipe(
      map((data: any[]) => data.map((item: any) => item as ProduitImmobilierDTO
      )),
    );
  }


}
