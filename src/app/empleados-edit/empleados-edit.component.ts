import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {GestorService} from '../shared/gestor/gestor.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-empleados-edit',
  templateUrl: './empleados-edit.component.html',
  styleUrls: ['./empleados-edit.component.css']
})
export class EmpleadosEditComponent implements OnInit {

  e: any = {};
  sub: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private gestorService: GestorService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.gestorService.get('/employee', id).subscribe((e: any) => {
          if (e) {
            this.e = e;
          } else {
            console.log(`Empleado with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/empleados-list']);
  }

  save(form: NgForm) {
    this.gestorService.save('/', form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(id) {
    this.gestorService.remove('/employee', id).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}
