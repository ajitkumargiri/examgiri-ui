import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { College } from '../college.model';
import { ICollege } from "../ICollege";

import { CollegeService } from './college.service';

describe('Service Tests', () => {
    describe('College Service', () => {
        let service: CollegeService;
        let httpMock: HttpTestingController;
        let elemDefault: ICollege;
        let expectedResult: ICollege | ICollege[] | boolean | null;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [
                    HttpClientTestingModule
                ]
            });
            expectedResult = null;
            service = TestBed.inject(CollegeService);
            httpMock = TestBed.inject(HttpTestingController);

            elemDefault = new College(
                0,
                'AAAAAAA',
                'AAAAAAA',
            );
        });

        describe('Service methods', () => {
            it('should find an element', () => {
                const returnedFromService = Object.assign({
                }, elemDefault);

                service.find(123).subscribe(resp => expectedResult = resp.body);

                const req = httpMock.expectOne({ method: 'GET' });
                req.flush(returnedFromService);
                expect(expectedResult).toMatchObject(elemDefault);
            });

            it('should create a College', () => {
                const returnedFromService = Object.assign({
                    id: 0,
                }, elemDefault);

                const expected = Object.assign({
                }, returnedFromService);

                service.create(new College()).subscribe(resp => expectedResult = resp.body);

                const req = httpMock.expectOne({ method: 'POST' });
                req.flush(returnedFromService);
                expect(expectedResult).toMatchObject(expected);
            });

            it('should update a College', () => {
                const returnedFromService = Object.assign({
                    id: 1,
                    name: 'BBBBBB',
                    code: 'BBBBBB',
                }, elemDefault);

                const expected = Object.assign({
                }, returnedFromService);

                service.update(expected).subscribe(resp => expectedResult = resp.body);

                const req = httpMock.expectOne({ method: 'PUT' });
                req.flush(returnedFromService);
                expect(expectedResult).toMatchObject(expected);
            });

            it('should return a list of College', () => {
                const returnedFromService = Object.assign({
                    id: 1,
                    name: 'BBBBBB',
                    code: 'BBBBBB',
                }, elemDefault);

                const expected = Object.assign({
                }, returnedFromService);

                service.query().subscribe(resp => expectedResult = resp.body);

                const req = httpMock.expectOne({ method: 'GET' });
                req.flush([returnedFromService]);
                httpMock.verify();
                expect(expectedResult).toContainEqual(expected);
            });

            it('should delete a College', () => {
                service.delete(123).subscribe(resp => expectedResult = resp.ok);

                const req = httpMock.expectOne({ method: 'DELETE' });
                req.flush({ status: 200 });
                expect(expectedResult);
            });
        });

        afterEach(() => {
            httpMock.verify();
        });
    });
});
