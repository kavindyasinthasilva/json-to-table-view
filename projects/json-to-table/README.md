# JsonToTable

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

# JSON to Table Component

The JSON to Table Component is an Angular library that allows you to display JSON data in a user-friendly tabular format.

## Installation

Install the library via npm:  

```bash
npm install json-to-table-com
```

## Usage

### 1.Import the JsonToTableModule in your Angular application's module:

```bash
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JsonToTableModule } from 'json-to-table-com';

@NgModule({
  declarations: [
    // Your app's components
  ],
  imports: [
    BrowserModule,
    JsonToTableModule, // Import the JsonToTableModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

```

### 2.Use the AutoJsonComponent in your component's template to display JSON data:

Replace yourJsonValue with the JSON data you want to display.

```bash
<AutoJsonComponent [value]="yourJsonValue"></AutoJsonComponent>
```
## Features

- Display JSON data in a collapsible table format.
- Automatically detects and displays the data type of JSON values.
- Supports nested JSON objects and arrays.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Kavindu Yasintha Silva

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull reques

