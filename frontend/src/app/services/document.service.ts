
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Doc} from 'src/app/models/doc';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private baseUrl = 'http://localhost:3000/document'; 

  constructor(private http: HttpClient) {}

  getAllDocuments(): Observable<any> {
    return this.http.get<Doc[]>(`${this.baseUrl}/all`);
  }

  createDocument(document: Doc): Observable<Doc> {
    return this.http.post<Doc>(`${this.baseUrl}/add`, document);
  }

  getDocumentById(id: string): Observable<Doc> {
    return this.http.get<Doc>(`${this.baseUrl}/${id}`);
  }

  updateDocument(id: string, document: Doc): Observable<any> {
    return this.http.put<Doc>(`${this.baseUrl}/update/${id}`, document);
  }

  deleteDocumentById(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/del/${id}`);
  }
}
