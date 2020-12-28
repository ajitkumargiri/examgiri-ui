import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { College } from '../college.model';
import { ICollege } from '../ICollege';
import { CollegeService } from '../service/college.service';

@Component({
    templateUrl: './datatable.component.html',
    styleUrls: ['./datatable.component.css'],
    providers: [MessageService,ConfirmationService]
})
export class DatatableComponent implements OnInit {

  collegeDialog: boolean;

  colleges: College[];

  college: College;

  selectedColleges: College[];

  submitted: boolean;

  statuses: any[];

  constructor(private collegeService: CollegeService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
      this.collegeService.query().subscribe(
        (res: HttpResponse<ICollege[]>) => {
            this.colleges = res.body ?? [];
        }
    );

  }

  openNew() {
    console.log("open new");
      this.college = {};
      this.submitted = false;
      this.collegeDialog = true;
  }

  deleteSelectedColleges() {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete the selected Colleges?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.colleges = this.colleges.filter(val => !this.selectedColleges.includes(val));
              this.selectedColleges = null;
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Colleges Deleted', life: 3000});
          }
      });
  }

  editCollege(College: College) {
      this.college = {...College};
      this.collegeDialog = true;
  }

  deleteCollege(College: College) {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete ' + College.name + '?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.colleges = this.colleges.filter(val => val.id !== College.id);
              this.college = {};
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'College Deleted', life: 3000});
          }
      });
  }

  hideDialog() {
      this.collegeDialog = false;
      this.submitted = false;
  }

  saveCollege() {

  }

  findIndexById(id: number): number {
      let index = -1;
      for (let i = 0; i < this.colleges.length; i++) {
          if (this.colleges[i].id === id) {
              index = i;
              break;
          }
      }

      return index;
  }

  createId(): string {
      let id = '';
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for ( var i = 0; i < 5; i++ ) {
          id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
  }
}
