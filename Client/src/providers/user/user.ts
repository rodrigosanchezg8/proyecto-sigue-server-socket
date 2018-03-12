import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {TabsPage} from "../../pages/tabs/tabs";
import {NativeStorage} from "@ionic-native/native-storage";

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  apiURL;
  signInURL;
  getGodfathersURL;

  constructor(public http: HttpClient, private nativeStorage: NativeStorage) {
    this.apiURL = "http://localhost:8010";
    this.signInURL = "/login";
    this.getGodfathersURL = "/users/godfathers";
  }

  validateUser(email, password){
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type','application/json');
    headers = headers.append('Accept','application/json');
    let _options = { headers: headers };

    let userData = {"email": email, "password": password };
    return this.http.post(this.apiURL + this.signInURL, userData, _options);
  }

  getGodfathers(){
    return new Promise((resolve) => {
      this.nativeStorage.getItem("session").then(res => {

        let headers = new HttpHeaders();
        headers = headers.append('Content-Type','application/json');
        headers = headers.append('Accept','application/json');
        headers = headers.append('Authorization', 'Bearer ' + res.token);
        let _options = { headers: headers };

        resolve(this.http.get(this.apiURL + this.getGodfathersURL, _options));
      });
    });
  }

}
