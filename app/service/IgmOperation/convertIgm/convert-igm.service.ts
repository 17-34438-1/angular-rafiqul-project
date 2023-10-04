import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertIgmService {


  constructor(
    private httpClient: HttpClient 
  ) {
 
   }

   convertPangaonContainer(rotation:any){
    var tmp_rot_no = rotation.toString().replace("/", "_");

    return this.httpClient.get('http://192.168.16.188:8081/IgmOperation/convertIgmValidationContainer/'+tmp_rot_no);
   }
}
