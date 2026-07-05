import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  links = [
    {
      image: 'instagram-btn.webp',
      url: 'https://www.instagram.com/karla.mottaadv/',
    },
    {
      image: 'whatsapp-btn.webp',
      url: 'https://wa.me/5579988471035',
    },
    {
      image: 'location-btn.webp',
      url: 'https://maps.app.goo.gl/miaxjB9Gnr5dwzv86',
    },
    {
      image: 'email-btn.webp',
      url: 'mailto:nnkarla1@gmail.com',
    },
  ];
}
