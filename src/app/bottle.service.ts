import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
    providedIn: 'root'
})
export class BottleService {

    private url: string = "http://localhost:8081/api"; //"http://jsonplaceholder.typicode.com";

    private endpoint: string = "users";

    constructor(private httpClient: HttpClient) { }

    get() {
        return this.httpClient.get<User[]>(`${this.url}/${this.endpoint}`);
    }

    create(user: User): Observable<User> {
        let resultFromService: Observable<User> = this.httpClient.post<User>(`${this.url}/${this.endpoint}`, user);

        return resultFromService;
    }

    update(user: User): Observable<User> {
        return this.httpClient.put<User>(`${this.url}/${this.endpoint}/${user.id}`, user);
    }

    findById(id: Number): Observable<User> {
        return this.httpClient.get<User>(`${this.url}/${this.endpoint}/${id}`);
    }

    delete(user: User): Observable<User> {
        return this.httpClient.delete<User>(`${this.url}/${this.endpoint}`);
    }

    list() {
        return this.httpClient.get<User[]>(`${this.url}/${this.endpoint}`);
    }

}
