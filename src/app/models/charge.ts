export interface TariffCharge {
    type: TariffChargeType;
    /** A function that receives an amount and returns a value adjusted for the tariff. */
    value: (amount: number) => number;
    // chargeFromAmount?: (amount: number) => number;
}

export interface Tariff {
    low: number;
    high: number;
    fee: number;
    feeType: FeeType;
    /** Intra network charge */
    // intra: TariffCharge;
    /** Inter network charge */
    // inter: TariffCharge;
    /** Withdrawal charge */
    // withdrawal: TariffCharge;
}

export type TariffChargeType = 'fixed' | 'percentage' | 'free' | 'unknown';
export type FeeType = 'fixed' | 'percentage' | 'free' | 'unknown';

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

export const resolveFeeForTariff = (tariff: Tariff, amount) => {
    switch (tariff.feeType) {
        case 'percentage':
            const computedPercentage = tariff.fee / 100;
            return (computedPercentage * amount) + ' XAF';

        case 'fixed':
            return tariff.fee + ' XAF';

        case 'free':
            return 'FREE';

        case 'unknown':
            return 'N/A';
    }
};


export const mtnTariffs: Tariff[] = [

];

export const orangeTariffs: Tariff[] = [];

export const expressUnionTariffs: Tariff[] = [];
