import {Tariff} from '../models/charge';

export const findTariffForAmount = (amount: number, tariffsList: Tariff[]) => {
    return tariffsList.find(tariff => {
        return amount >= tariff.low && amount <= tariff.high;
    });
};
