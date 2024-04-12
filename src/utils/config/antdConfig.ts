import { theme, ThemeConfig } from 'antd';

const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: '#091e6a',
    colorText: 'rgb(26,32,26)',
    colorError: '#ff7875',
    fontWeightStrong: 10,
    fontFamilyCode: 'Poppins',
    colorLink: 'black',
    colorLinkHover: '#091e6a',
    colorLinkActive: '#091e6a',
  },
  components: {
    Button: {
      defaultBg: '#091e6a',
      // colorPrimaryBg:'#091e6a',
      // groupBorderColor:'#091e6a',
      controlHeight: 40,
      // fontWeight: 'bold',
      colorText: 'white',
      // textHoverBg: 'white'
    },
    Input: {
      controlHeight: 32,
      controlHeightLG: 45,
      controlHeightSM: 24,
    },
    Menu: {
      lineHeight: 1,
    },
    Card: {
      colorBorder: '#091e6a',
    },
  },
};

export default antdTheme;
