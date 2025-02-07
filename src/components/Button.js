/* eslint-disable import/no-cycle */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import { withTheme } from 'styled-components';
import omit from 'lodash/omit';

import theme from '../styles/theme';
import Icon, { getIconSize } from './Icon';
import Spinner from './Spinner';
import { Tooltip } from './Tooltip';

import { StyledButton } from '../styles/components/StyledButton';
import { StyledButtonGroup } from '../styles/components/StyledButtonGroup';
import withDataId from '../components/DataId/withDataId';

export const BUTTON_SIZE = ['small', 'medium', 'large', 'xlarge'];
export const BUTTON_VARIANT = [
  'primary',
  'secondary',
  'outline',
  'destructive',
  'link',
  'icon',
  'icon-secondary',
  'icon-outline',
];

const propTypes = {
  /**
   * Set the text of button
   */
  text: PropTypes.string,
  /**
   * Set the size of button
   */
  size: PropTypes.oneOf(BUTTON_SIZE).isRequired,
  /**
   * Set the style variant of the button
   */
  variant: PropTypes.oneOf(BUTTON_VARIANT).isRequired,
  /**
   * Set the icon before the text or children you have to set with our <a href="https://dexma.github.io/ui-components/?path=/docs/icon--sizes#icons">Icons</a>:
   */
  iconBefore: PropTypes.string,
  /**
   * Set the icon after the text or children you have to set with our <a href="https://dexma.github.io/ui-components/?path=/docs/icon--sizes#icons">Icons</a>:
   */
  iconAfter: PropTypes.string,
  /**
   * Set a color from <a href="https://dexma.github.io/ui-components/?path=/docs/colors--colors">color</a> or pass a HEX color #333 or #333333
   */
  iconColor: PropTypes.string,
  /**
   * Invoked once the button has been clicked.
   */
  tooltip: PropTypes.string,
  /**
   * Invoked once the button has been clicked.
   */
  onClick: PropTypes.func,
  /**
   * Invoked once the button has been focused.
   */
  onFocus: PropTypes.func,
  /**
   * State to set loader icon and status
   */
  isLoading: PropTypes.bool,
  /**
   * State to set the button disabled
   */
  isDisabled: PropTypes.bool,
  /**
   * Set the button with a circle style
   */
  isCircle: PropTypes.bool,
  /**
   * Set the button with a expanded style 100%
   */
  isExpanded: PropTypes.bool,
  /**
   * Set the time that you want to debounce a click
   */
  debounceTime: PropTypes.number,
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
  size: 'medium',
  variant: 'primary',
  isDisabled: false,
  isLoading: false,
  isExpanded: false,
  theme: theme,
  dataId: 'button',
};

const getButtonIconSize = size => {
  if (size === 'small') return 'small';
  if (size === 'medium') return 'medium';
  if (size === 'large') return 'large';
  if (size === 'xlarge') return 'large';
  return 'small';
};

export const ButtonGroup = props => {
  return <StyledButtonGroup {...props} />;
};

export const Button = forwardRef((props, ref) => {
  const {
    className,
    text,
    iconBefore,
    iconAfter,
    iconColor,
    tooltip,
    onClick,
    isDisabled,
    isExpanded,
    isLoading,
    size,
    debounceTime,
    children,
    dataId,
  } = props;
  const classes = classNames(isExpanded && 'expanded', className);
  const handleClick =
    debounceTime > 0 ? debounce(onClick, debounceTime) : onClick;
  const spinnerSize = getIconSize(size);
  const iconSize = getButtonIconSize(size);
  const buttonProps = omit(props, [
    'buttonRef',
    'iconBefore',
    'iconAfter',
    'debounceTime',
  ]);
  const getStyledButton = () => (
    <StyledButton
      ref={ref}
      onClick={handleClick}
      disabled={isDisabled}
      className={classes}
      data-testid="button"
      data-id={dataId}
      role="button"
      {...buttonProps}
    >
      {isLoading ? (
        <Spinner size={spinnerSize} data-testid="button-loading" />
      ) : null}
      {!isLoading && iconBefore ? (
        <Icon
          name={iconBefore}
          size={iconSize}
          color={iconColor}
          data-testid="button-icon-before"
        />
      ) : null}
      {text || null}
      {children || null}
      {!isLoading && iconAfter ? (
        <Icon
          name={iconAfter}
          size={iconSize}
          color={iconColor}
          data-testid="button-icon-after"
        />
      ) : null}
    </StyledButton>
  );
  return tooltip ? (
    <Tooltip title={tooltip}>{getStyledButton()}</Tooltip>
  ) : (
    getStyledButton()
  );
});

StyledButton.displayName = 'StyledButton';

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default withTheme(withDataId(Button));
