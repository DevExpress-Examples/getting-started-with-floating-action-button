import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';
import config from 'devextreme/core/config';

config({
    floatingActionButtonConfig: {
        position: {
            my: 'right bottom',
            at: 'right bottom',
            of: '#app-container',
            offset: '-16 -16'
        }
    }
});

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    showNotification(message: string) {
        notify({
            message: message,
            position: {
                my: 'left bottom',
                at: 'left bottom',
                of: '#app-container',
                offset: '16 -16'
            },
            minWidth: null,
            width: 320 * 0.7
        }, 'info', 1000);
    }
}