import { CustomPipeDemoPipe } from './custom-pipe-demo.pipe';

describe('CustomPipeDemoPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomPipeDemoPipe();
    expect(pipe).toBeTruthy();
  });
});
