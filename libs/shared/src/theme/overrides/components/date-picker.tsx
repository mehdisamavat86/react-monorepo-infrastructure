import { Icon } from '@myapp/shared/components';
import { buttonClasses } from '@mui/material';
import { Theme } from '@mui/material/styles';

const dateList = [
  'DatePicker',
  'DateTimePicker',
  'StaticDatePicker',
  'DesktopDatePicker',
  'DesktopDateTimePicker',
  //
  'MobileDatePicker',
  'MobileDateTimePicker',
];

const timeList = [
  'TimePicker',
  'MobileTimePicker',
  'StaticTimePicker',
  'DesktopTimePicker',
];

const switchIcon = () => <Icon name="chevron-down" />;

const leftIcon = () => <Icon name="chevron-left" />;

const rightIcon = () => <Icon name="chevron-right" />;

const calendarIcon = () => <Icon name="calendar" />;

const clockIcon = () => <Icon name="clock-fill" />;

const desktopTypes = dateList.reduce(
  (result: Record<string, any>, currentValue) => {
    result[`Mui${currentValue}`] = {
      defaultProps: {
        slots: {
          openPickerIcon: calendarIcon,
          leftArrowIcon: leftIcon,
          rightArrowIcon: rightIcon,
          switchViewIcon: switchIcon,
        },
      },
    };

    return result;
  },
  {}
);

const timeTypes = timeList.reduce(
  (result: Record<string, any>, currentValue) => {
    result[`Mui${currentValue}`] = {
      defaultProps: {
        slots: {
          openPickerIcon: clockIcon,
          rightArrowIcon: rightIcon,
          switchViewIcon: switchIcon,
        },
      },
    };

    return result;
  },
  {}
);

export default function DatePicker(theme: Theme) {
  return {
    MuiPickersLayout: {
      styleOverrides: {
        root: {
          '& .MuiPickersLayout-actionBar': {
            [`& .${buttonClasses.root}:last-of-type`]: {
              backgroundColor: theme.palette.text.primary,
              color:
                theme.palette.mode === 'light'
                  ? theme.palette.common.white
                  : theme.palette.grey[800],
            },
          },
        },
      },
    },

    // Date
    ...desktopTypes,

    // Time
    ...timeTypes,
  };
}
