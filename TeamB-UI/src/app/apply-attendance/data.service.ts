import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messageSource = new BehaviorSubject('Default_message');
  currentUser = this.messageSource.asObservable()

  constructor(private afs: AngularFirestore) {

  }

  shareUsername(message: any) {
    this.messageSource.next(message)
  }
  addLeave(user: any) {
    user.id = this.afs.createId();
    return this.afs.collection('/users').add(user);
  }
  getUserLeave() {
    return new Promise<any>((resolve) => {
      this.afs.collection('/users').valueChanges({ idField: 'id' }).subscribe(users => resolve(users));
    })
  }
  deleteLeave(user: any) {
    return this.afs.doc('/users/' + user.id).delete();
  }

  addAttendance(user: any) {
    user.id = this.afs.createId();
    return this.afs.collection('/attendance').add(user);
  }

  getAttendance() {
    return new Promise<any>((resolve) => {
      this.afs.collection('/attendance').valueChanges({ idField: 'id' }).subscribe(users => resolve(users));
    })
  }
  deleteAttendance(user: any) {
    return this.afs.doc('/attendance/' + user.id).delete();
  }


  addEvent(user: any) {
    user.id = this.afs.createId();
    return this.afs.collection('/events').add(user);
  }
  getEvent() {
    return new Promise<any>((resolve) => {
      this.afs.collection('/events').valueChanges({ idField: 'id' }).subscribe(users => resolve(users));
    })
  }
  deletEvent(user: any) {
    return this.afs.doc('/events/' + user.id).delete();
  }
  addJira(user: any) {
    user.id = this.afs.createId();
    return this.afs.collection('/Jira').add(user);
  }

  getJira() {
    return new Promise<any>((resolve) => {
      this.afs.collection('/Jira').valueChanges({ idField: 'id' }).subscribe(users => resolve(users));
    })
  }
}
