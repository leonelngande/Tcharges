import {MoMoProvider} from './mo-mo-providers';

export interface ICharge {
    type: ChargeType;
    value: number;
    chargeFromAmount?: (amount: number) => number;
}

export interface ITariff {
    low: number;
    high: number;
    intra: ICharge;
    inter: ICharge;
    withdrawal: ICharge;
}

export type ChargeType = 'amount' | 'percentage' | 'free' | 'unknown';

const percentCharge = (value: number): ICharge => {
    return {
        type: 'percentage',
        value: value / 100,
        chargeFromAmount(amount: number) {
            return this.value * amount;
        },
    };
};
const amountCharge = (value: number): ICharge => {
    return {
        type: 'amount',
        value,
    };
};
const unknownCharge = (): ICharge => {
    return {
        type: 'unknown',
        value: null,
    };
};

export class ChargeEvaluator {
    tariff: ITariff;
    provider: MoMoProvider;
    amount: number;

    constructor(tariff: ITariff, provider: MoMoProvider, amount: number) {
        this.tariff = tariff;
        this.provider = provider;
        this.amount = amount;
    }
}

export const mtnTariffs: ITariff[] = [
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
        intra: amountCharge(50),
        inter: percentCharge(3),
        withdrawal: amountCharge(170),
    },
    {
        low: 10051,
        high: 13550,
        intra: amountCharge(100),
        inter: percentCharge(3),
        withdrawal: amountCharge(300),
    },
    {
        low: 13551,
        high: 25050,
        intra: amountCharge(100),
        inter: percentCharge(3),
        withdrawal: amountCharge(350),
    },
    {
        low: 25051,
        high: 50050,
        intra: amountCharge(100),
        inter: percentCharge(3),
        withdrawal: amountCharge(700),
    },
    {
        low: 50051,
        high: 75100,
        intra: amountCharge(250),
        inter: percentCharge(3),
        withdrawal: amountCharge(1350),
    },
    {
        low: 75101,
        high: 100100,
        intra: amountCharge(250),
        inter: percentCharge(3),
        withdrawal: amountCharge(1700),
    },
    {
        low: 100101,
        high: 200500,
        intra: amountCharge(250),
        inter: amountCharge(3100),
        withdrawal: amountCharge(2150),
    },
    {
        low: 200501,
        high: 300500,
        intra: amountCharge(250),
        inter: amountCharge(3500),
        withdrawal: amountCharge(2500),
    },
    {
        low: 300501,
        high: 400500,
        intra: amountCharge(250),
        inter: amountCharge(3500),
        withdrawal: amountCharge(2600),
    },
    {
        low: 400501,
        high: 500000,
        intra: amountCharge(500),
        inter: amountCharge(4000),
        withdrawal: amountCharge(2750),
    },
    {
        low: 400501,
        high: 500000,
        intra: amountCharge(500),
        inter: amountCharge(4000),
        withdrawal: amountCharge(2750),
    },
    {
        low: 500001,
        high: 1000000,
        intra: amountCharge(500),
        inter: unknownCharge(),
        withdrawal: unknownCharge(),
    },
];

