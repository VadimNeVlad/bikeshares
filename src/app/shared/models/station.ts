export interface Station {
  schemeId: number;
  schemeShortName: string;
  stationId: number;
  name: string;
  nameIrish: string;
  docksCount: number;
  bikesAvailable: number;
  bikesAvailableTypeOne: number;
  bikesAvailableTypeTwo: number;
  docksAvailable: number;
  status: number;
  latitude: number;
  longitude: number;
  dateStatus: string;
}

export interface StationResponse {
  responseCode: number;
  responseText: string;
  responseDate: string;
  responseHash: string;
  data: Station[];
}

export interface StationData {
  key: string;
  schemeId: number;
}

export interface StationOption {
  value: SchemeId;
  viewValue: string;
}

export enum SchemeId {
  All = -1,
  Waterford = 1,
  Cork = 2,
  Limerick = 3,
  Galway = 4,
}
