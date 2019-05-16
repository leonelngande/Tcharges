import {IDropdownOption} from './dropdown-option';

export enum MoMoProvider {
    MTN = 'mtn',
    ORANGE = 'orange',
    EU = 'eu',
}

export const moMoProviders: IDropdownOption<MoMoProvider>[] = [
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
        value: MoMoProvider.EU,
    },
];
