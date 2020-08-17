import {fixedCharge, percentCharge, Tariff, unknownCharge} from './charge';

export interface SupportedCountry {
    name: string;
    tariffs: {
        intra: Tariff[],
        inter: Tariff[],
        withdrawal: Tariff[],
    };
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
                tariffs: {
                    inter: [
                        {
                            low: 100,
                            high: 100100,
                            fee: 3,
                            feeType: 'percentage',
                        },
                        {
                            low: 100101,
                            high: 200500,
                            fee: 3100,
                            feeType: 'fixed',
                        },
                        {
                            low: 200501,
                            high: 400500,
                            fee: 3500,
                            feeType: 'fixed',
                        },
                        {
                            low: 400501,
                            high: 500000,
                            fee: 4000,
                            feeType: 'fixed',
                        },
                    ],
                    intra: [
                        {
                            low: 100,
                            high: 10050,
                            fee: 1,
                            feeType: 'percentage',
                        },
                        {
                            low: 10051,
                            high: 13550,
                            fee: 100,
                            feeType: 'fixed',
                        },
                        {
                            low: 13551,
                            high: 1000000,
                            fee: 125,
                            feeType: 'fixed',
                        },
                    ],
                    withdrawal: [
                        {
                            low: 100,
                            high: 5999,
                            fee: 3,
                            feeType: 'percentage',
                        },
                        {
                            low: 6000,
                            high: 10050,
                            fee: 175,
                            feeType: 'fixed',
                        },
                        {
                            low: 10051,
                            high: 13550,
                            fee: 300,
                            feeType: 'fixed',
                        },
                        {
                            low: 13551,
                            high: 25050,
                            fee: 350,
                            feeType: 'fixed',
                        },
                        {
                            low: 25051,
                            high: 50050,
                            fee: 700,
                            feeType: 'fixed',
                        },
                        {
                            low: 50051,
                            high: 75100,
                            fee: 1350,
                            feeType: 'fixed',
                        },
                        {
                            low: 75101,
                            high: 100100,
                            fee: 1800,
                            feeType: 'fixed',
                        },
                        {
                            low: 100101,
                            high: 200500,
                            fee: 2150,
                            feeType: 'fixed',
                        },
                        {
                            low: 200501,
                            high: 300500,
                            fee: 2600,
                            feeType: 'fixed',
                        },
                        {
                            low: 300501,
                            high: 400500,
                            fee: 3100,
                            feeType: 'fixed',
                        },
                        {
                            low: 400501,
                            high: 500000,
                            fee: 3500,
                            feeType: 'fixed',
                        },
                    ],
                }
            }
        ]
    },
    {
        name: MobileMoneyProviderName.ORANGE_MONEY,
        logo: './assets/providers/orange_money_300x200.jpg',
        supportedCountries: [
            {
                name: 'CM',
                tariffs: {
                    intra: [
                        {
                            low: 50,
                            high: 6500,
                            fee: 1,
                            feeType: 'percentage',
                        },
                        {
                            low: 6501,
                            high: 10000,
                            fee: 50,
                            feeType: 'fixed',
                        },
                        {
                            low: 10001,
                            high: 13500,
                            fee: 100,
                            feeType: 'fixed',
                        },
                        {
                            low: 13501,
                            high: 25000,
                            fee: 150,
                            feeType: 'fixed',
                        },
                        {
                            low: 25001,
                            high: 50000,
                            fee: 150,
                            feeType: 'fixed',
                        },
                        {
                            low: 50001,
                            high: 80000,
                            fee: 200,
                            feeType: 'fixed',
                        },
                        {
                            low: 80001,
                            high: 100000,
                            fee: 200,
                            feeType: 'fixed',
                        },
                        {
                            low: 100001,
                            high: 200000,
                            fee: 300,
                            feeType: 'fixed',
                        },
                        {
                            low: 200001,
                            high: 300000,
                            fee: 300,
                            feeType: 'fixed',
                        },
                        {
                            low: 300001,
                            high: 400000,
                            fee: 300,
                            feeType: 'fixed',
                        },
                        {
                            low: 400001,
                            high: 500000,
                            fee: 500,
                            feeType: 'fixed',
                        },
                        {
                            low: 500001,
                            high: 1000000,
                            fee: 500,
                            feeType: 'fixed',
                        },
                    ],
                    inter: [
                        {
                            low: 50,
                            high: 6500,
                            fee: 4,
                            feeType: 'percentage',
                        },
                        {
                            low: 6501,
                            high: 10000,
                            fee: 250,
                            feeType: 'fixed',
                        },
                        {
                            low: 10001,
                            high: 13500,
                            fee: 400,
                            feeType: 'fixed',
                        },
                        {
                            low: 13501,
                            high: 25000,
                            fee: 525,
                            feeType: 'fixed',
                        },
                        {
                            low: 25001,
                            high: 50000,
                            fee: 900,
                            feeType: 'fixed',
                        },
                        {
                            low: 50001,
                            high: 80000,
                            fee: 1700,
                            feeType: 'fixed',
                        },
                        {
                            low: 80001,
                            high: 100000,
                            fee: 2300,
                            feeType: 'fixed',
                        },
                        {
                            low: 100001,
                            high: 200000,
                            fee: 2700,
                            feeType: 'fixed',
                        },
                        {
                            low: 200001,
                            high: 300000,
                            fee: 3100,
                            feeType: 'fixed',
                        },
                        {
                            low: 300001,
                            high: 400000,
                            fee: 3600,
                            feeType: 'fixed',
                        },
                        {
                            low: 400001,
                            high: 500000,
                            fee: 4000,
                            feeType: 'fixed',
                        },
                        {
                            low: 500001,
                            high: 1000000,
                            fee: undefined,
                            feeType: 'unknown',
                        },
                    ],
                    withdrawal: [
                        {
                            low: 50,
                            high: 6500,
                            fee: 3,
                            feeType: 'percentage',
                        },
                        {
                            low: 6501,
                            high: 10000,
                            fee: 180,
                            feeType: 'fixed',
                        },
                        {
                            low: 10001,
                            high: 13500,
                            fee: 300,
                            feeType: 'fixed',
                        },
                        {
                            low: 13501,
                            high: 25000,
                            fee: 350,
                            feeType: 'fixed',
                        },
                        {
                            low: 25001,
                            high: 50000,
                            fee: 700,
                            feeType: 'fixed',
                        },
                        {
                            low: 50001,
                            high: 80000,
                            fee: 1350,
                            feeType: 'fixed',
                        },
                        {
                            low: 80001,
                            high: 100000,
                            fee: 1800,
                            feeType: 'fixed',
                        },
                        {
                            low: 100001,
                            high: 200000,
                            fee: 2150,
                            feeType: 'fixed',
                        },
                        {
                            low: 200001,
                            high: 300000,
                            fee: 2600,
                            feeType: 'fixed',
                        },
                        {
                            low: 300001,
                            high: 400000,
                            fee: 3100,
                            feeType: 'fixed',
                        },
                        {
                            low: 400001,
                            high: 500000,
                            fee: 3600,
                            feeType: 'fixed',
                        },
                        {
                            low: 500001,
                            high: 1000000,
                            fee: undefined,
                            feeType: 'unknown',
                        },
                    ],
                },
            }
        ]
    },
    {
        name: MobileMoneyProviderName.EXPRESS_UNION_MOBILE,
        logo: './assets/providers/eu-mobile-money_300x200.png',
        supportedCountries: [
            {
                name: 'CM',
                tariffs: {
                    inter: [
                        {
                            low: 1,
                            high: 3000,
                            fee: 0,
                            feeType: 'fixed',
                        },
                        {
                            low: 3001,
                            high: 10000,
                            fee: 0,
                            feeType: 'fixed',
                        },
                        {
                            low: 10001,
                            high: 15000,
                            fee: 0,
                            feeType: 'fixed',
                        },
                        {
                            low: 15001,
                            high: 20000,
                            fee: 0,
                            feeType: 'fixed',
                        },
                        {
                            low: 20001,
                            high: 25000,
                            fee: 0,
                            feeType: 'fixed',
                        },
                        {
                            low: 25001,
                            high: 50000,
                            fee: 0,
                            feeType: 'fixed',
                        },
                        {
                            low: 50001,
                            high: 80000,
                            fee: 0,
                            feeType: 'fixed',
                        },
                        {
                            low: 80001,
                            high: 100000,
                            fee: 0,
                            feeType: 'fixed',
                        },
                        {
                            low: 100001,
                            high: 200000,
                            fee: 0,
                            feeType: 'fixed',
                        },
                        {
                            low: 200001,
                            high: 300000,
                            fee: 0,
                            feeType: 'fixed',
                        },
                        {
                            low: 300001,
                            high: 400000,
                            fee: 0,
                            feeType: 'fixed',
                        },
                        {
                            low: 400001,
                            high: 500000,
                            fee: 0,
                            feeType: 'fixed',
                        },
                        {
                            low: 500001,
                            high: 600000,
                            fee: 0,
                            feeType: 'fixed',
                        },
                        {
                            low: 600001,
                            high: 700000,
                            fee: 0,
                            feeType: 'fixed',
                        },
                        {
                            low: 700001,
                            high: 800000,
                            fee: 0,
                            feeType: 'fixed',
                        },
                        {
                            low: 800001,
                            high: 900000,
                            fee: 0,
                            feeType: 'fixed',
                        },
                        {
                            low: 900001,
                            high: 1000000,
                            fee: 0,
                            feeType: 'fixed',
                        },
                    ],
                    intra: [
                        {
                            low: 1,
                            high: 3000,
                            fee: 150,
                            feeType: 'fixed',
                        },
                        {
                            low: 3001,
                            high: 10000,
                            fee: 150,
                            feeType: 'fixed',
                        },
                        {
                            low: 10001,
                            high: 15000,
                            fee: 400,
                            feeType: 'fixed',
                        },
                        {
                            low: 15001,
                            high: 20000,
                            fee: 500,
                            feeType: 'fixed',
                        },
                        {
                            low: 20001,
                            high: 25000,
                            fee: 500,
                            feeType: 'fixed',
                        },
                        {
                            low: 25001,
                            high: 50000,
                            fee: 900,
                            feeType: 'fixed',
                        },
                        {
                            low: 50001,
                            high: 80000,
                            fee: 1400,
                            feeType: 'fixed',
                        },
                        {
                            low: 80001,
                            high: 100000,
                            fee: 1900,
                            feeType: 'fixed',
                        },
                        {
                            low: 100001,
                            high: 200000,
                            fee: 2200,
                            feeType: 'fixed',
                        },
                        {
                            low: 200001,
                            high: 300000,
                            fee: 2300,
                            feeType: 'fixed',
                        },
                        {
                            low: 300001,
                            high: 400000,
                            fee: 2400,
                            feeType: 'fixed',
                        },
                        {
                            low: 400001,
                            high: 500000,
                            fee: 2500,
                            feeType: 'fixed',
                        },
                        {
                            low: 500001,
                            high: 600000,
                            fee: 4000,
                            feeType: 'fixed',
                        },
                        {
                            low: 600001,
                            high: 700000,
                            fee: 4200,
                            feeType: 'fixed',
                        },
                        {
                            low: 700001,
                            high: 800000,
                            fee: 4400,
                            feeType: 'fixed',
                        },
                        {
                            low: 800001,
                            high: 900000,
                            fee: 4700,
                            feeType: 'fixed',
                        },
                        {
                            low: 900001,
                            high: 1000000,
                            fee: 5000,
                            feeType: 'fixed',
                        },
                    ],
                    withdrawal: [
                        {
                            low: 1,
                            high: 3000,
                            fee: 100,
                            feeType: 'fixed',
                        },
                        {
                            low: 3001,
                            high: 10000,
                            fee: 150,
                            feeType: 'fixed',
                        },
                        {
                            low: 10001,
                            high: 15000,
                            fee: 350,
                            feeType: 'fixed',
                        },
                        {
                            low: 15001,
                            high: 20000,
                            fee: 350,
                            feeType: 'fixed',
                        },
                        {
                            low: 20001,
                            high: 25000,
                            fee: 350,
                            feeType: 'fixed',
                        },
                        {
                            low: 25001,
                            high: 50000,
                            fee: 650,
                            feeType: 'fixed',
                        },
                        {
                            low: 50001,
                            high: 80000,
                            fee: 1350,
                            feeType: 'fixed',
                        },
                        {
                            low: 80001,
                            high: 100000,
                            fee: 1650,
                            feeType: 'fixed',
                        },
                        {
                            low: 100001,
                            high: 200000,
                            fee: 2100,
                            feeType: 'fixed',
                        },
                        {
                            low: 200001,
                            high: 300000,
                            fee: 2300,
                            feeType: 'fixed',
                        },
                        {
                            low: 300001,
                            high: 400000,
                            fee: 2400,
                            feeType: 'fixed',
                        },
                        {
                            low: 400001,
                            high: 500000,
                            fee: 2500,
                            feeType: 'fixed',
                        },
                        {
                            low: 500001,
                            high: 600000,
                            fee: 4000,
                            feeType: 'fixed',
                        },
                        {
                            low: 600001,
                            high: 700000,
                            fee: 4200,
                            feeType: 'fixed',
                        },
                        {
                            low: 700001,
                            high: 800000,
                            fee: 4400,
                            feeType: 'fixed',
                        },
                        {
                            low: 800001,
                            high: 900000,
                            fee: 4700,
                            feeType: 'fixed',
                        },
                        {
                            low: 900001,
                            high: 1000000,
                            fee: 5000,
                            feeType: 'fixed',
                        },
                    ],
                },
            }
        ]
    }
];
