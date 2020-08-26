import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [ {type: 'server', name: 'Testserver', content: 'Just a test' } ];
  onServeradded(serverdata: {serverName: string, serverContent: string} ) {
    this.serverElements.push({
      type: 'server',
      name: serverdata.serverName,
      content: serverdata.serverContent
    });
  }

  onBlueprintadded(blueprintdata: {serverName: string, servercontent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintdata.serverName,
      content: blueprintdata.servercontent
    });
  }
  

  
}
