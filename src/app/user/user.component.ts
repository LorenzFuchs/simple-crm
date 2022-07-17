import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {MatDialog} from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user = new User();              //new User ist die Klasse User beim Ordner Models / wie ein Json Array
  allUsers = [];
  

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { 
    
  }

  ngOnInit(): void {
    this.firestore.collection('users').valueChanges({idField: 'customIdName'}).subscribe((changes: any)=>{                 //hier holen wir die Daten vom firestore
      console.log('Received changes from database', changes);
      this.allUsers = changes;                                                                    //immer wenn sich Daten im Firestore ändern, werden sie im Array allUsers gespeichert
    });
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
