export declare type Path = string[];
export declare type Warning = string;
export declare type PathWarning = (path: Path) => Warning;
export declare type Rule = (data: any, path: Path) => Warning[];
export declare const pathString: (path: string[]) => string;
export declare const warn: (msg?: string) => PathWarning;
export declare const composeRules: (rules: Rule[]) => Rule;
export declare const first: (preReq: Rule, postReq: Rule) => Rule;
export declare const checkBoolWarning: (data: any) => PathWarning;
export declare const checkBool: (checker: (data: any) => boolean, warning?: (data: any) => PathWarning) => Rule;
export declare const checkThrowWarning: (data: any, ex: Error) => PathWarning;
export declare const checkThrow: (checker: (data: any) => any, warning?: (data: any, ex: Error) => PathWarning) => Rule;
export declare const checkTypeWarning: (type: string) => (data: any) => PathWarning;
export declare const checkType: (type: any, warning?: (type: string) => (data: any) => PathWarning) => Rule;
export declare const checkRegexWarning: (data: any) => PathWarning;
export declare const checkRegex: (regex: RegExp, regexWarning?: (data: any) => PathWarning, stringWarning?: (type: string) => (data: any) => PathWarning) => Rule;
export declare const optional: (rule: Rule) => Rule;
export declare const requiredWarning: PathWarning;
export declare const required: (rule: Rule, warning?: PathWarning) => Rule;
export declare const invalidKeyWarning: (invalidKeys: string[]) => PathWarning;
export declare const restrictToKeys: (keys: string[], warning?: (invalidKeys: string[]) => PathWarning, objectWarning?: (type: string) => (data: any) => PathWarning) => Rule;
export declare type Schema = {
    [key: string]: Rule;
};
export declare const hasSchema: (schema: Schema, objectWarning?: (type: string) => (data: any) => PathWarning) => Rule;
export declare const restrictToSchema: (schema: Schema, objectWarning?: (type: string) => (data: any) => PathWarning, keyWarning?: (invalidKeys: string[]) => PathWarning) => Rule;
export declare const restrictToCollection: (rule: (index: number) => Rule, arrayWarning?: (type: string) => (data: any) => PathWarning) => Rule;