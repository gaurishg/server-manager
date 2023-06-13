import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  // newServe''rContent = '';
  @ViewChild('serverContentInput') serverContentInput!: ElementRef;

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverNameInput.value, 
      // serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(blueprintNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: blueprintNameInput.value, 
      // serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
