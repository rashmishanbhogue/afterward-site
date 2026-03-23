import { Component , ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-what',
  standalone: true,
  imports: [NgFor],
  templateUrl: './what.component.html',
  styleUrl: './what.component.css'
})
export class WhatComponent implements AfterViewInit {
@ViewChildren('fadeEl') fadeElements!: QueryList<ElementRef>;

principles=[
  {title: 'no notifications', body: "it will never ask you to open it."},
  {title: 'no reminders',body:"no daily check-ins. no streaks to maintain."},
  {title: 'no format', body:"write anything. it doesn't have to make sense."},
  {title: 'fully offline', body: "works without internet. always."},
  {title: 'your font, your tone', body:"nine fonts. dyslexia-friendly options included."},
  {title: 'data export',body:"your entries are yours to take."},
];

ngAfterViewInit(): void {
  const observer = new IntersectionObserver((entries)=> {
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },{threshold: 0.12});

  this.fadeElements.forEach(el => observer.observe(el.nativeElement));
}
}
