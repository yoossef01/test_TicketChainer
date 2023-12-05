import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import {Doc} from 'src/app/models/doc';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  documents: Doc[] = [];
  newDocument: Doc = new Doc("","","PDF","");
  isEditMode1 = false;
  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.loadDocuments();
  }

  loadDocuments(): void {
    this.documentService.getAllDocuments().subscribe(
      (documents) => {
        this.documents = documents.rows;
        console.log(this.documents);
      
  })};
  createDocument(): void {
    console.log('Document created:', this.newDocument);
    this.documentService.createDocument(this.newDocument).subscribe(
      (createdDocument) => {
        console.log('Document created:', createdDocument);
        this.loadDocuments();
        this.newDocument = new Doc("","","PDF","");

      }
    );
  }
  deleteDocument(documentId: string): void {
    this.documentService.deleteDocumentById(documentId).subscribe(
      () => {
        console.log('Document deleted successfully.');
        this.loadDocuments();
  })};


  enableEditMode1(): void {
    this.isEditMode1 = true;
  }
  cancelEditMode1(): void {
    this.isEditMode1 = false;
  }

  updateDocument(document: Doc): void {
    this.documentService.updateDocument(document.id, document).subscribe(
      (updatedDocument) => {
        console.log('Document updated successfully:', updatedDocument);
        this.isEditMode1 = false
        this.loadDocuments();
      })
      }       ;


}
