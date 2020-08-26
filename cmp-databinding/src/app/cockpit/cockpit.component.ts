import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onServerAdded(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName : serverNameInput.value,
      serverContent : this.serverContentInput.nativeElement.value

    });
  }
  onBlueprintAdded(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName : serverNameInput.value,
      serverContent : this.serverContentInput.nativeElement.value

    });
  }
}
