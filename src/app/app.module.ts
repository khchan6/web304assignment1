import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkareaComponent } from './workarea/workarea.component';
/* import { ActionmenuComponent } from './actionmenu/actionmenu.component'; */
import { ResultComponent } from './result/result.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkareaComponent,
    /* ActionmenuComponent, */
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
