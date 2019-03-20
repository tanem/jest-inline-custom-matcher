import '../extend-expect';

test('inline custom snapshot', () => {
  // @ts-ignore
  expect('extra long string oh my gerd').toMatchInlineCustomSnapshot();
});
