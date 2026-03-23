import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-download',
  standalone: true,
  imports: [NgFor],
  templateUrl: './download.component.html',
  styleUrl: './download.component.css'
})
export class DownloadComponent {
platforms =[
  {name: 'Android', sub: 'phone',   icon: '📱'},
  {name: 'iOS',     sub: 'iPhone',  icon: '🍎'},
  {name: 'macOS',   sub: 'desktop', icon: '🖥'},
  {name: 'Windows', sub: 'desktop', icon: '🪟'},
  {name: 'Linux',   sub: 'desktop', icon: '🐧'},
];
}
