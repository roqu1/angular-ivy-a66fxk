import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TododataService } from './services/tododata.service';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoFormComponent } from './components/to-do-form/to-do-form.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ToDoListComponent, ToDoFormComponent],
  bootstrap: [AppComponent],
  providers: [TododataService],
})
export class AppModule {}
