import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MainParentComponent } from './main-parent/main-parent.component';
import { ChildComponent } from './child/child.component';
import { SecondaryParentComponent } from './secondary-parent/secondary-parent.component';
import { CountletterPipe } from './countletter.pipe';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SayHelloComponent } from './say-hello/say-hello.component';
import { AddUserComponent } from './add-user/add-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MusicdialogComponent } from './musicdialog/musicdialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {DialogModule} from '@angular/cdk/dialog';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'main', component: MainParentComponent},
  {path: 'user/add', component: AddUserComponent},
  {path: 'user', component: UsersComponent},
  {path: 'hello/:name', component: SayHelloComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    MainParentComponent,
    ChildComponent,
    SecondaryParentComponent,
    CountletterPipe,
    UsersComponent,
    HomeComponent,
    MenuComponent,
    SayHelloComponent,
    AddUserComponent,
    MusicdialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    DialogModule,
    MatFormFieldModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
