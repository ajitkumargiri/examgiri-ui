import { ISubject } from 'app/shared/model/subject.model';
import { IBranch } from 'app/shared/model/branch.model';

export interface IProgram {
  id?: number;
  name?: string;
  code?: string;
  year?: string;
  subjects?: ISubject[];
  branch?: IBranch;
}

export class Program implements IProgram {
  constructor(
    public id?: number,
    public name?: string,
    public code?: string,
    public year?: string,
    public subjects?: ISubject[],
    public branch?: IBranch
  ) {}
}
