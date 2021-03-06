import { Component, OnInit } from '@angular/core';
import {GestorService} from '../shared/gestor/gestor.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';
import { UserModel } from '../model/user.model';
import { OK } from '../model/httpstatus';
@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css'],
  providers: [GestorService]
})
export class UsersAddComponent implements OnInit {
  e: any = {};
  sub: Subscription;
  private isValid: boolean = true;
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
  public save(): void{
    this.isValid = this.gestorService.validate(this.user);
    if(this.isValid){
      this.gestorService.save(this.user).subscribe(res =>{
        if(res.responseCode = OK){
          this.gotoList();
        }else{
          this.message = res.message;
          this.isValid = false;
        }
      });
    }else{
      this.message = "Los campos son invalidos";
    }
  }
  gotoList() {
    this.router.navigate(['/users-list']);
  }  
}
