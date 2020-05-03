# HelloWorldAngular

A simple hello-world single page web app used to learn about Angular 8.

# Objectives

- Routed pages using AppRoutingModule and routerLink
- 1 and 2 way data binding
- If/Else ngClass and ngStyle to conditionally style ng-templates
- Dependency injection to utilize service components
- HttpClient calls to api and subscribing to the results
- \*ngIf and \*ngFor to map over the api call results if any were returned

# Includes: 

- [ANGULAR](https://angular.io/)
- [SCSS](https://sass-lang.com/)
- [SERVICES](https://angular.io/tutorial/toh-pt4)


# Live site

[LIVE SITE](https://austinparvin-hello-world-angular.netlify.app/)

![LADYBUG](https://recordit.co/WhwtRaP1FF/gif/notify)

# Featureed Code
### Subscribing to api call results then mapping over them

```TS
export class ListComponent implements OnInit {
  breweries: object;

  constructor(private _http: HttpService) {}

  ngOnInit() {
    this._http.myMethod();

    this._http.getBreweries().subscribe((data) => {
      this.breweries = data;
      console.log(this.breweries);
    });
  }
}
 ```
 
```TSX
<ul *ngIf="breweries">
    <li *ngFor="let brewery of breweries">
        <p class="name">{{ brewery.name }}</p>
        <p class="country">{{ brewery.state }}, {{ brewery.country }}</p>
        <a class="site" href="{{brewery.website_url}}">site</a>
    </li>
</ul>
