import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName = "Hilton"

  rooms = 10

  hideRooms = false

  constructor(){}

  ngOnInit(): void {}

  toggle(){
    this.hideRooms = !this.hideRooms
  }
}
