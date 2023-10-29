import { classNames } from './classNames';

describe('classNames function', () => {
  it('should return the base class when no modifiers or additional classes are provided', () => {
    const result = classNames('baseClass');
    expect(result).toBe('baseClass');
  });

  it('should include additional classes when provided', () => {
    const result = classNames('baseClass', {}, ['extraClass1', 'extraClass2']);
    expect(result).toBe('baseClass extraClass1 extraClass2');
  });

  it('should include modifiers when provided', () => {
    const mods = { modifier1: true, modifier2: false };
    const result = classNames('baseClass', mods);
    expect(result).toBe('baseClass modifier1');
  });
});
