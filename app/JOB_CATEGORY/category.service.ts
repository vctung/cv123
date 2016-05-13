import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryService {

    constructor(private _http: Http) { }

    // getProducts(): Observable<IProduct[]> {
    //     return this._http.get(this._productUrl)
    //     .map((response: Response) => <IProduct[]> response.json())
    //     .do(data => console.log("All " + JSON.stringify(data)))
    //     .catch(this.handleError);        
    // }   
}