import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MatMenuModule, MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {AppComponent} from './app.component';

import {GestorService} from './shared/gestor/gestor.service';
import {HttpClientModule} from '@angular/common/http';

import {UsersListComponent} from './empleados-list/empleados-list.component';
import {EmpleadosEditComponent} from './empleados-edit/empleados-edit.component';
import { UsersAddComponent } from './users-add/users-add.component';
/*import {DepartamentosListComponent} from './departamentos-list/departamentos-list.component';
import {DepartamentosEditComponent} from './departamentos-edit/departamentos-edit.component';
import {DelegacionesListComponent} from './delegaciones-list/delegaciones-list.component';
import {DelegacionesEditComponent} from './delegaciones-edit/delegaciones-edit.component';
*/
const appRoutes: Routes = [
  // GEN
  {path: '', redirectTo: '/', pathMatch: 'full'}
  // EMPLEADOS
  ,
  {
    path: 'users-list',
    component: UsersListComponent
  },
  {
    path: 'users-add',
    component: UsersAddComponent
  }/*,
  {
    path: 'empleados-edit/:id',
    component: EmpleadosEditComponent
  }
  // DEPARTAMENTOS
  ,
  {
    path: 'departamentos-list',
    component: DepartamentosListComponent
  },
  {
    path: 'departamentos-add',
    component: DepartamentosEditComponent
  },
  {
    path: 'departamentos-edit/:id',
    component: DepartamentosEditComponent
  }
  // DELEGACIONES
  ,
  {
    path: 'delegaciones-list',
    component: DelegacionesListComponent
  },
  {
    path: 'delegaciones-add',
    component: DelegacionesEditComponent
  },
  {
    path: 'delegaciones-edit/:id',
    component: DelegacionesEditComponent
  }*/
];

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UsersAddComponent,
    //EmpleadosEditComponent,
    //DepartamentosListComponent,
    //DepartamentosEditComponent,
    //DelegacionesListComponent,
    //DelegacionesEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatSelectModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GestorService],
  bootstrap: [AppComponent]
})
export class AppModule {}