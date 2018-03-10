// import { Injectable } from '@angular/core';
// import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
// import { Observable } from 'rxjs/Observable';

// import { Fav } from '../models/Favourites';

// @Injectable()
// export class favService {
//   clientsCollection: AngularFirestoreCollection<Fav>;
//   clientDoc: AngularFirestoreDocument<Fav>;
//   sport: Observable<Fav.name>;
//   client: Observable<Fav.team.name>;

//   constructor(private afs: AngularFirestore) { 
//     this.clientsCollection = this.afs.collection('clients', ref => ref.orderBy('lastName', 'asc'));
//   }

//   getClients(): Observable<Fav[]> {
//     // Get clients with the id
//     this.clients = this.clientsCollection.snapshotChanges().map(changes => {
//       return changes.map(action => {
//         const data = action.payload.doc.data() as Client;
//         data.id = action.payload.doc.id;
//         return data;
//       });
//     });

//     return this.clients;
//   }

//   newClient(client: Client) {
//     this.clientsCollection.add(client);
//   }

//   getClient(id: string): Observable<Client> {
//     this.clientDoc = this.afs.doc<Client>(`clients/${id}`);
//     this.client = this.clientDoc.snapshotChanges().map(action => {
//       if(action.payload.exists === false) {
//         return null;
//       } else {
//         const data = action.payload.data() as Client;
//         data.id = action.payload.id;
//         return data;
//       }
//     });

//     return this.client;
//   }

//   updateClient(client: Client) {
//     this.clientDoc = this.afs.doc(`clients/${client.id}`);
//     this.clientDoc.update(client);
//   }

//   deleteClient(client: Client) {
//     this.clientDoc = this.afs.doc(`clients/${client.id}`);
//     this.clientDoc.delete();
//   }

// }
