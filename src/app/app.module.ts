import { ListReferenceComponent } from './feature/reference/list-reference/list-reference.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatOptionModule,
  MatInputModule,
  MatDialogModule,
  MatCheckboxModule,
  MatTableModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AddReferenceComponent } from './feature/reference/add-reference/add-reference.component';
import { DialogComponentComponent } from './shared/dialog-component/dialog-component.component';
import { AutocompleteComponent } from './shared/autocomplete/autocomplete.component';
import { DataService } from './feature/reference/list-reference/service/list-reference.service';

@NgModule({
  declarations: [
    AppComponent,
    AddReferenceComponent,
    ListReferenceComponent,
    DialogComponentComponent,
    AutocompleteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatOptionModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTableModule,
    HttpModule,
    HttpClientModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTableModule
  ],
  entryComponents: [
    DialogComponentComponent
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }


