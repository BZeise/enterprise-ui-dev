import { test, expect, vi, beforeEach, afterEach } from 'vitest';
import { render } from 'test/utilities';
import TimeZone from '.';

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(1679492355195);
});

test('it should render successfully', () => {
  render(<TimeZone />);
});

test.fails('should match the snapshot', async () => {
  const { container } = render(<TimeZone />);
  expect(container).toMatchSnapshot();
});

afterEach(() => {
  vi.useRealTimers();
});