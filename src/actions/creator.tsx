export type Action<T> = { type: string; payload: T; };
export type Creator<T> = (payload: T) => Action<T>;
export type Factory<T> = { type: string; } & Creator<T>;

export function isType<T>(creator: Factory<T>, action: Action<any>): action is Action<T> {
    return creator.type === action.type;
}
export function isAnyType<T>(action: Action<any>, ...types: Factory<T>[]): action is Action<T> {
    return types.some((creator) => creator.type === action.type);
}

export default function <T>(type: string): Factory<T> {
    const f = ((payload: T) => ({ type, payload })) as Factory<T>;
    f.type = type;
    return f;
}
