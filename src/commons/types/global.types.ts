import { ChangeEvent, MouseEvent } from "react";

export type CustomMouseEvent = MouseEvent<HTMLElement>;
export type CustomChangeEvent = ChangeEvent<HTMLInputElement>;
export type CustomKeyboardEvent = React.KeyboardEvent<HTMLInputElement>;
export type CustomChangeEventTextArea = ChangeEvent<HTMLTextAreaElement>;
