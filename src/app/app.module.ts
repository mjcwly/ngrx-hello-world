// Core imports...
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Third-party imports
import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';

// Application imports...
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShellModule } from './shell/shell.module';
import { HelloWorldStoreModule } from './hello-world-store/hello-world-store.module';
import { InMemoryDataService } from './core/services/in-memory-data.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HelloWorldStoreModule,
    ShellModule,
    SharedModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 100 })
  ],
  providers: [
    { provide: InMemoryDataService, useExisting: InMemoryDbService }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
