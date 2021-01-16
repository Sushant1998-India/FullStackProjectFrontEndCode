import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  private baseURL="http://localhost:8080/api/auth";



  constructor(private httpClient:HttpClient) { }


  getUsersList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}/users`);
  }

  login(credentials): Observable<any> {
    return this.httpClient.post(this.baseURL + '/signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  createUser(user:User):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/users`,user);
  }

  getUserById(id:number): Observable<User>{
return this.httpClient.get<User>(`${this.baseURL}/users/${id}`);
  }

  updateUser(id:number, user:User):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/users/${id}`,user);
  }

  lockUser(id:number){
    return this.httpClient.put(`${this.baseURL}/users/${id}/lock`,User);
  }

  unlockUser(id:number){
    return this.httpClient.put(`${this.baseURL}/users/${id}/unlock`,User);
  }

  deleteUser(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/users/${id}`);
  }
}
