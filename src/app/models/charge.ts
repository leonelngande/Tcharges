export interface TariffCharge {
    type: TariffChargeType;
    /** A function that receives an amount and returns a value adjusted for the tariff. */
    value: (amount: number) => number;
    // chargeFromAmount?: (amount: number) => number;
}

export interface Tariff {
    low: number;
    high: number;
    /** Intra network charge */
    intra: TariffCharge;
    /** Inter network charge */
    inter: TariffCharge;
    /** Withdrawal charge */
    withdrawal: TariffCharge;
}

export type TariffChargeType = 'fixed' | 'percentage' | 'free' | 'unknown';

export const percentCharge = (percentage: number): TariffCharge => {
    return {
        type: 'percentage',
        value: (amount: number) => {
            const computedPercentage = percentage / 100;
            return computedPercentage * amount;
        },
    };
};
export const fixedCharge = (charge: number): TariffCharge => {
    return {
        type: 'fixed',
        value: (amount) => charge,
    };
};
export const unknownCharge = (): TariffCharge => {
    return {
        type: 'unknown',
        value: (amount) => null,
    };
};


export const mtnTariffs: Tariff[] = [

];

export const orangeTariffs: Tariff[] = [];

export const expressUnionTariffs: Tariff[] = [];
