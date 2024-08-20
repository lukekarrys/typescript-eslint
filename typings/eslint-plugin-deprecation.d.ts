declare module 'eslint-plugin-deprecation' {
  import type {
    ClassicConfig,
    Linter,
  } from '@typescript-eslint/utils/ts-eslint';

  const exprt: {
    configs: { recommended: ClassicConfig.Config };
    rules: NonNullable<Linter.Plugin['rules']>;
  };
  export = exprt;
}
