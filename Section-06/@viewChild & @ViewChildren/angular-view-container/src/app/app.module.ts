import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoAppComponent, TodoComponent, TodoInputComponent, FooterComponent, TodoList } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,TodoAppComponent, TodoComponent,   TodoInputComponent, FooterComponent ],
  providers : [TodoList],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
