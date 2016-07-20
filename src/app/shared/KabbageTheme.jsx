import Colors from 'material-ui/lib/styles/colors';
import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import Spacing from 'material-ui/lib/styles/spacing';
import zIndex from 'material-ui/lib/styles/zIndex';

module.exports = {
spacing: Spacing,
    zIndex: zIndex,
fontFamily: 'Roboto, sans-serif',
palette: {
    primary1Color: Colors.lime400,
    primary2Color: Colors.blue800,
    primary3Color: Colors.white,
    accent1Color: Colors.blue800,
    accent2Color: Colors.lime400,
    accent3Color: Colors.white,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
    pickerHeaderColor: Colors.lime400,
  },
};