export const orangeTariffs: ITariff[] = [
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
        intra: amountCharge(50),
        inter: amountCharge(250),
        withdrawal: amountCharge(180),
    },
    {
        low: 10001,
        high: 13500,
        intra: amountCharge(100),
        inter: amountCharge(400),
        withdrawal: amountCharge(300),
    },
    {
        low: 13501,
        high: 25000,
        intra: amountCharge(150),
        inter: amountCharge(525),
        withdrawal: amountCharge(350),
    },
    {
        low: 25001,
        high: 50000,
        intra: amountCharge(150),
        inter: amountCharge(900),
        withdrawal: amountCharge(700),
    },
    {
        low: 50001,
        high: 80000,
        intra: amountCharge(200),
        inter: amountCharge(1700),
        withdrawal: amountCharge(1350),
    },
    {
        low: 80001,
        high: 100000,
        intra: amountCharge(200),
        inter: amountCharge(2300),
        withdrawal: amountCharge(1800),
    },
    {
        low: 100001,
        high: 200000,
        intra: amountCharge(300),
        inter: amountCharge(2700),
        withdrawal: amountCharge(2150),
    },
    {
        low: 200001,
        high: 300000,
        intra: amountCharge(300),
        inter: amountCharge(3100),
        withdrawal: amountCharge(2600),
    },
    {
        low: 300001,
        high: 400000,
        intra: amountCharge(300),
        inter: amountCharge(3600),
        withdrawal: amountCharge(3100),
    },
    {
        low: 400001,
        high: 500000,
        intra: amountCharge(500),
        inter: amountCharge(4000),
        withdrawal: amountCharge(3600),
    },
    {
        low: 500001,
        high: 1000000,
        intra: amountCharge(500),
        inter: unknownCharge(),
        withdrawal: unknownCharge(),
    },
];

export const expressUnionTariffs: ITariff[] = [
    {
        low: 1,
        high: 3000,
        intra: amountCharge(0),
        inter: amountCharge(150),
        withdrawal: amountCharge(100),
    },
    {
        low: 3001,
        high: 10000,
        intra: amountCharge(0),
        inter: amountCharge(150),
        withdrawal: amountCharge(150),
    },
    {
        low: 10001,
        high: 15000,
        intra: amountCharge(0),
        inter: amountCharge(400),
        withdrawal: amountCharge(350),
    },
    {
        low: 15001,
        high: 20000,
        intra: amountCharge(0),
        inter: amountCharge(500),
        withdrawal: amountCharge(350),
    },
    {
        low: 20001,
        high: 25000,
        intra: amountCharge(0),
        inter: amountCharge(500),
        withdrawal: amountCharge(350),
    },
    {
        low: 25001,
        high: 50000,
        intra: amountCharge(0),
        inter: amountCharge(900),
        withdrawal: amountCharge(650),
    },
    {
        low: 50001,
        high: 80000,
        intra: amountCharge(0),
        inter: amountCharge(1400),
        withdrawal: amountCharge(1350),
    },
    {
        low: 80001,
        high: 100000,
        intra: amountCharge(0),
        inter: amountCharge(1900),
        withdrawal: amountCharge(1650),
    },
    {
        low: 100001,
        high: 200000,
        intra: amountCharge(0),
        inter: amountCharge(2200),
        withdrawal: amountCharge(2100),
    },
    {
        low: 200001,
        high: 300000,
        intra: amountCharge(0),
        inter: amountCharge(2300),
        withdrawal: amountCharge(2300),
    },
    {
        low: 300001,
        high: 400000,
        intra: amountCharge(0),
        inter: amountCharge(2400),
        withdrawal: amountCharge(2400),
    },
    {
        low: 400001,
        high: 500000,
        intra: amountCharge(0),
        inter: amountCharge(2500),
        withdrawal: amountCharge(2500),
    },
    {
        low: 500001,
        high: 600000,
        intra: amountCharge(0),
        inter: amountCharge(4000),
        withdrawal: amountCharge(4000),
    },
    {
        low: 600001,
        high: 700000,
        intra: amountCharge(0),
        inter: amountCharge(4200),
        withdrawal: amountCharge(4200),
    },
    {
        low: 700001,
        high: 800000,
        intra: amountCharge(0),
        inter: amountCharge(4400),
        withdrawal: amountCharge(4400),
    },
    {
        low: 800001,
        high: 900000,
        intra: amountCharge(0),
        inter: amountCharge(4700),
        withdrawal: amountCharge(4700),
    },
    {
        low: 900001,
        high: 1000000,
        intra: amountCharge(0),
        inter: amountCharge(5000),
        withdrawal: amountCharge(5000),
    },
];
