import Validator from '../app';

test.each([
  ['testUsername', true],
  ['test433Username', true],
  ['test-Username', true],
  ['test_Username', true],
  ['test555Username', true],
  ['test5555Username', false],
  ['1testUsername', false],
  ['testUsername1', false],
  ['TESTUSERNAME', true],
  ['_testUsername', false],
  ['testUsername_', false],
  ['-testUsername', false],
  ['testUsername-', false],
])('check username', (username, expectedResult) => {
  const validatename = new Validator(username);
  expect(validatename.validateUsername(username)).toBe(expectedResult);
});
