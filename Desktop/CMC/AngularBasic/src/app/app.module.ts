import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorDetailComponent } from './authors/authors-detail.component';
import { AuthorListComponent } from './authors/authors-list.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ProgressBarComponent,
    AuthorDetailComponent,
    AuthorListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
