/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-env jest */
import setMetaStatic from '../setMetaStatic';


const TestField = 'testField';
const TestValue = 'testValue';

describe('setMetaStatic', () => {
  it('should return ActionTemplateEnhancer', () => {
    const enhancer = setMetaStatic(TestField, TestValue);

    expect(enhancer).toBeInstanceOf(Function);
  });

  it('should set specified field in `meta`', () => {
    const enhancer = setMetaStatic(TestField, TestValue);
    const template = { meta: {} };

    enhancer(template);

    expect(template.meta[TestField]).toBe(TestValue);
  });
});
