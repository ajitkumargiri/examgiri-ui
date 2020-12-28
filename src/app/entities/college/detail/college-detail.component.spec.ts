import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { College } from '../college.model';

import { CollegeDetailComponent } from './college-detail.component';

describe('Component Tests', () => {
    describe('College Management Detail Component', () => {
        let comp: CollegeDetailComponent;
        let fixture: ComponentFixture<CollegeDetailComponent>;

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [CollegeDetailComponent],
                providers: [
                    {
                        provide: ActivatedRoute,
                        useValue: { data: of({ college: new College(123) }) }
                    }
                ]
            })
            .overrideTemplate(CollegeDetailComponent, '')
            .compileComponents();
            fixture = TestBed.createComponent(CollegeDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should load college on init', () => {
                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.college).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });

    });
});
