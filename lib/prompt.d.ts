import { QuestionCollection } from "inquirer";
export declare class Prompt {
    static prompt<T>(questions: QuestionCollection<T>, initialAnswers?: Partial<T>): Promise<T>;
    static separator(): import("inquirer/lib/objects/separator");
}
