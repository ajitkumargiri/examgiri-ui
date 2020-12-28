import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ICollege } from "../ICollege";
import { createRequestOption } from 'src/app/core/request/request-util';
import { SERVER_API_URL } from 'src/app/app.constants';

type EntityResponseType = HttpResponse<ICollege>;
type EntityArrayResponseType = HttpResponse<ICollege[]>;

@Injectable({ providedIn: 'root' })
export class CollegeService {
    public resourceUrl = 'http://localhost:8080' + '/api/colleges';

    constructor(protected http: HttpClient) {}

    create(college: ICollege): Observable<EntityResponseType> {
      console.log('create college');
        return this.http.post<ICollege>(this.resourceUrl,
                 college ,
                { observe: 'response' })
        ;
    }

    update(college: ICollege): Observable<EntityResponseType> {
        return this.http.put<ICollege>(this.resourceUrl,
                 college ,
                { observe: 'response' })
        ;
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<ICollege>(`${this.resourceUrl}/${id}`, { observe: 'response' })
            ;
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<ICollege[]>(this.resourceUrl, { params: options, observe: 'response' })
            ;
    }

    delete(id: number): Observable<HttpResponse<{}>> {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }


}
