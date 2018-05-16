import { StatusconvertPipe } from './statusconvert.pipe';

describe('StatusconvertPipe', () => {
  it('create an instance', () => {
    const pipe = new StatusconvertPipe();
    expect(pipe).toBeTruthy();
  });
  it('check approved status', () => {
    const pipe = new StatusconvertPipe();
    const result = pipe.transform("APPROVED");
    expect(result).toBe('green');
  });
});
