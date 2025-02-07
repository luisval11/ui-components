import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import FormControl from '../../src/components/FormControl';
import { mockPeriodOptions } from '../mock/DatePicker';

const currentMonthLabel = mockPeriodOptions[5].label;

const options = [
  { value: '1', label: 'First test option' },
  { value: '2', label: 'Second test option' },
];

describe('<FormControl>', () => {
  describe('input', function() {
    it('Should call mock function on change', () => {
      const mockCallBack = jest.fn();
      const { getByTestId } = render(
        <FormControl control="Input" onChange={mockCallBack} />
      );
      fireEvent.change(getByTestId('input-element'), {
        target: { value: 'new value' },
      });
      expect(mockCallBack).toBeCalled();
    });
    it('Should call mock function on focus', () => {
      const mockCallBack = jest.fn();
      const { getByTestId } = render(
        <FormControl control="Input" onFocus={mockCallBack} />
      );
      fireEvent.focus(getByTestId('input-element'));
      expect(mockCallBack).toBeCalled();
    });
    it('Should call mock function on blur', () => {
      const mockCallBack = jest.fn();
      const { getByTestId } = render(
        <FormControl control="Input" onBlur={mockCallBack} />
      );
      fireEvent.blur(getByTestId('input-element'));
      expect(mockCallBack).toBeCalled();
    });
  });
  describe('select', () => {
    it('Should render two options when user type matching words', () => {
      const { getByTestId, getAllByTestId } = render(
        <FormControl control="Select" options={options} />
      );
      const selectInput = getByTestId('select-input');
      fireEvent.change(selectInput, { target: { value: 'test option' } });
      expect(selectInput.value).toBe('test option');
      const selectOptions = getAllByTestId('select-option');
      expect(selectOptions).toHaveLength(2);
    });
  });

  describe('Color Picker', () => {
    it('Should call onChange when some color change through input', () => {
      const mockCallBack = jest.fn();
      const expectedColor = '#AAA';
      render(
        <FormControl
          control="ColorPicker"
          showInput
          onChangeInput={mockCallBack}
        />
      );
      fireEvent.change(screen.getByTestId('input-element'), {
        target: { value: expectedColor },
      });
      expect(mockCallBack).toHaveBeenCalled();
      expect(screen.getByTestId('input-element').value).toBe(expectedColor);
    });
  });

  describe('date picker', () => {
    it('Should call onChange when some date change', () => {
      const mockCallBack = jest.fn();
      render(
        <FormControl
          control="DatePicker"
          type="date"
          format="DD-MM-yyyy"
          onChange={mockCallBack}
        />
      );
      fireEvent.mouseDown(screen.getByTestId('antd-date-picker'));
      const todayLink = screen.getByText('Today');
      fireEvent.click(todayLink);
      expect(mockCallBack).toHaveBeenCalled();
    });
  });

  describe('legacy date picker', () => {
    it('Should call onDatesChange when some date change', () => {
      const mockCallBack = jest.fn();
      const { container, getByText } = render(
        <FormControl
          control="LegacyDatePicker"
          periodOptions={mockPeriodOptions}
          onDatesChange={mockCallBack}
        />
      );
      fireEvent.mouseDown(container.querySelector('.select-styled__control'));
      fireEvent.click(getByText(currentMonthLabel));
      expect(mockCallBack).toHaveBeenCalled();
    });
  });
});
