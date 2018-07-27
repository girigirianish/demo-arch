import { IsiModule } from './isi.module';

describe('IsiModule', () => {
  let isiModule: IsiModule;

  beforeEach(() => {
    isiModule = new IsiModule();
  });

  it('should create an instance', () => {
    expect(isiModule).toBeTruthy();
  });
});
