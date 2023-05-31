import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { MainParentComponent } from './main-parent/main-parent.component';
import { ChildComponent } from './child/child.component';
import { SecondaryParentComponent } from './secondary-parent/secondary-parent.component';
import { CountletterPipe } from './countletter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainParentComponent,
    ChildComponent,
    SecondaryParentComponent,
    CountletterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
