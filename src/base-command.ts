import { IArgument, ICommand, IOption, IOptionBoolean } from "./command.js";

export interface IParsedOptions {
  [key: string]: string | boolean;
}
export interface IParsedArguments {
  [key: string]: string;
}

export abstract class BaseCommand {
  public opts: IParsedOptions = {};
  public args: IParsedArguments = {};

  public name: string;
  public alias: string[];
  public description: string;
  public summary: string;
  public arguments: Array<IArgument>;
  public options: Array<IOption | IOptionBoolean>;

  constructor(command: ICommand) {
    this.name = command.name;
    this.alias = command.alias ?? [];
    this.description = command.description;
    this.summary = command.summary;
    this.arguments = command.arguments;
    this.options = command.options;
  }

  abstract handle(): void | Promise<void>;
}
