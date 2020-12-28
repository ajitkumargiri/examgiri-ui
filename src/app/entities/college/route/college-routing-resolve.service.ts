import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { College } from '../college.model';
import { ICollege } from "../ICollege";
import { CollegeService } from '../service/college.service';

@Injectable({ providedIn: 'root' })
export class CollegeRoutingResolveService implements Resolve<ICollege> {
    constructor(private service: CollegeService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Observable<ICollege> | Observable<never> {
        const id = route.params['id'];
        if (id) {
            return this.service.find(id).pipe(
                mergeMap((college: HttpResponse<College>) => {
                    if (college.body) {
                        return of(college.body);
                    } else {
                        this.router.navigate(['404']);
                        return EMPTY;
                    }
                })
            );
        }
        return of(new College());
    }
}
