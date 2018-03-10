import { Component, OnInit, ViewChild } from '@angular/core';
import { Fav } from "../../models/Favourites";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  sport: Fav = {
    name: "",
    team: {
      name: ""
    }
  };

  @ViewChild('userform') form: any;

  constructor() { }

  ngOnInit() {
  }

  onSubmit({value}) {
    
  }
}
