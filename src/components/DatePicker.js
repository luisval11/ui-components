import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DateRangePicker } from 'react-dates';
import { withTheme } from 'styled-components';
import moment from 'moment';
import momentPropTypes from 'react-moment-proptypes';
import omit from 'lodash/omit';
import classNames from 'classnames';

import 'moment/locale/es';
import 'moment/locale/fr';
import 'moment/locale/ca';

import Icon from './Icon';
import Select from './Select';
import theme from '../styles/theme';

import {
  NUMBER_OF_MONTHS,
  START_DATE,
  END_DATE,
  DAY_SIZE,
  ISO_FORMAT,
  DATE_RANGE,
  currentMonth,
  last28Days,
  last7Days,
  lastMonth,
  previousYear,
  today,
  yearToDate,
  yesterday,
} from '../utils/dates';

import 'react-dates/initialize';

import { StyledDatePicker } from '../styles/components/StyledDatePicker';
import withDataId from '../components/DataId/withDataId';
import AntdPicker from './AntdPicker';

const withDatePickerFormat = (start, end) => ({
  startDate: start,
  endDate: end,
});

const custom = () => withDatePickerFormat(null, null);

const datePickerRange = (range, parser = date => date) => {
  if (range === DATE_RANGE.TODAY) return today(parser);
  if (range === DATE_RANGE.YESTERDAY) return yesterday(parser);
  if (range === DATE_RANGE.LAST_7_DAYS) return last7Days(parser);
  if (range === DATE_RANGE.LAST_28_DAYS) return last28Days(parser);
  if (range === DATE_RANGE.CURRENT_MONTH) return currentMonth(parser);
  if (range === DATE_RANGE.LAST_MONTH) return lastMonth(parser);
  if (range === DATE_RANGE.YEAR_TO_DATE) return yearToDate(parser);
  if (range === DATE_RANGE.PREVIOUS_YEAR) return previousYear(parser);
  if (range === DATE_RANGE.CUSTOM) return custom();
  return null;
};

const propTypes = {
  /**
   * Set the input auto focused
   */
  autoFocus: PropTypes.bool,
  /**
   * Set the input end date auto focused
   */
  autoFocusEndDate: PropTypes.bool,
  /**
   * Function to mapper the start date when date change
   */
  stateDateWrapper: PropTypes.func,
  /**
   * The period option default selected, we use a select so please check the <a href="https://dexma.github.io/ui-components/?path=/docs/select--select">Select section</a>
   */
  periodOptions: PropTypes.arrayOf(PropTypes.shape({})),
  /**
   * The period option default selected, we use a select so please check the <a href="https://dexma.github.io/ui-components/?path=/docs/select--select">Select section</a>
   */
  periodDefault: PropTypes.objectOf(PropTypes.string),
  /**
   * The period label we use on the select
   */
  periodLabel: PropTypes.string,
  /**
   * Set the start date
   */
  initialStartDate: momentPropTypes.momentObj,
  /**
   * Set the end date
   */
  initialEndDate: momentPropTypes.momentObj,
  /**
   * Function called when a date change
   */
  onDatesChange: PropTypes.func,
  /**
   * Language for set all the dates inside component we use moment.locale(language) so please see the <a href="https://momentjs.com/docs/#/i18n/changing-locale/">moment documentation</a>
   */
  language: PropTypes.string,
  /**
   * Theme json based
   */
  theme: PropTypes.shape({}),
  /**
   * data-id attribute to identfy the element in DOM
   */
  dataId: PropTypes.string,
};

const defaultProps = {
  autoFocus: false,
  autoFocusEndDate: false,
  stateDateWrapper: date => date,
  startDateId: START_DATE,
  endDateId: END_DATE,
  numberOfMonths: NUMBER_OF_MONTHS,
  language: 'en',
  theme: theme,
  dataId: 'datepicker',
};

