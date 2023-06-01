import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { MainParentComponent } from './main-parent/main-parent.component';
import { ChildComponent } from './child/child.component';
import { SecondaryParentComponent } from './secondary-parent/secondary-parent.component';
import { CountletterPipe } from './countletter.pipe';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'main', component: MainParentComponent},
  {path: 'user', component: UsersComponent},
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
