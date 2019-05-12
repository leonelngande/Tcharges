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

export const chargeAmountFromPercent = (percent: number, amount: number) => {
    return amount * percent;
};

export type ChargeType = 'amount' | 'percentage' | 'unknown';

const percentCharge = (value: number): ICharge => {
    return {
        type: 'percentage',
        value: value / 100,
        chargeFromAmount: function(amount: number) {
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

    constructor (tariff: ITariff, provider: MoMoProvider, amount: number) {
        this.tariff = tariff;
        this.provider = provider;
        this.amount = amount;
    }
}

export const MtnTariffs: ITariff[] = [
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
