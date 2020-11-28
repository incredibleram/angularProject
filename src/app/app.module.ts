import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { Capitalizer } from './capitalizer.pipe';
import { StarComponent } from './star/star.component';
import { FormsModule } from '@angular/forms';
import { LikecomponentComponent } from './likecomponent/likecomponent.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    Capitalizer,
    StarComponent,
    LikecomponentComponent,
    ZippyComponent,
    ContactFormComponent,
    TestcomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
