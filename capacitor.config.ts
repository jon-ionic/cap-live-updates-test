import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.jon',
  appName: 'cap-live-updates-test',
  webDir: 'www',
  plugins: {
    LiveUpdates: {
      appId: 'ee10ceb0',
      channel: 'Production',
      autoUpdateMethod: 'background',
      maxVersions: 2,
      key: 'ionic_cloud_public.pem'
    }
  }
};

export default config;
