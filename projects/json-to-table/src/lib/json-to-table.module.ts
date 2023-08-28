import { CommonModule } from '@angular/common';
import {JsonToTableComponent} from "./json-to-table.component";
import {NgModule} from "@angular/core";
// ... other imports

@NgModule({
  declarations: [
    JsonToTableComponent,
    // ... other declarations
  ],
  imports: [
    CommonModule,
    // ... other imports
  ],
  exports:[
    JsonToTableComponent,
  ]
})
export class JsonToTableModule { }
