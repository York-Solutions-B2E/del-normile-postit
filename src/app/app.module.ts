import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostItNoteComponent } from './component/post-it-note/post-it-note.component';
import { AllPostItNotesComponent } from './component/all-post-it-notes/all-post-it-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    PostItNoteComponent,
    AllPostItNotesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
