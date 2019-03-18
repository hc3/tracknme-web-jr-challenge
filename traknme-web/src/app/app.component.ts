import { Component } from '@angular/core';
import { LocationService } from './location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  location_origin: any;
  location_destiny: any;

  positions = [];
  destinations = [];

  constructor(
    public locationService: LocationService
  ) {
    if (!localStorage.getItem('locations')) {
      this.locationService.get().subscribe(locations => localStorage.setItem('locations', JSON.stringify(locations)))
    }

    this.tracePath();
  }

  public tracePath() {
    let points = JSON.parse(localStorage.getItem('locations'));

    this.location_origin = {
      lat: points[0].latitude,
      lng: points[0].longitude
    };

    this.location_destiny = {
      lat: points[1].latitude,
      lng: points[1].longitude
    };

    points.map((point, index) => {
      if (index % 2 === 0) {
        console.log('index mod 2');
        this.destinations.push({
          origin: { lat: 24.799448, lng: 120.979021 }
        })
      } else {
        console.log('no index mod 2');
        this.destinations.push({
          destiny: { lat: 24.799524, lng: 120.975017 }
        })
      }
    })
    console.log('destinations: ', this.destinations);

  }

  public renderOptions = {
    suppressMarkers: true,
  }

  public markerOptions = {
    origin: {
      icon: 'https://i.imgur.com/7teZKif.png',
      draggable: true,
    },
    destination: {
      icon: 'https://i.imgur.com/7teZKif.png',
      opacity: 0.8,
    },
  }
}
