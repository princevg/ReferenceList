import { DialogComponentComponent } from './../../../shared/dialog-component/dialog-component.component';
import {Component, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-add-reference',
  templateUrl: './add-reference.component.html',
  styleUrls: ['./add-reference.component.css']
})
export class AddReferenceComponent {

  @Output() saveDataEvent = new EventEmitter<object>();
  formData: object;
  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponentComponent, {
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
