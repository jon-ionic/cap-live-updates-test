import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.jon',
  appName: 'cap-live-updates-test',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    LiveUpdates: {
      appId: 'b7a8b20a',
      channel: 'Production',
      autoUpdateMethod: 'background',
      maxVersions: 2,
      key: 'ionic_cloud_public.pem'
    }
  }
};

export default config;
