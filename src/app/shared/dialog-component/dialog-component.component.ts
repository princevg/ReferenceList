import {Component, Inject, Input  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css']
})

export class DialogComponentComponent {
    @Input() selectedDivision: string;
    @Input() displayName: string;
    @Input() attributeName: string;
    @Input() isRequired: boolean;
    @Input() isIncluded: boolean;

    constructor(
      public dialogRef: MatDialogRef<DialogComponentComponent>,
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
