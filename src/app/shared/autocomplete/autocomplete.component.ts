import { Division } from './models/division.model';
import {Component, forwardRef} from '@angular/core';
import {FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators/map';


/**
 * @title Autocomplete overview
 */
const vodFunc = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AutocompleteComponent),
  multi: true
};

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  styleUrls: ['./autocomplete.component.css']
})

export class AutocompleteComponent implements ControlValueAccessor {
  stateCtrl: FormControl;
  selectedDivision: string;
  filteredDivisions: Observable<any[]>;

  private innerValue: any = '';
  private onTouchedCallback: () => void = vodFunc;
  private onChangeCallback: (_: any) => void = vodFunc;

  get value(): any {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
        this.innerValue = v;
        this.onChangeCallback(v);
    }
  }

  divisions: Division[] = [
    {
       text: 'Frontend',
       value: 'FE'
    },
    {
      text: 'Backend',
      value: 'BE'
    },
    {
      text: 'Devops',
      value: 'DO'
    },
    {
      text: 'Human Resources',
      value: 'HR'
    },
  ];

  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredDivisions = this.stateCtrl.valueChanges
      .pipe(
        map(division => division ? this.filterStates(division) : this.divisions.slice())
      );
  }

  filterStates(name: string) {
    return this.divisions.filter(division =>
      division.text.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  onBlur() {
    this.onTouchedCallback();
  }

  writeValue(value: any) {
    if (value !== this.innerValue) {
        this.innerValue = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}

