import { FormModel } from './../form.model';
import {Component, Inject, Output, EventEmitter, Input  } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-popup-form',
  templateUrl: './popup-form.component.html',
  styleUrls: ['./popup-form.component.css']
})


export class AppPopupFormComponent {
  @Output() saveDataEvent = new EventEmitter<object>();
  formData: object;
  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AppPopupFormDialogComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.formData = result;
        this.saveDataEvent.emit(this.formData);
      }
    });
  }

}

@Component({
  selector: 'app-popup-form-dialog',
  templateUrl: './popup-form.component-dialog.html',
  styleUrls: ['./popup-form.component.css']
})
export class AppPopupFormDialogComponent {
  @Input() selectedDivision: string;
  @Input() displayName: string;
  @Input() attributeName: string;
  @Input() isRequired: boolean;
  @Input() isIncluded: boolean;

  constructor(
    public dialogRef: MatDialogRef<AppPopupFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

     }

  onNoClick(): void {
    this.dialogRef.close();
  }
  saveData(): void {
    const formData = {
      selectedDivision: this.selectedDivision,
      displayName: this.displayName,
      attributeName: this.attributeName,
      isRequired: this.isRequired,
      isIncluded: this.isIncluded
    };
    this.dialogRef.close(formData);
  }
}
