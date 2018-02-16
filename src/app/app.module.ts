import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { AppPopupFormComponent, AppPopupFormDialogComponent } from './popup-form/popup-form.component';
import { AutocompleteOverviewExampleComponent } from './popup-form/autocomplete/autocomplete.component';


@NgModule({
  declarations: [
    AppComponent,
    AppPopupFormComponent,
    AppPopupFormDialogComponent,
    AutocompleteOverviewExampleComponent,
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
    AppPopupFormDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


