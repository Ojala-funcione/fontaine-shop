/* eslint-disable no-useless-catch */
import axios from 'axios';
import {
  SiteSettingsApi,
  SiteSettingsResponse
} from './siteSettingsInterfaces';

const useAPISiteSettings = (): SiteSettingsApi => {
  const getSiteSettings = async (): Promise<SiteSettingsResponse> => {
    try {
      const response = await axios.get('https://url_base.com/algo');
      return response as unknown as SiteSettingsResponse;
    } catch (error) {
      throw error;
    }
  };
  const setSiteSettings = async (): Promise<SiteSettingsResponse> => {
    try {
      const response = await axios.post('https://url_base.com/algo', {
        qsy: 'algo'
      });
      return response as unknown as SiteSettingsResponse;
    } catch (error) {
      throw error;
    }
  };

  return {
    getSiteSettings,
    setSiteSettings
  };
};
export default useAPISiteSettings;
