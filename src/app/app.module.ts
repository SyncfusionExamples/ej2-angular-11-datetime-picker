
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
// import the DateTimePickerModule for the DateTimePicker component
import { DateTimePickerModule } from "@syncfusion/ej2-angular-calendars";
import { AppComponent } from "./app.component";

@NgModule({
  //declaration of DateTimePickerModule into NgModule
  imports: [BrowserModule, DateTimePickerModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}