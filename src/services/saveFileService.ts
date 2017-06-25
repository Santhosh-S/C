import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class SaveFileService {

    constructor(private http: Http) {

    }

   
    saveFile(data): Observable<any> {

   
        return this.http.post("http://localhost:3000/save/file",{'file':data})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error));
    }

    compileFile(): Observable<any> {

   
        return this.http.post("http://localhost:3000/compile/file",{})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error));
    }

     outputFile(): Observable<any> {

   
        return this.http.post("http://localhost:3000/output/file",{})
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error));
    }


}
