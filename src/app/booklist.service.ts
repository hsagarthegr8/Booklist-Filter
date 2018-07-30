import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Book } from './booklist/book'

@Injectable({
  providedIn: 'root'
})
export class BooklistService {
  booklistUrl = 'assets/booklist.json'
  
  constructor(private http: HttpClient) { }

  getBooklist() {
    return this.http.get<Book[]>(this.booklistUrl)
  }
}
