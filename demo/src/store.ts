import { createSignal, startTransition } from "solid-js";
import sampleContent from "./sample.content.json";

const [state, setState] = createSignal(typeof window !== 'undefined' && window?.localStorage.getItem('content') || sampleContent.content);
const [view, setView] = createSignal('home');

const setPersistentState = (newState: string) => {
  setState(newState);
  startTransition(() => {
    window.localStorage.setItem('content', newState);
  })
};
const clear = () => {
  setPersistentState(sampleContent.content);
}

export const useView = () => [view, setView] as [typeof view, typeof setView];
export const useState = () => [state, setPersistentState, clear] as [typeof state, typeof setState, typeof clear];
