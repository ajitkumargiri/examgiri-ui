import { IProgram } from 'app/shared/model/program.model';
import { ICourse } from 'app/shared/model/course.model';

export interface IBranch {
  id?: number;
  name?: string;
  code?: string;
  programs?: IProgram[];
  course?: ICourse;
}

export class Branch implements IBranch {
  constructor(public id?: number, public name?: string, public code?: string, public programs?: IProgram[], public course?: ICourse) {}
}
