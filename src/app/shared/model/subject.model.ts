import { IProgram } from 'app/shared/model/program.model';

export interface ISubject {
  id?: number;
  name?: string;
  code?: string;
  program?: IProgram;
}

export class Subject implements ISubject {
  constructor(public id?: number, public name?: string, public code?: string, public program?: IProgram) {}
}
