export class FormModel {
  constructor(
    public selectedDivision: string,
    public displayName: string,
    public attributeName: string,
    public isRequired: boolean,
    public isIncluded: boolean
  ) { }
}
