import { Command } from "commander";

export interface IGenericClass {
  new (program: Command): void;
}

export interface IArgument {
  name: string;
  description?: string;
  default?: unknown;
}

export interface IOption {
  flags: string;
  description?: string;
  default?: string;
}

export interface IAttribute {
  name: string;
  description: string;
  summary: string;
  arguments: Array<IArgument>;
  options: Array<IOption>;
}

export abstract class BaseCommand extends Command {
  private program: Command;

  constructor(program: Command) {
    super();
    this.program = program;
    const command = this.program.command(this.attribute().name);
    command.description(this.attribute().description);
    command.summary(this.attribute().summary);
    for (let index = 0; index < this.attribute().arguments.length; index++) {
      command.argument(
        this.attribute().arguments[index].name,
        this.attribute().arguments[index]?.description,
        this.attribute().arguments[index]?.default
      );
    }
    for (let index = 0; index < this.attribute().options.length; index++) {
      command.option(
        this.attribute().options[index].flags,
        this.attribute().options[index]?.description,
        this.attribute().options[index]?.default
      );
    }
    command.action(this.handle);
  }

  abstract attribute(): IAttribute;

  abstract handle(...params: Array<unknown>): void | Promise<void>;
}
