import { IGenericClass } from "./base-command.js";
export { BaseCommand, IGenericClass, IArgument, IOption } from "./base-command.js";
export declare class ExpressCli {
    program: import("commander").Command;
    constructor(name: string, version: string);
    register(NewCommand: IGenericClass): void;
    build(): void;
}
