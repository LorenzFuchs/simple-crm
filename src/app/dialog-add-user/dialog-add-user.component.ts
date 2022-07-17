import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from 'src/models/user.class';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
user = new User();
birthDate: Date;
loading = false;
  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>,  private firestore: AngularFirestore) { }                                   //public oder private vor firestore schreiben, sonst erkennt das Programm ihn nicht

  ngOnInit(): void {
  }
saveUser() {
  this.user.birthDate = this.birthDate.getTime();
  console.log('user', this.user);
  this.loading = true;
  this.firestore.collection('users').add(this.user.toJSON()).then((result: any) => {                  //dieser Befehl fügt dem firestore die variable user hinzu
    this.loading = false;
    console.log('Adding user finished', result);
    this.dialogRef.close();
  });
}
}
