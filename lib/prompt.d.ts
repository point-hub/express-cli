import prompts from "prompts";
export declare class Prompt {
    static ask<T extends string>(questions: prompts.PromptObject<T> | Array<prompts.PromptObject<T>>, options?: prompts.Options): Promise<prompts.Answers<T>>;
}
