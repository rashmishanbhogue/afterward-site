import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-screens',
  standalone: true,
  templateUrl: './screens.component.html',
  styleUrl: './screens.component.css'
})
export class ScreensComponent {
  @ViewChildren ('fadeEl') fadeElements!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries)=> {
      entries.forEach(entry =>{
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 0.12});
    this.fadeElements.forEach(el=> observer.observe(el.nativeElement));
  }
}
