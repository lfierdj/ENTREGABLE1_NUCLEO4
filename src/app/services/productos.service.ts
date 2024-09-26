import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }
  private API_Ropa = "http://localhost:3000/ropa";

  // Get all clothing items
  getRopa(): Observable<any> {
    return this.http.get(this.API_Ropa);
  }

  // Get a single clothing item by ID
  getRopaUnica(id: string): Observable<any> {
    return this.http.get(`${this.API_Ropa}/${id}`);
  }

  // Add a new clothing item
  postRopa(item: any): Observable<any> {
    return this.http.post(this.API_Ropa, item);
  }

  // Delete a clothing item by ID
  deleteRopaID(id: string): Observable<any> {
    return this.http.delete(`${this.API_Ropa}/${id}`);
  }

  // Edit an existing clothing item by ID
  putRopa(item: any): Observable<any> {
    return this.http.put(`${this.API_Ropa}/${item.id}`, item);
  }
}
