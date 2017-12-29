//Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

// Angular Material Imports
import {MatDatepickerModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatNativeDateModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';

// Component Imports
import { AppComponent } from './app.component';
import { PostComponent } from './blog/post/post.component';
import { AddPostComponent } from './blog/add-post/add-post.component';
import { InfoComponent } from './info/info.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BookingComponent } from './booking/booking.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { EditPostComponent } from './blog/edit-post/edit-post.component';

// Service Imports
import { BookingService } from './booking/booking.service';
import { BlogService } from './blog/blog.service';
import { AuthService } from './auth.service';
import { Daterangepicker  } from 'ng2-daterangepicker';
import { EditorComponent } from './blog/editor/editor.component';

// define Routes
const appRoutes: Routes = [
  { path: 'posts', component: PostComponent },
  { path: '', component: InfoComponent },
  {  path: 'info', component: InfoComponent },
  {  path: 'gallery', component: GalleryComponent },
  {  path: 'booking', component: BookingComponent },
  {  path: 'about', component: AboutComponent },
  { path: 'addpost', component: AddPostComponent},
  { path: 'editpost', component: EditPostComponent},
  { path: 'admin', component: LoginComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    InfoComponent,
    GalleryComponent,
    BookingComponent,
    AboutComponent,
    AddPostComponent,
    EditPostComponent,
    LoginComponent,
    EditorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule,
    MatFormFieldModule,
    Daterangepicker,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )

  ],
  exports: [
  ],
  providers: [BookingService, BlogService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
