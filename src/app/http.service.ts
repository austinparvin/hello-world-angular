import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private http: HttpClient) {}

  myMethod() {
    console.log("http service.myMethod() ran successfully");
  }

  getBreweries() {
    return this.http.get("https://api.openbrewerydb.org/breweries");
  }
}
