import { Pipe, PipeTransform } from "@angular/core";

import { Book } from "./book";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(value: Book[], query: string, filterBy: string): Book[] {
    if (filterBy == "id") {
      let idNum: number = query ? +query : null;
      return idNum ? value.filter((book: Book) => book.id == idNum) : value;
    }

    if (filterBy == "year") {
      let year = query ? query : null;
      return query
        ? value.filter((book: Book) => String(book.year).indexOf(year) != -1)
        : value;
    }

    query = query ? query.toLocaleLowerCase() : null;
    return query
      ? value.filter(
          (book: Book) =>
            book[filterBy].toLocaleLowerCase().indexOf(query) != -1
        )
      : value;
  }
}
