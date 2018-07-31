import { FeaturesModule } from './core-components.module';

describe('FeaturesModule', () => {
  let featuresModule: FeaturesModule;

  beforeEach(() => {
    featuresModule = new FeaturesModule();
  });

  it('should create an instance', () => {
    expect(featuresModule).toBeTruthy();
  });
});
