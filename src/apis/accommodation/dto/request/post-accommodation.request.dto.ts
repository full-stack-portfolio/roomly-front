
import Rooms from "src/types/accommodation/rooms.interface";
import UseInformations from "src/types/accommodation/use-informaion.interface";


export interface PostAccommodationRequestDto{
    accommodationName: string; 
    accommodationMainImage: string; 
    accommodationImages:string[];
    accommodationType: string; 
    accommodationIntroduce:string;
    accommodationAddress: string;
    categoryArea: string; 
    categoryPet: boolean;
    categoryNonSmokingArea: boolean;
    categoryIndoorSpa: boolean;
    categoryDinnerParty: boolean;
    categoryWifi: boolean;
    categoryCarPark: boolean;
    categoryPool: boolean;
    useInformations:UseInformations[];
    rooms:Rooms[];
}