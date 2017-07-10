import { Component, OnInit } from '@angular/core';

// NOTE: DIALOG_SERVICE_NEED
import { DialogService } from "./services/dialog.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    title: string = 'Dialog Service';

    // NOTE: DIALOG_SERVICE_NEED
    dialog: string = "";

    constructor(
        // NOTE: DIALOG_SERVICE_NEED
        private dialogService: DialogService
    ) {}

    ngOnInit() {

        // NOTE: DIALOG_SERVICE_NEED
        // This will load the default message from the dialogService
        this.getDialog();
    }

    // NOTE: DIALOG_SERVICE_NEED
    getDialog() {
        this.dialogService.getDialog().then( (dialog) => {
            this.dialog = dialog;
        })
    }

    // NOTE: DIALOG_SERVICE_NEED
    updateDialog(newDialog: string) {
        this.dialogService.setDialog(newDialog).then( (dialog) => {
            this.dialog = dialog;
        })
    }

    // NOTE: DIALOG_SERVICE_NEED
    clearDialog() {
        this.dialogService.clearDialog().then( (dialog) => {
            this.dialog = dialog;
        });
    }

}
