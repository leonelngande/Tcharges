export interface IDropdownOption<T = string> {
    name: string;
    value: T;
    selected?: boolean;
}
