import { isAndroid } from '../utils/platformUtil';

export const fontFamilies = {
  POPPINS: {
    normal: isAndroid() ? 'Poppins-Regular' : 'PoppinsRegular',
    medium: isAndroid() ? 'Poppins-Medium' : 'PoppinsMedium',
    bold: isAndroid() ? 'Poppins-Bold' : 'PoppinsBold',
  },
};