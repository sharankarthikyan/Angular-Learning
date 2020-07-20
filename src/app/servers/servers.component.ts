import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreatedStatus:string = 'Server is not created';
  serverName = 'TestServer';
  servers = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateSever(){
    this.serverCreatedStatus = 'Sever was Created! Name is'+ this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }


}
