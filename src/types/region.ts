export interface IReverseGeocode {
  message: string;
  timestamp: string;
  data: {
    city: string;
    district: string;
    latitude: number;
    longtitude: number;
    fullAddress: string;
    neighborhood: string;
  };
}
