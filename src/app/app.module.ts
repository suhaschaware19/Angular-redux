import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { saveUserReducer } from './state/reducers/user.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({user:saveUserReducer}),
    ReactiveFormsModule,
     // ngx-translate and the loader module
     HttpClientModule,
     MatDialogModule,
     TranslateModule.forRoot({
         loader: {
             provide: TranslateLoader,
             useFactory: HttpLoaderFactory,
             deps: [HttpClient]
         }
     }),
     BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [UserComponent]
})
export class AppModule { }
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
