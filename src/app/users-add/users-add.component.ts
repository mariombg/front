import { Component, OnInit } from '@angular/core';
import {GestorService} from '../shared/gestor/gestor.service';
@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {

  constructor(private gestorService: GestorService) { }

  ngOnInit() {
    add(id) {
      this.gestorService.remove('/employee', id).subscribe(result => {
        this.gotoList();
      }, error => console.error(error));
    }
  }

}
