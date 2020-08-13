export interface DropdownOption<T = string> {
    name: string;
    value: T;
    selected?: boolean;
}
