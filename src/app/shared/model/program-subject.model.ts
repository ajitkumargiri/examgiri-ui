export interface IProgramSubject {
  id?: number;
  fullMark?: number;
  passMark?: number;
}

export class ProgramSubject implements IProgramSubject {
  constructor(public id?: number, public fullMark?: number, public passMark?: number) {}
}
