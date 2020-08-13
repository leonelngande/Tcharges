import {fixedCharge, percentCharge, Tariff, unknownCharge} from './charge';

export interface SupportedCountry {
    name: string;
    tariffs: Tariff[];
}

export interface MobileMoneyProvider {
    name: MobileMoneyProviderName;
    logo: string;
    supportedCountries: SupportedCountry[];
}

export const enum MobileMoneyProviderName {
    MTN_MOBILE_MONEY = 'MTN Mobile Money',
    ORANGE_MONEY = 'Orange Money',
    EXPRESS_UNION_MOBILE = 'Express Union Mobile',
}

export const mobileMoneyProviders: MobileMoneyProvider[] = [
    {
        name:  MobileMoneyProviderName.MTN_MOBILE_MONEY,
        logo: './assets/providers/mtn_mobile_money_300x200.jpg',
        supportedCountries: [
            {
                name: 'CM',
                tariffs: [
                    {
                        low: 100,
                        high: 5550,
                        intra: percentCharge(1),
                        inter: percentCharge(3),
                        withdrawal: percentCharge(3),
                    },
                    {
                        low: 5551,
                        high: 10050,
                        intra: fixedCharge(50),
                        inter: percentCharge(3),
                        withdrawal: fixedCharge(170),
                    },
                    {
                        low: 10051,
                        high: 13550,
                        intra: fixedCharge(100),
                        inter: percentCharge(3),
                        withdrawal: fixedCharge(300),
                    },
                    {
                        low: 13551,
                        high: 25050,
                        intra: fixedCharge(100),
                        inter: percentCharge(3),
                        withdrawal: fixedCharge(350),
                    },
                    {
                        low: 25051,
                        high: 50050,
                        intra: fixedCharge(100),
                        inter: percentCharge(3),
                        withdrawal: fixedCharge(700),
                    },
                    {
                        low: 50051,
                        high: 75100,
                        intra: fixedCharge(250),
                        inter: percentCharge(3),
                        withdrawal: fixedCharge(1350),
                    },
                    {
                        low: 75101,
                        high: 100100,
                        intra: fixedCharge(250),
                        inter: percentCharge(3),
                        withdrawal: fixedCharge(1700),
                    },
                    {
                        low: 100101,
                        high: 200500,
                        intra: fixedCharge(250),
                        inter: fixedCharge(3100),
                        withdrawal: fixedCharge(2150),
                    },
                    {
                        low: 200501,
                        high: 300500,
                        intra: fixedCharge(250),
                        inter: fixedCharge(3500),
                        withdrawal: fixedCharge(2500),
                    },
                    {
                        low: 300501,
                        high: 400500,
                        intra: fixedCharge(250),
                        inter: fixedCharge(3500),
                        withdrawal: fixedCharge(2600),
                    },
                    {
                        low: 400501,
                        high: 500000,
                        intra: fixedCharge(500),
                        inter: fixedCharge(4000),
                        withdrawal: fixedCharge(2750),
                    },
                    {
                        low: 400501,
                        high: 500000,
                        intra: fixedCharge(500),
                        inter: fixedCharge(4000),
                        withdrawal: fixedCharge(2750),
                    },
                    {
                        low: 500001,
                        high: 1000000,
                        intra: fixedCharge(500),
                        inter: unknownCharge(),
                        withdrawal: unknownCharge(),
                    },
                ]
            }
        ]
    },
    {
        name: MobileMoneyProviderName.ORANGE_MONEY,
        logo: './assets/providers/orange_money_300x200.jpg',
        supportedCountries: [
            {
                name: 'CM',
                tariffs: [
                    {
                        low: 50,
                        high: 6500,
                        intra: percentCharge(1),
                        inter: percentCharge(4),
                        withdrawal: percentCharge(3),
                    },
                    {
                        low: 6501,
                        high: 10000,
                        intra: fixedCharge(50),
                        inter: fixedCharge(250),
                        withdrawal: fixedCharge(180),
                    },
                    {
                        low: 10001,
                        high: 13500,
                        intra: fixedCharge(100),
                        inter: fixedCharge(400),
                        withdrawal: fixedCharge(300),
                    },
                    {
                        low: 13501,
                        high: 25000,
                        intra: fixedCharge(150),
                        inter: fixedCharge(525),
                        withdrawal: fixedCharge(350),
                    },
                    {
                        low: 25001,
                        high: 50000,
                        intra: fixedCharge(150),
                        inter: fixedCharge(900),
                        withdrawal: fixedCharge(700),
                    },
                    {
                        low: 50001,
                        high: 80000,
                        intra: fixedCharge(200),
                        inter: fixedCharge(1700),
                        withdrawal: fixedCharge(1350),
                    },
                    {
                        low: 80001,
                        high: 100000,
                        intra: fixedCharge(200),
                        inter: fixedCharge(2300),
                        withdrawal: fixedCharge(1800),
                    },
                    {
                        low: 100001,
                        high: 200000,
                        intra: fixedCharge(300),
                        inter: fixedCharge(2700),
                        withdrawal: fixedCharge(2150),
                    },
                    {
                        low: 200001,
                        high: 300000,
                        intra: fixedCharge(300),
                        inter: fixedCharge(3100),
                        withdrawal: fixedCharge(2600),
                    },
                    {
                        low: 300001,
                        high: 400000,
                        intra: fixedCharge(300),
                        inter: fixedCharge(3600),
                        withdrawal: fixedCharge(3100),
                    },
                    {
                        low: 400001,
                        high: 500000,
                        intra: fixedCharge(500),
                        inter: fixedCharge(4000),
                        withdrawal: fixedCharge(3600),
                    },
                    {
                        low: 500001,
                        high: 1000000,
                        intra: fixedCharge(500),
                        inter: unknownCharge(),
                        withdrawal: unknownCharge(),
                    },
                ]
            }
        ]
    },
    {
        name: MobileMoneyProviderName.EXPRESS_UNION_MOBILE,
        logo: './assets/providers/eu-mobile-money_300x200.png',
        supportedCountries: [
            {
                name: 'CM',
                tariffs: [
                    {
                        low: 1,
                        high: 3000,
                        intra: fixedCharge(0),
                        inter: fixedCharge(150),
                        withdrawal: fixedCharge(100),
                    },
                    {
                        low: 3001,
                        high: 10000,
                        intra: fixedCharge(0),
                        inter: fixedCharge(150),
                        withdrawal: fixedCharge(150),
                    },
                    {
                        low: 10001,
                        high: 15000,
                        intra: fixedCharge(0),
                        inter: fixedCharge(400),
                        withdrawal: fixedCharge(350),
                    },
                    {
                        low: 15001,
                        high: 20000,
                        intra: fixedCharge(0),
                        inter: fixedCharge(500),
                        withdrawal: fixedCharge(350),
                    },
                    {
                        low: 20001,
                        high: 25000,
                        intra: fixedCharge(0),
                        inter: fixedCharge(500),
                        withdrawal: fixedCharge(350),
                    },
                    {
                        low: 25001,
                        high: 50000,
                        intra: fixedCharge(0),
                        inter: fixedCharge(900),
                        withdrawal: fixedCharge(650),
                    },
                    {
                        low: 50001,
                        high: 80000,
                        intra: fixedCharge(0),
                        inter: fixedCharge(1400),
                        withdrawal: fixedCharge(1350),
                    },
                    {
                        low: 80001,
                        high: 100000,
                        intra: fixedCharge(0),
                        inter: fixedCharge(1900),
                        withdrawal: fixedCharge(1650),
                    },
                    {
                        low: 100001,
                        high: 200000,
                        intra: fixedCharge(0),
                        inter: fixedCharge(2200),
                        withdrawal: fixedCharge(2100),
                    },
                    {
                        low: 200001,
                        high: 300000,
                        intra: fixedCharge(0),
                        inter: fixedCharge(2300),
                        withdrawal: fixedCharge(2300),
                    },
                    {
                        low: 300001,
                        high: 400000,
                        intra: fixedCharge(0),
                        inter: fixedCharge(2400),
                        withdrawal: fixedCharge(2400),
                    },
                    {
                        low: 400001,
                        high: 500000,
                        intra: fixedCharge(0),
                        inter: fixedCharge(2500),
                        withdrawal: fixedCharge(2500),
                    },
                    {
                        low: 500001,
                        high: 600000,
                        intra: fixedCharge(0),
                        inter: fixedCharge(4000),
                        withdrawal: fixedCharge(4000),
                    },
                    {
                        low: 600001,
                        high: 700000,
                        intra: fixedCharge(0),
                        inter: fixedCharge(4200),
                        withdrawal: fixedCharge(4200),
                    },
                    {
                        low: 700001,
                        high: 800000,
                        intra: fixedCharge(0),
                        inter: fixedCharge(4400),
                        withdrawal: fixedCharge(4400),
                    },
                    {
                        low: 800001,
                        high: 900000,
                        intra: fixedCharge(0),
                        inter: fixedCharge(4700),
                        withdrawal: fixedCharge(4700),
                    },
                    {
                        low: 900001,
                        high: 1000000,
                        intra: fixedCharge(0),
                        inter: fixedCharge(5000),
                        withdrawal: fixedCharge(5000),
                    },
                ]
            }
        ]
    }
];
