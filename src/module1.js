const b = '1111';

export function module11(a = '') {
  return a + 1;
}

export function module12(a) {
  console.info('...', a);
}

export function module13() {
  console.info('...', b);
}
