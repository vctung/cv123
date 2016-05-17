import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { IPopularCategory } from './popularcategory';

@Injectable()
export class CategoryService {

    constructor(private _http: Http) { }

    getPopularCategories(): Observable<IPopularCategory[]> {
        var _popularCatUrl: string = "/api/popularcategories";
        
        return this._http.get(_popularCatUrl)
            .map((response: Response) => <IPopularCategory[]> response.json())
          //  .do(data => console.log("All " + JSON.stringify(data)))
            .catch(this.handleError); 
    }
    // getProducts(): Observable<IProduct[]> {
    //     return this._http.get(this._productUrl)
    //     .map((response: Response) => <IProduct[]> response.json())
    //     .do(data => console.log("All " + JSON.stringify(data)))
    //     .catch(this.handleError);        
    // }   
    
    private handleError(error: Response){
        console.log(error);
        
        return Observable.throw(error.json().error || 'Server error');
    }
}