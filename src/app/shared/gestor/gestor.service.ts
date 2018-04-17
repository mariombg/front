import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { StringifyOptions } from 'querystring';

@Injectable()
export class GestorService {

  public API = '//192.168.1.102:8080/empresa';

  constructor(private http: HttpClient) {

  }
  getAll(service: string): Observable<any> {
    return this.http.get(this.API + service);
  }

  add(service: string, name: string, email: string){
    return this.http.get(this.API + service +'/'+ name +'/'+ email);
  }

  get(service: string, id: string) {
    return this.http.get(this.API + service + '/' + id);
  }

  save(service: string, obj: any): Observable<any> {
    let result: Observable<Object>;
    if (obj['id']) {
      result = this.http.put(this.API + service, obj);
    } else {
      result = this.http.post(this.API + service, obj);
    }
    return result;
  }

  remove(service: string, id: string) {
    return this.http.delete(this.API + service + '/' + id);
  }
}
