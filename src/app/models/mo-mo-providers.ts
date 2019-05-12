import {IDropdownOption} from './dropdown-option';

export enum MoMoProvider {
    MTN = 'mtn',
    ORANGE = 'orange',
    EU = 'eu',
}

export const MoMoProviders: IDropdownOption<MoMoProvider>[] = [
    {
        name: 'MTN',
        value: MoMoProvider.MTN,
    },
    {
        name: 'Orange',
        value: MoMoProvider.ORANGE,
    },
    {
        name: 'Express Union',
        value: MoMoProvider.ORANGE,
    },
];
