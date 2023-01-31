import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttendenceService {
  subscribe(arg0: (res: any) => void): any {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient : HttpClient) {}

  addAttendence(data : any){
    return this.httpClient.post(environment.appUrl+"attendence",data)
  }
  allDays(){
    return this.httpClient.get(environment.appUrl+"attendence");
  }
  addToday(data:any){
    return this.httpClient.post(environment.appUrl+"todayDates",data)
  }
  todayDates(){
    return this.httpClient.get(environment.appUrl+"todayDates")
  }
 
  getRating(){
    return this.httpClient.get(environment.appUrl+"ratingStars")
  }
  updateRating(id:number,data:any){
    const newUrl=environment.appUrl+"ratingStars/"+id;
      return this.httpClient.put(newUrl,data);
  }
  // addMessage(data:any){
  //   return this.httpClient.post(environment.appUrl+"addMessage",data);
  // }
  addMessage(data:any){
    return this.httpClient.post(environment.appUrl+"addMessage",data);
  }
  getMessage(id : number){
    return this.httpClient.get(environment.appUrl+"addMessage?userId="+id);
  }
  deleteMessage(id:number){
    return this.httpClient.delete(environment.appUrl+"addMessage/"+id);
  }
  updateMessage(id:number,data:any){debugger
    return this.httpClient.put(environment.appUrl+"addMessage/"+id,data);
  }

  getEvents(){
    return this.httpClient.get(environment.appUrl+"events"); 
  }
  addEvent(data:any){
    return this.httpClient.post(environment.appUrl+"events",data);
  }
  deleteEvent(id:number){
    return this.httpClient.delete(environment.appUrl+"events/"+id);
  }
}
