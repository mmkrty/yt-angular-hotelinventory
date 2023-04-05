
export interface RoomsStatus {
    totalRooms: number;
    availableRooms: number;
    bookedRooms: number;
}

export interface Room {
    roomNumber: number;
    roomType: string;
    amenities: string;
    price: number;
    photos: string;
    checkinTime: Date;
    checkoutTime: Date;
}