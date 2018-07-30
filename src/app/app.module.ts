import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { BooklistComponent } from './booklist/booklist.component';
import { FilterPipe } from './booklist/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    FilterPipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
