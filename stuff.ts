export class Passenger {
  type: PassengerType;
  isMale: boolean;

  constructor(type: PassengerType, isMale: boolean) {
    this.type = type;
    this.isMale = isMale;
  }
}

export enum PassengerType {
  ADT = 'ADULT',
  CHD = 'CHILD',
  INF = 'INFANT',
}
