import { AfterViewChecked, AfterViewInit, Component,  OnInit, ViewChild } from '@angular/core';
import { RoomsStatus, Room } from './rooms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked {
  hotelName = "Hilton"

  rooms: RoomsStatus = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomsList: Room[] = []

  hideRooms = false

  selectedRoom!: Room

  title = 'Room List'

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  constructor(){}

  ngOnInit(): void {
    this.roomsList = [
      {
        roomNumber: 1,
        roomType: "Deluxe King Room with Balcony",
        amenities: "Free WiFi, Air conditioning, Flat-screen TV, Mini-bar",
        price: 200,
        photos: "https://unsplash.com/photos/xFv7VJxNkLg",
        checkinTime: new Date("2022-05-01T14:00:00Z"),
        checkoutTime: new Date("2022-05-03T12:00:00Z"),
        rating: 4.2
      },
      {
        roomNumber: 2,
        roomType: "Standard Double Room",
        amenities: "Free WiFi, Air conditioning, Flat-screen TV, Tea/coffee maker",
        price: 120,
        photos: "https://unsplash.com/photos/5O5AHfjM_vY",
        checkinTime: new Date("2022-06-01T15:00:00Z"),
        checkoutTime: new Date("2022-06-03T13:00:00Z"),
        rating: 4.2
      },
      {
        roomNumber: 3,
        roomType: "Family Suite with Ocean View",
        amenities: "Free WiFi, Air conditioning, Flat-screen TV, Kitchenette",
        price: 350,
        photos: "https://unsplash.com/photos/c7v0bSTQL0g",
        checkinTime: new Date("2022-07-01T16:00:00Z"),
        checkoutTime: new Date("2022-07-04T12:00:00Z"),
        rating: 4.2
      }
    ];
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View"
  }

  ngAfterViewChecked(): void {
    
  }


  toggle(){
    this.hideRooms = !this.hideRooms
    this.title = 'Rooms List'
  }

  selectRoom(room: Room) {
    console.log(room)
    this.selectedRoom = room
  }

  addRoom() {
    const room: Room = {
      roomNumber: 4,
      roomType: 'Deluxe Queen Room',
      amenities: 'Air Conditioner, Free Wifi, TV, Bathroom, Kitchen',
      price: 180,
      photos: "https://unsplash.com/photos/xFv7VJxNkLg",
      checkinTime: new Date("2022-05-01T14:00:00Z"),
      checkoutTime: new Date("2022-05-03T12:00:00Z"),
      rating: 4.1
    }

    // this.roomsList.push(room)
    this.roomsList = [...this.roomsList, room]
  }
}
