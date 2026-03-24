import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-honest',
  standalone: true,
  imports: [NgFor],
  templateUrl: './honest.component.html',
  styleUrl: './honest.component.css'
})
export class HonestComponent implements AfterViewInit {
  @ViewChildren ('fadeEl') fadeElements!: QueryList<ElementRef>;
  rows = [
    { label: 'made by',     value: 'one person, with care' },
    { label: 'your data',   value: 'stays on your device. always.' },
    { label: 'no tracking', value: 'no analytics. no advertising identifiers.' },
    { label: 'no account',  value: 'works without signing in. forever.' },
    { label: 'cost',        value: 'free, always' },
    { label: 'internet',    value: 'never required' },
  ];

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 0.12});
    this.fadeElements.forEach(el => observer.observe(el.nativeElement));
  }
}