export const DatePicker = props => {
  let focusedInputInitialState = null;
  if (props.autoFocus) {
    focusedInputInitialState = START_DATE;
  } else if (props.autoFocusEndDate) {
    focusedInputInitialState = END_DATE;
  }
  const [focusedInput, setFocusedInput] = useState(focusedInputInitialState);
  const [date, setDate] = useState({
    startDate: props.initialStartDate,
    endDate: props.initialEndDate,
  });
  const {
    periodOptions,
    periodDefault,
    periodLabel,
    language,
    theme,
    dataId,
    variant,
  } = props;
  const dateRangePickerProps = omit(props, [
    'className',
    'options',
    'message',
    'autoFocus',
    'autoFocusEndDate',
    'initialStartDate',
    'initialEndDate',
    'stateDateWrapper',
    'periodOptions',
    'periodDefault',
    'language',
    'periodLabel',
    'variant',
    'dataId',
  ]);
  useEffect(() => {
    moment.locale(language);
  }, [language]);
  useEffect(() => {
    const ranges =
      periodDefault && periodDefault.value
        ? datePickerRange(periodDefault.value, withDatePickerFormat)
        : null;
    // eslint-disable-next-line no-unused-expressions
    ranges && handleDatesChange(ranges);
  }, [periodDefault]);
  const onFocusChange = focusedInput => {
    setFocusedInput(focusedInput);
  };
  const onSelectChange = ({ value }) => {
    const ranges = datePickerRange(value, withDatePickerFormat);
    if (value === 'custom') {
      onFocusChange(START_DATE);
    }
    handleDatesChange(ranges);
  };
  const handleDatesChange = ({ startDate, endDate }) => {
    const { stateDateWrapper, onDatesChange } = props;
    const start = startDate ? stateDateWrapper(startDate) : null;
    const end = endDate ? stateDateWrapper(endDate) : null;
    const date = { startDate: start, endDate: end };
    setDate(date);
    onDatesChange && onDatesChange(date);
  };
  const getWeekHeaderElement = day => (
    <small>
      {moment(day)
        .locale(language)
        .format('dd')}
    </small>
  );

  const classes = classNames('date-range', periodOptions && `with-select`);
  const { startDate, endDate } = date;
  moment.locale(language);
  return (
    <>
      {variant === 'legacy' ? (
        <StyledDatePicker
          theme={theme}
          focusedInput={focusedInput}
          withSelect={periodOptions}
          data-id={dataId}
        >
          <div className={classes}>
            <DateRangePicker
              {...dateRangePickerProps}
              weekDayFormat="YYYY-MM-DD HH:mm:ss" // We set with this format, because we handle manually the week element in renderWeekHeaderElement
              renderWeekHeaderElement={getWeekHeaderElement}
              startDate={startDate}
              endDate={endDate}
              focusedInput={focusedInput}
              onDatesChange={handleDatesChange}
              onFocusChange={onFocusChange}
              noBorder
              daySize={DAY_SIZE}
              horizontalMonthPadding={10}
              transitionDuration={0}
              hideKeyboardShortcutsPanel
              isOutsideRange={() => false}
              customArrowIcon={<Icon name="arrow_right" size="small" />}
              displayFormat={ISO_FORMAT}
              minimumNights={0}
              customInputIcon={
                <Icon name="calendar_range" size="xlarge" color="gray500" />
              }
              navPrev={<Icon name="chevron_left_l" size={10} color="gray600" />}
              navNext={
                <Icon name="chevron_right_l" size={10} color="gray600" />
              }
            />
          </div>
          {periodOptions && (
            <div className="select">
              <Select
                options={periodOptions}
                defaultValue={periodDefault}
                placeholder={periodLabel}
                onChange={onSelectChange}
                isSearchable={false}
              />
            </div>
          )}
        </StyledDatePicker>
      ) : (
        <AntdPicker {...props} />
      )}
    </>
  );
};

StyledDatePicker.displayName = 'StyledDatePicker';

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

export default withTheme(withDataId(DatePicker));
