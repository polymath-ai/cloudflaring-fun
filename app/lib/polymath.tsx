import { Config, ConfigType, ConfigHandler, JSONStore } from '@polymath-ai/configuration';

const environment_schema = {
  type: 'object',
  properties: {
    openai_api_key: { type: 'string' },
    library_filename: { type: 'string', default: '' },
  },
  required: ['openai_api_key'],
};

export type EnvironmentType = ConfigType<typeof environment_schema>;
export const Environment: ConfigHandler<EnvironmentType> = Config(environment_schema, 'env');

const load_env = async (): Promise<EnvironmentType> => {
  const store = new JSONStore('./secrets');
  return await store.load(Environment);
}

export { load_env };
