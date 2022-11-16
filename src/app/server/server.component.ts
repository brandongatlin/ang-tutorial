import {Component} from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    username = '';
    canClick = false;

    onUpdate(){
        if(this.username.length > 0){
            this.canClick = true;
        } else {
            this.canClick = false;
        }
    }

    onClick(){
        this.username = '';
    }
}

