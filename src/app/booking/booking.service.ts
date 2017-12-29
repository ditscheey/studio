import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookingService {

  results;data;
  check_in: string;
  check_out: string;

  constructor(private http: HttpClient) {

  }

  addBooking(formvalue) {
   this.http.post('http://localhost:3000/api/bookings',formvalue).subscribe(console.log);
   
    //console.log( this.http.get('/api/posts').map(res => res.json()));
  }
  
  getBookings(){
    this.http.get('http://localhost:3000/api/file').subscribe(data => {
      this.results = data['results'];
    });
  }

}


