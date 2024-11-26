export default interface Rooms{
    
    roomName:string;
    roomPrice:number;
    roomCheckIn:string;
    roomCheckOut:string;
    roomTotalGuest:number;
    roomMainImage:string;
    roomMainImagePreview:string;
    roomMainImageFile:File | null;
    roomInfo:string;
    roomImages:string[];
    roomImagesPreview:string[];
    roomImageFiles: File[];
}