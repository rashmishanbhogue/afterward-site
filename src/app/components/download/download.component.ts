import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-download',
  standalone: true,
  imports: [NgFor],
  templateUrl: './download.component.html',
  styleUrl: './download.component.css'
})
export class DownloadComponent implements AfterViewInit{
  @ViewChildren('fadeEl') fadeElements!: QueryList<ElementRef>;

ngAfterViewInit():void{
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry =>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },{threshold: 0.12});
  this.fadeElements.forEach(el=> observer.observe(el.nativeElement));
}
}
