import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dialog-box',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      console.log("Init dialog.component");
  }

}
