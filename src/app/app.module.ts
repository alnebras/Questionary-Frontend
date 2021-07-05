import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { UserAnswerComponent } from "./userAnswer/userAnswer.component";
import { MatRadioModule } from "@angular/material/radio";
import { MatCheckboxModule } from "@angular/material/checkbox";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, UserAnswerComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
