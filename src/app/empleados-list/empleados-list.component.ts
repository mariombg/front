import {Component, OnInit} from '@angular/core';
import {GestorService} from '../shared/gestor/gestor.service';

@Component({
  selector: 'app-empleados-list',
  templateUrl: './empleados-list.component.html',
  styleUrls: ['./empleados-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: Array<any>;

  constructor(private gestorService: GestorService) {}

  ngOnInit() {
    this.gestorService.getAll('/all').subscribe(data => {
      this.users = data;
    })
  }
}