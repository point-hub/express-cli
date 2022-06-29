import { ExpressCli } from "../index.js";
import { GreetCommand } from "./commands/greet.command.js";

/**
 * Register the commands for the application.
 *
 * @example
 * command.register(ExampleCommand);
 */
export function commands(command: ExpressCli): void {
  command.register(new GreetCommand());
}
