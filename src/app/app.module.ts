import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentService } from './student.service';
import { HttpClientModule } from '@angular/common/http';
import { NewStudentFormComponent } from './new-student-form/new-student-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListFlightsComponent } from './list-flights/list-flights.component';

const appRoutes: Routes = [ {
  path: '',                     //default component to display
   component: NewStudentFormComponent
 },       {
   path: 'addStudent',         //when students added 
   component: NewStudentFormComponent
 },       {
  path: 'editStudent/:_id',       //when students listed
  component: NewStudentFormComponent
},        {
   path: 'listStudents',       //when students listed
   component: ListStudentsComponent
 },       {
  path: 'listFlights',       //when students listed
  component: ListFlightsComponent
},        {
   path: '**',                 //when path cannot be found
   component: NotFoundComponent
 }
];


@NgModule({
  declarations: [
    AppComponent,
    NewStudentFormComponent,
    NavigationMenuComponent,
    ListStudentsComponent,
    ListFlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
