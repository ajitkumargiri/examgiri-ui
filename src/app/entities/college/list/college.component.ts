import { Component, OnInit } from '@angular/core';
import {HttpResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ICollege } from "../ICollege";
import { CollegeService } from '../service/college.service';
import { CollegeDeleteDialogComponent } from '../delete/college-delete-dialog.component';

@Component({
    selector: 'jhi-college',
    templateUrl: './college.component.html',
    styleUrls: ['../college.css'],
})
export class CollegeComponent implements OnInit {
    colleges?: ICollege[];
    isLoading = false;
    expertCsvDialog: boolean;



    constructor(
        protected collegeService: CollegeService,
        protected modalService: NgbModal,
    ) {
    }

    loadAll(): void {
        this.isLoading = true;

        this.collegeService.query().subscribe(
            (res: HttpResponse<ICollege[]>) => {
                this.isLoading = false;
                this.colleges = res.body ?? [];
            },
            () => {
                this.isLoading = false;
            }
        );
    }


    ngOnInit(): void {
        this.loadAll();
    }

    trackId(index: number, item: ICollege): number {
        return item.id!;
    }

    openNew() {
      console.log("open new");
        this.expertCsvDialog = true;
    }
    hideDialog() {
      this.expertCsvDialog = false;
  }


    delete(college: ICollege): void {
        const modalRef = this.modalService.open(CollegeDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.college = college;
        // unsubscribe not needed because closed completes on modal close
        modalRef.closed.subscribe(reason => {
            if (reason === 'deleted') {
                this.loadAll();
            }
        });
    }

}
