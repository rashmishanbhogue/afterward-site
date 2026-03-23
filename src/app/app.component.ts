import { Component } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { WhatComponent } from './components/what/what.component';
import { ScreensComponent } from './components/screens/screens.component';
import { DownloadComponent } from './components/download/download.component';
import { HonestComponent } from './components/honest/honest.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavComponent,
    HeroComponent,
    WhatComponent,
    ScreensComponent,
    DownloadComponent,
    HonestComponent,
    ContactComponent,
    FooterComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
