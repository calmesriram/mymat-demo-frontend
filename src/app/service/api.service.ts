import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {
  	this.loading = false;
  }

  private apiRoot:string = "http://127.0.0.1:8000"
  loading:boolean;

  // Token Operations

  isAuthenticated() {
      if (localStorage.getItem("token")) {
        return true;
      } else {
        return false;
      }
    }

    setToken(data) {
       localStorage.setItem('token',data['token']);
    }

    clearToken() {
       localStorage.removeItem('token');
    }

  // Login

  public async APIlogin(data):Promise<any>{
      return new Promise((resolve,reject)=>{
        this.http.post(this.apiRoot+'/auth/',data).subscribe(res =>{
          this.setToken(res)
          resolve(true)
        },error =>{
          resolve(error)
        })
      }) as Promise<any>;
    } 
}
