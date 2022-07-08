import prompts from "prompts";

export class Prompt {
  static async ask<T extends string>(
    questions: prompts.PromptObject<T> | Array<prompts.PromptObject<T>>,
    options?: prompts.Options
  ): Promise<prompts.Answers<T>> {
    return prompts(questions, options);
  }
}
