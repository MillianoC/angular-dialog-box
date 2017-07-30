import { Component, OnInit } from '@angular/core';

import { DialogService } from "../../services/dialog.service";

@Component({
    selector: 'dialog-box',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

    dialog: string = null;

    dialogServiceSubscription: any;

    constructor(
        private dialogService: DialogService
    ) {}

    ngOnInit() {
        console.log("Init dialog component");
        this.dialog = "some info";
    }

}
