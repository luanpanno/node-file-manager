import prompt from 'prompt-sync';

export function input(value: string): any {
  return prompt()(value);
}
