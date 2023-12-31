import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';
import { ViewEditorComponent } from './layout/view-editor/view-editor.component';

@NgModule({
  declarations: [
    AppComponent, ViewEditorComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
