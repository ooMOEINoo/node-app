import 'express-session';

declare module 'express-session' {
    interface SessionData {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        user?: { [key: string]: any };
    }
}
