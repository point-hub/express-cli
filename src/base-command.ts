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

export abstract class BaseCommand extends Command {
  private program: Command;

  constructor(program: Command) {
    super();
    this.program = program;
    const command = this.program.command(this.cmdName());
    command.description(this.cmdDescription());
    command.summary(this.cmdSummary());
    for (let index = 0; index < this.cmdArguments().length; index++) {
      command.argument(
        this.cmdArguments()[index].name,
        this.cmdArguments()[index]?.description,
        this.cmdArguments()[index]?.default
      );
    }
    for (let index = 0; index < this.cmdOptions().length; index++) {
      command.option(
        this.cmdOptions()[index].flags,
        this.cmdOptions()[index]?.description,
        this.cmdOptions()[index]?.default
      );
    }
    command.action(this.handle);
  }

  abstract cmdName(): string;

  abstract cmdDescription(): string;

  abstract cmdSummary(): string;

  abstract cmdArguments(): Array<IArgument>;

  abstract cmdOptions(): Array<IOption>;

  abstract handle(...params: Array<string>): void | Promise<void>;
}
