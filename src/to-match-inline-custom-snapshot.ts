import { toMatchInlineSnapshot } from 'jest-snapshot';

export function toMatchInlineCustomSnapshot(received) {
  return toMatchInlineSnapshot.call(this, received);
}
