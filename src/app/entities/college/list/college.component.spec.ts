
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { CollegeService } from '../service/college.service';
import { College } from '../college.model';

import { CollegeComponent } from './college.component';

describe('Component Tests', () => {
    describe('College Management Component', () => {
        let comp: CollegeComponent;
        let fixture: ComponentFixture<CollegeComponent>;
        let service: CollegeService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule],
                declarations: [CollegeComponent],
            })
            .overrideTemplate(CollegeComponent, '')
            .compileComponents();

            fixture = TestBed.createComponent(CollegeComponent);
            comp = fixture.componentInstance;
            service = TestBed.inject(CollegeService);
        });

        it('Should call load all on init', () => {
            // GIVEN
            const headers = new HttpHeaders().append('link', 'link;link');
            spyOn(service, 'query').and.returnValue(of(new HttpResponse({
                body: [new College(123)],
                headers
            })));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.query).toHaveBeenCalled();
            expect(comp.colleges?.[0]).toEqual(jasmine.objectContaining({ id: 123 }));
        });

    });
});
