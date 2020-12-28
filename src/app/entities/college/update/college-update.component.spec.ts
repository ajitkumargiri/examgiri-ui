jest.mock('@angular/router');

import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { CollegeService } from '../service/college.service';
import { College } from '../college.model';

import { CollegeUpdateComponent } from './college-update.component';

describe('Component Tests', () => {
    describe('College Management Update Component', () => {
        let comp: CollegeUpdateComponent;
        let fixture: ComponentFixture<CollegeUpdateComponent>;
        let service: CollegeService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule],
                declarations: [CollegeUpdateComponent],
                providers: [FormBuilder, ActivatedRoute]
            })
            .overrideTemplate(CollegeUpdateComponent, '')
            .compileComponents();

            fixture = TestBed.createComponent(CollegeUpdateComponent);
            comp = fixture.componentInstance;
            service = TestBed.inject(CollegeService);
        });

        describe('save', () => {
            it('Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new College(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.updateForm(entity);
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.update).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );

            it('Should call create service on save for new entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new College();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.updateForm(entity);
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.create).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );
        });
    });
});
