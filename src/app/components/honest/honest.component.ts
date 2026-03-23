import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-honest',
  standalone: true,
  imports: [NgFor],
  templateUrl: './honest.component.html',
  styleUrl: './honest.component.css'
})
export class HonestComponent {
  rows = [
    { label: 'made by',     value: 'one person, with care' },
    { label: 'your data',   value: 'stays on your device. always.' },
    { label: 'no tracking', value: 'no analytics. no advertising identifiers.' },
    { label: 'no account',  value: 'works without signing in. forever.' },
    { label: 'cost',        value: 'free, always' },
    { label: 'internet',    value: 'never required' },
  ];
}
