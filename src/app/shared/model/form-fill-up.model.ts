export interface IFormFillUp {
  id?: number;
  regNumber?: string;
}

export class FormFillUp implements IFormFillUp {
  constructor(public id?: number, public regNumber?: string) {}
}
