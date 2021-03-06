import {Component, OnInit} from '@angular/core';
import {RootComponent} from '../root/root.component';
import {SettingsService} from 'src/app/services/settings/settings.service';

declare function io(): any;


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  socket = io();

  constructor(public rootComponent: RootComponent,
              public settingsService: SettingsService) {}

  ngOnInit() {
    this.settingsService.load();
    this.socket.on('set boardname', (object) => {
      this.settingsService.settings = object[0];
    });
  }
}
