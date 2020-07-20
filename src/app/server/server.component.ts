import {Component} from "@angular/core";


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .white-text {
      color: white;
    }
  `]
})
export class ServerComponent {
  serverID = 10;
  serverStatus = Math.random() > 0.5 ? 'online': 'offline';


}
