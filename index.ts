import { Passenger, PassengerType } from './stuff';
import { it, expect, describe } from './setup-global';

function getFemalePassengerCountPerType(passengers: Passenger[]): {
  [type in PassengerType]?: number;
} {
  // TODO
  return {};
}

// --------------------- Unit tests ---------------------
describe('Unit test', () => {
  it('Should return 1 ADULT', () => {
    const passengers = [
      new Passenger(PassengerType.ADT, true),
      new Passenger(PassengerType.ADT, false),
    ];

    expect(getFemalePassengerCountPerType(passengers)).toBe({
      ADULT: 1,
      CHILD: 0,
      INFANT: 0,
    });
  });

  it('Should return 1 CHILD', () => {
    const passengers = [
      new Passenger(PassengerType.CHD, true),
      new Passenger(PassengerType.CHD, false),
    ];

    expect(getFemalePassengerCountPerType(passengers)).toBe({
      ADULT: 0,
      CHILD: 1,
      INFANT: 0,
    });
  });

  it('Should return 1 INFANT', () => {
    const passengers = [
      new Passenger(PassengerType.INF, true),
      new Passenger(PassengerType.INF, false),
    ];

    expect(getFemalePassengerCountPerType(passengers)).toBe({
      ADULT: 0,
      CHILD: 0,
      INFANT: 1,
    });
  });

  it('Should return 3 ADULTS, 2 CHILDREN, 1 INFANT', () => {
    const passengers = [
      new Passenger(PassengerType.ADT, true),
      new Passenger(PassengerType.ADT, false),
      new Passenger(PassengerType.CHD, false),
      new Passenger(PassengerType.ADT, false),
      new Passenger(PassengerType.ADT, true),
      new Passenger(PassengerType.INF, false),
      new Passenger(PassengerType.CHD, false),
      new Passenger(PassengerType.CHD, true),
      new Passenger(PassengerType.INF, true),
      new Passenger(PassengerType.ADT, false),
    ];

    expect(getFemalePassengerCountPerType(passengers)).toBe({
      ADULT: 3,
      CHILD: 2,
      INFANT: 1,
    });
  });
});
