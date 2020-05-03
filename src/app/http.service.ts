import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor() {}

  myMethod() {
    console.log("http service.myMethod() ran successfully");
  }
}
