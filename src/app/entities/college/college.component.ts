import { HttpResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventManager } from 'src/app/shared/EventManager';
import { ICollege } from 'src/app/shared/model/college.model';
import { CollegeService } from './college.service';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit, OnDestroy {
  colleges?: ICollege[];
  eventSubscriber?: Subscription;

  constructor(protected collegeService: CollegeService, protected eventManager: EventManager) {}

  loadAll(): void {
    this.collegeService.query().subscribe((res: HttpResponse<ICollege[]>) => (this.colleges = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInColleges();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: ICollege): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInColleges(): void {
    this.eventSubscriber = this.eventManager.subscribe('collegeListModification', () => this.loadAll());
  }


}
