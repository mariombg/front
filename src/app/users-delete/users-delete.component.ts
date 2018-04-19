import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {GestorService} from '../shared/gestor/gestor.service';
import {NgForm} from '@angular/forms';
import { UserModel } from '../model/user.model';
import { OK } from '../model/httpstatus';

@Component({
  selector: 'app-users-delete',
  templateUrl: './users-delete.component.html',
  styleUrls: ['./users-delete.component.css'],
  providers: [GestorService]
})
export class UsersDeleteComponent implements OnInit {

  e: any = {};
  sub: Subscription;
  private NameIsValid: boolean = true;
  private message: string = "";
  private user: UserModel;
  constructor(private gestorService: GestorService, private route: ActivatedRoute, private router: Router,) { 
    this.user = new UserModel();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.gestorService.get('/all', id).subscribe((e: any) => {
          if (e) {
            this.e = e;
          } else {
            console.log(`User with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }
  public remove(name: string): void{
    this.NameIsValid = this.gestorService.validateName(name);
    if(this.NameIsValid){
      this.gestorService.remove(this.user.name).subscribe(res =>{
        if(res = OK){
          this.gotoList();
          this.message = "Borrado exitosamente";
        }else{
          this.message = "Error al borrar";
          this.NameIsValid = false;
        }
      });
    }else{
      this.message = "Id no válido";
    }
  }
  gotoList() {
    this.router.navigate(['/users-list']);
  }  
}
