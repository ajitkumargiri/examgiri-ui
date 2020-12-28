import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder,} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { College } from '../college.model';
import { ICollege } from "../ICollege";
import { CollegeService } from '../service/college.service';

@Component({
    selector: 'jhi-college-update',
    templateUrl: './college-update.component.html'
})
export class CollegeUpdateComponent implements OnInit {
    isSaving = false;

    editForm = this.fb.group({
        id: [],
        name: [],
        code: [],
    });

    constructor(
        protected collegeService: CollegeService,
        protected activatedRoute: ActivatedRoute,
        private fb: FormBuilder,
    ) {}

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(({ college }) => {

            this.updateForm(college);

        });
    }

    updateForm(college: ICollege): void {
        this.editForm.patchValue({
            id: college.id,
            name: college.name,
            code: college.code,
        });
    }


    previousState(): void {
        window.history.back();
    }

    save(): void {
      console.log("saving");
        this.isSaving = true;
        const college = this.createFromForm();
        if (college.id !== undefined) {
            this.subscribeToSaveResponse(
                this.collegeService.update(college));
        } else {
            this.subscribeToSaveResponse(
                this.collegeService.create(college));
        }
    }

    private createFromForm(): ICollege {
        return {
            ...new College(),
            id: this.editForm.get(['id'])!.value,
            name: this.editForm.get(['name'])!.value,
            code: this.editForm.get(['code'])!.value,
        };
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<ICollege>>): void {
        result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
    }

    protected onSaveSuccess(): void {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError(): void {
        this.isSaving = false;
    }
}
