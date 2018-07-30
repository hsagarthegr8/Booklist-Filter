import { Component, OnInit } from '@angular/core';

import { Book } from './book'

import { BooklistService } from '../booklist.service'

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  booklist: Book[] = []

  queryId:string
  queryTitle:string
  queryAuthor:string
  queryYear:string

  constructor(private booklistService: BooklistService) {
    this.queryId = ''
    this.queryTitle = ''
    this.queryAuthor = ''
    this.queryYear = ''
   }

  ngOnInit() {
    this.getBooklist()
  }

  getBooklist() {
    this.booklistService.getBooklist().subscribe(
      (booklist:Book[]) => this.booklist = booklist
      )
  }
  
}
