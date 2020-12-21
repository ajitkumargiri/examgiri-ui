import { IBranch } from 'app/shared/model/branch.model';
import { ICollege } from 'app/shared/model/college.model';

export interface ICourse {
  id?: number;
  name?: string;
  code?: string;
  branches?: IBranch[];
  college?: ICollege;
}

export class Course implements ICourse {
  constructor(public id?: number, public name?: string, public code?: string, public branches?: IBranch[], public college?: ICollege) {}
}
