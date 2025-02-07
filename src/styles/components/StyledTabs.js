import styled from 'styled-components';

import {
  backgroundColor,
  primaryColor,
  gray200,
  gray500,
  gray700,
  white,
  fontWeightNormal,
  fontWeightBold,
  tabFontSize,
} from '../selectors';

const StyledTabs = styled.div`
  height: ${props => (props.variant === 'scrollable' ? '100%' : 'auto')};

  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab {
    height: 40px;
    margin: 0;
    margin-right: 2px;
    padding: 0 16px;
    line-height: 38px;
    background: ${white};
    border: 1px solid ${gray200};
    border-radius: 4px 4px 0 0;
    -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active {
    height: 40px;
    color: ${primaryColor};
    background: ${white};
    border-color: ${gray200};
    border-bottom: 1px solid ${white};
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-disabled {
    color: ${primaryColor};
  }
  .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab .ant-tabs-close-x {
    width: 16px;
    height: 16px;
    height: 14px;
    margin-right: -5px;
    margin-left: 3px;
    overflow: hidden;
    color: ${gray500};
    font-size: ${tabFontSize};
    vertical-align: middle;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  .ant-tabs.ant-tabs-card
    .ant-tabs-card-bar
    .ant-tabs-tab
    .ant-tabs-close-x:hover {
    color: ${gray500};
  }
  .ant-tabs-extra-content .ant-tabs-new-tab {
    position: relative;
    width: 20px;
    height: 20px;
    color: ${gray500};
    font-size: ${tabFontSize};
    line-height: 20px;
    text-align: center;
    border: 1px solid ${gray200};
    border-radius: 2px;
    cursor: pointer;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  .ant-tabs-extra-content .ant-tabs-new-tab:hover {
    color: ${primaryColor};
    border-color: ${primaryColor};
  }
  .ant-tabs-vertical.ant-tabs-card
    .ant-tabs-card-bar.ant-tabs-left-bar
    .ant-tabs-tab,
  .ant-tabs-vertical.ant-tabs-card
    .ant-tabs-card-bar.ant-tabs-right-bar
    .ant-tabs-tab {
    margin-bottom: 8px;
    border-bottom: 1px solid ${gray200};
  }
  .ant-tabs .ant-tabs-card-bar.ant-tabs-bottom-bar .ant-tabs-tab {
    height: auto;
    border-top: 0;
    border-bottom: 1px solid ${gray200};
    border-radius: 0 0 4px 4px;
  }
  .ant-tabs .ant-tabs-card-bar.ant-tabs-bottom-bar .ant-tabs-tab-active {
    padding-top: 1px;
    padding-bottom: 0;
    color: ${primaryColor};
  }
  .ant-tabs {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${gray500};
    font-size: ${tabFontSize};
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    -webkit-font-feature-settings: 'tnum';
    font-feature-settings: 'tnum';
    position: relative;
    overflow: hidden;
    zoom: 1;
  }
  .ant-tabs-ink-bar {
    position: absolute;
    bottom: 1px;
    left: 0;
    z-index: 1;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 2px;
    background-color: ${primaryColor};
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
  }
  .ant-tabs-bar {
    margin: 0 0 16px 0;
    border-bottom: 1px solid ${gray200};
    outline: none;
    -webkit-transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .ant-tabs-nav-container {
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-bottom: -1px;
    overflow: hidden;
    font-size: ${tabFontSize};
    line-height: 1.5;
    white-space: nowrap;
    -webkit-transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    zoom: 1;
  }
  .ant-tabs-bottom .ant-tabs-bottom-bar {
    margin-top: 16px;
    margin-bottom: 0;
    border-top: 1px solid ${gray200};
    border-bottom: none;
  }
  .ant-tabs-tab-prev,
  .ant-tabs-tab-next {
    position: absolute;
    z-index: 2;
    width: 0;
    height: 100%;
    color: ${gray500};
    text-align: center;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    opacity: 0;
    -webkit-transition: width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    pointer-events: none;
  }
  .ant-tabs-tab-prev:hover,
  .ant-tabs-tab-next:hover {
    color: ${gray500};
  }
  .ant-tabs-tab-prev-icon,
  .ant-tabs-tab-next-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    font-weight: ${fontWeightBold};
    font-style: normal;
    font-variant: normal;
    line-height: inherit;
    text-align: center;
    text-transform: none;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .ant-tabs-tab-prev-icon-target,
  .ant-tabs-tab-next-icon-target {
    display: block;
    display: inline-block;
    font-size: ${tabFontSize};
    font-size: 10px \\9;
    -webkit-transform: scale(0.83333333) rotate(0deg);
    -ms-transform: scale(0.83333333) rotate(0deg);
    transform: scale(0.83333333) rotate(0deg);
  }
  :root .ant-tabs-tab-prev-icon-target,
  :root .ant-tabs-tab-next-icon-target {
    font-size: ${tabFontSize};
  }
  .ant-tabs-tab-btn-disabled,
  .ant-tabs-tab-btn-disabled:hover {
    color: ${gray500};
  }
  .ant-tabs-nav {
    position: relative;
    -webkit-box-sizing: border-box;
    width: ${props => (props.variant === 'scrollable' ? '100%' : 'auto')};
    box-sizing: border-box;
    margin: ${props =>
      props.variant === 'scrollable' ? '0' : '0px 0px 16px 0px'};
    padding-left: 0;
    list-style: none;
    border-bottom: 1px solid rgb(222, 224, 226);
    -webkit-transition: -webkit-transform 0.3s
      cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
      -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .ant-tabs-tab {
    flex: ${props => (props.variant === 'scrollable' ? '1 1 auto' : null)};

    text-align: ${props => (props.variant === 'scrollable' ? 'center' : null)};
    font-size: ${props => (props.variant === 'scrollable' ? '14px' : null)};
  }

  .ant-tabs-nav div:first-of-type {
    display: ${props => (props.variant === 'scrollable' ? 'flex' : null)};
  }
  .ant-tabs-nav .ant-tabs-tab:hover {
    color: ${props =>
      props.variant === 'scrollable' ? gray700 : primaryColor};
  }
  .ant-tabs-nav .ant-tabs-tab:active {
    color: ${primaryColor};
  }
  .ant-tabs-nav .ant-tabs-tab-active {
    font-weight: ${fontWeightNormal};
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${primaryColor};
    text-shadow: 0 0 0.25px currentcolor;
  }
  .ant-tabs-content-holder {
    overflow: ${props => (props.variant === 'scrollable' ? 'auto' : null)};
  }
  .ant-tabs-nav .ant-tabs-tab-disabled,
  .ant-tabs-nav .ant-tabs-tab-disabled:hover {
    color: ${gray500};
    cursor: not-allowed;
  }
  .ant-tabs .ant-tabs-large-bar .ant-tabs-nav-container {
    font-size: ${tabFontSize};
  }
  .ant-tabs .ant-tabs-small-bar .ant-tabs-nav-container {
    font-size: ${tabFontSize};
  }
  .ant-tabs .ant-tabs-left-bar {
    float: left;
    margin-right: -1px;
    margin-bottom: 0;
    border-right: 1px solid ${gray200};
  }
  .ant-tabs .ant-tabs-left-content {
    padding-left: 24px;
    border-left: 1px solid ${gray200};
  }
  .ant-tabs .ant-tabs-right-bar {
    float: right;
    margin-bottom: 0;
    margin-left: -1px;
    border-left: 1px solid ${gray200};
  }
  .ant-tabs .ant-tabs-right-content {
    padding-right: 24px;
    border-right: 1px solid ${gray200};
  }
  .ant-tabs {
    height: ${props => (props.variant === 'scrollable' ? '100%' : 'auto')};
    display: ${props => (props.variant === 'scrollable' ? 'flex' : null)};
    flex-direction: ${props =>
      props.variant === 'scrollable' ? 'column' : null};
  }

  .ant-tabs-content {
    flex: ${props => (props.variant === 'scrollable' ? '1 1 auto' : null)};
    overflow: ${props => (props.variant === 'scrollable' ? 'auto' : null)};
  }
  .ant-tabs-small > .ant-tabs-nav .ant-tabs-tab {
    padding: 8px 0;
    font-size: 14px;
  }
  .ant-tabs-large > .ant-tabs-nav .ant-tabs-tab {
    padding: 16px 0;
    font-size: 16px;
  }
  .ant-tabs-card.ant-tabs-small > .ant-tabs-nav .ant-tabs-tab {
    padding: 6px 16px;
  }
  .ant-tabs-card.ant-tabs-large > .ant-tabs-nav .ant-tabs-tab {
    padding: 7px 16px 6px;
  }
  .ant-tabs-rtl {
    direction: rtl;
  }
  .ant-tabs-rtl .ant-tabs-nav .ant-tabs-tab {
    margin: 0 0 0 32px;
  }
  .ant-tabs-rtl .ant-tabs-nav .ant-tabs-tab:last-of-type {
    margin-left: 0;
  }
  .ant-tabs-rtl .ant-tabs-nav .ant-tabs-tab .anticon {
    margin-right: 0;
    margin-left: 12px;
  }
  .ant-tabs-rtl .ant-tabs-nav .ant-tabs-tab .ant-tabs-tab-remove {
    margin-right: 8px;
    margin-left: -4px;
  }
  .ant-tabs-rtl .ant-tabs-nav .ant-tabs-tab .ant-tabs-tab-remove .anticon {
    margin: 0;
  }
  .ant-tabs-rtl.ant-tabs-left > .ant-tabs-nav {
    order: 1;
  }
  .ant-tabs-rtl.ant-tabs-left > .ant-tabs-content-holder {
    order: 0;
  }
  .ant-tabs-rtl.ant-tabs-right > .ant-tabs-nav {
    order: 0;
  }
  .ant-tabs-rtl.ant-tabs-right > .ant-tabs-content-holder {
    order: 1;
  }
  .ant-tabs-rtl.ant-tabs-card.ant-tabs-top
    > .ant-tabs-nav
    .ant-tabs-tab
    + .ant-tabs-tab,
  .ant-tabs-rtl.ant-tabs-card.ant-tabs-bottom
    > .ant-tabs-nav
    .ant-tabs-tab
    + .ant-tabs-tab,
  .ant-tabs-rtl.ant-tabs-card.ant-tabs-top
    > div
    > .ant-tabs-nav
    .ant-tabs-tab
    + .ant-tabs-tab,
  .ant-tabs-rtl.ant-tabs-card.ant-tabs-bottom
    > div
    > .ant-tabs-nav
    .ant-tabs-tab
    + .ant-tabs-tab {
    margin-right: 2px;
    margin-left: 0;
  }
  .ant-tabs-rtl.ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-nav-add,
  .ant-tabs-rtl.ant-tabs-card.ant-tabs-bottom > .ant-tabs-nav .ant-tabs-nav-add,
  .ant-tabs-rtl.ant-tabs-card.ant-tabs-top
    > div
    > .ant-tabs-nav
    .ant-tabs-nav-add,
  .ant-tabs-rtl.ant-tabs-card.ant-tabs-bottom
    > div
    > .ant-tabs-nav
    .ant-tabs-nav-add {
    margin-right: 2px;
    margin-left: 0;
  }
  .ant-tabs-dropdown-rtl {
    direction: rtl;
  }
  .ant-tabs-dropdown-rtl .ant-tabs-dropdown-menu-item {
    text-align: right;
  }
  .ant-tabs-top,
  .ant-tabs-bottom {
    flex-direction: column;
  }
  .ant-tabs-top > .ant-tabs-nav,
  .ant-tabs-bottom > .ant-tabs-nav,
  .ant-tabs-top > div > .ant-tabs-nav,
  .ant-tabs-bottom > div > .ant-tabs-nav {
    margin: 0 0 16px 0;
  }
  .ant-tabs-top > .ant-tabs-nav::before,
  .ant-tabs-bottom > .ant-tabs-nav::before,
  .ant-tabs-top > div > .ant-tabs-nav::before,
  .ant-tabs-bottom > div > .ant-tabs-nav::before {
    position: absolute;
    right: 0;
    left: 0;
    border-bottom: 1px solid #f0f0f0;
    content: '';
  }
  .ant-tabs-top > .ant-tabs-nav .ant-tabs-ink-bar,
  .ant-tabs-bottom > .ant-tabs-nav .ant-tabs-ink-bar,
  .ant-tabs-top > div > .ant-tabs-nav .ant-tabs-ink-bar,
  .ant-tabs-bottom > div > .ant-tabs-nav .ant-tabs-ink-bar {
    height: 2px;
  }
  .ant-tabs-top > .ant-tabs-nav .ant-tabs-ink-bar-animated,
  .ant-tabs-bottom > .ant-tabs-nav .ant-tabs-ink-bar-animated,
  .ant-tabs-top > div > .ant-tabs-nav .ant-tabs-ink-bar-animated,
  .ant-tabs-bottom > div > .ant-tabs-nav .ant-tabs-ink-bar-animated {
    transition: width 0.3s, left 0.3s, right 0.3s;
  }
  .ant-tabs-top > .ant-tabs-nav .ant-tabs-nav-wrap::before,
  .ant-tabs-bottom > .ant-tabs-nav .ant-tabs-nav-wrap::before,
  .ant-tabs-top > div > .ant-tabs-nav .ant-tabs-nav-wrap::before,
  .ant-tabs-bottom > div > .ant-tabs-nav .ant-tabs-nav-wrap::before,
  .ant-tabs-top > .ant-tabs-nav .ant-tabs-nav-wrap::after,
  .ant-tabs-bottom > .ant-tabs-nav .ant-tabs-nav-wrap::after,
  .ant-tabs-top > div > .ant-tabs-nav .ant-tabs-nav-wrap::after,
  .ant-tabs-bottom > div > .ant-tabs-nav .ant-tabs-nav-wrap::after {
    top: 0;
    bottom: 0;
    width: 30px;
  }
  .ant-tabs-top > .ant-tabs-nav .ant-tabs-nav-wrap::before,
  .ant-tabs-bottom > .ant-tabs-nav .ant-tabs-nav-wrap::before,
  .ant-tabs-top > div > .ant-tabs-nav .ant-tabs-nav-wrap::before,
  .ant-tabs-bottom > div > .ant-tabs-nav .ant-tabs-nav-wrap::before {
    left: 0;
    box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, 0.08);
  }
  .ant-tabs-top > .ant-tabs-nav .ant-tabs-nav-wrap::after,
  .ant-tabs-bottom > .ant-tabs-nav .ant-tabs-nav-wrap::after,
  .ant-tabs-top > div > .ant-tabs-nav .ant-tabs-nav-wrap::after,
  .ant-tabs-bottom > div > .ant-tabs-nav .ant-tabs-nav-wrap::after {
    right: 0;
    box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, 0.08);
  }
  .ant-tabs-top
    > .ant-tabs-nav
    .ant-tabs-nav-wrap.ant-tabs-nav-wrap-ping-left::before,
  .ant-tabs-bottom
    > .ant-tabs-nav
    .ant-tabs-nav-wrap.ant-tabs-nav-wrap-ping-left::before,
  .ant-tabs-top
    > div
    > .ant-tabs-nav
    .ant-tabs-nav-wrap.ant-tabs-nav-wrap-ping-left::before,
  .ant-tabs-bottom
    > div
    > .ant-tabs-nav
    .ant-tabs-nav-wrap.ant-tabs-nav-wrap-ping-left::before {
    opacity: 1;
  }
  .ant-tabs-top
    > .ant-tabs-nav
    .ant-tabs-nav-wrap.ant-tabs-nav-wrap-ping-right::after,
  .ant-tabs-bottom
    > .ant-tabs-nav
    .ant-tabs-nav-wrap.ant-tabs-nav-wrap-ping-right::after,
  .ant-tabs-top
    > div
    > .ant-tabs-nav
    .ant-tabs-nav-wrap.ant-tabs-nav-wrap-ping-right::after,
  .ant-tabs-bottom
    > div
    > .ant-tabs-nav
    .ant-tabs-nav-wrap.ant-tabs-nav-wrap-ping-right::after {
    opacity: 1;
  }
  .ant-tabs-top > .ant-tabs-nav::before,
  .ant-tabs-top > div > .ant-tabs-nav::before {
    bottom: 0;
  }
  .ant-tabs-top > .ant-tabs-nav .ant-tabs-ink-bar,
  .ant-tabs-top > div > .ant-tabs-nav .ant-tabs-ink-bar {
    bottom: 0;
  }
  .ant-tabs-bottom > .ant-tabs-nav,
  .ant-tabs-bottom > div > .ant-tabs-nav {
    order: 1;
    margin-top: 16px;
    margin-bottom: 0;
  }
  .ant-tabs-bottom > .ant-tabs-nav::before,
  .ant-tabs-bottom > div > .ant-tabs-nav::before {
    top: 0;
  }
  .ant-tabs-bottom > .ant-tabs-nav .ant-tabs-ink-bar,
  .ant-tabs-bottom > div > .ant-tabs-nav .ant-tabs-ink-bar {
    top: 0;
  }
  .ant-tabs-bottom > .ant-tabs-content-holder,
  .ant-tabs-bottom > div > .ant-tabs-content-holder {
    order: 0;
  }
  .ant-tabs-left > .ant-tabs-nav,
  .ant-tabs-right > .ant-tabs-nav,
  .ant-tabs-left > div > .ant-tabs-nav,
  .ant-tabs-right > div > .ant-tabs-nav {
    flex-direction: column;
    min-width: 50px;
  }
  .ant-tabs-left > .ant-tabs-nav .ant-tabs-tab,
  .ant-tabs-right > .ant-tabs-nav .ant-tabs-tab,
  .ant-tabs-left > div > .ant-tabs-nav .ant-tabs-tab,
  .ant-tabs-right > div > .ant-tabs-nav .ant-tabs-tab {
    padding: 8px 24px;
    text-align: center;
  }
  .ant-tabs-left > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab,
  .ant-tabs-right > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab,
  .ant-tabs-left > div > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab,
  .ant-tabs-right > div > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab {
    margin: 16px 0 0 0;
  }
  .ant-tabs-left > .ant-tabs-nav .ant-tabs-nav-wrap,
  .ant-tabs-right > .ant-tabs-nav .ant-tabs-nav-wrap,
  .ant-tabs-left > div > .ant-tabs-nav .ant-tabs-nav-wrap,
  .ant-tabs-right > div > .ant-tabs-nav .ant-tabs-nav-wrap {
    flex-direction: column;
  }
  .ant-tabs-left > .ant-tabs-nav .ant-tabs-nav-wrap::before,
  .ant-tabs-right > .ant-tabs-nav .ant-tabs-nav-wrap::before,
  .ant-tabs-left > div > .ant-tabs-nav .ant-tabs-nav-wrap::before,
  .ant-tabs-right > div > .ant-tabs-nav .ant-tabs-nav-wrap::before,
  .ant-tabs-left > .ant-tabs-nav .ant-tabs-nav-wrap::after,
  .ant-tabs-right > .ant-tabs-nav .ant-tabs-nav-wrap::after,
  .ant-tabs-left > div > .ant-tabs-nav .ant-tabs-nav-wrap::after,
  .ant-tabs-right > div > .ant-tabs-nav .ant-tabs-nav-wrap::after {
    right: 0;
    left: 0;
    height: 30px;
  }
  .ant-tabs-left > .ant-tabs-nav .ant-tabs-nav-wrap::before,
  .ant-tabs-right > .ant-tabs-nav .ant-tabs-nav-wrap::before,
  .ant-tabs-left > div > .ant-tabs-nav .ant-tabs-nav-wrap::before,
  .ant-tabs-right > div > .ant-tabs-nav .ant-tabs-nav-wrap::before {
    top: 0;
    box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, 0.08);
  }
  .ant-tabs-left > .ant-tabs-nav .ant-tabs-nav-wrap::after,
  .ant-tabs-right > .ant-tabs-nav .ant-tabs-nav-wrap::after,
  .ant-tabs-left > div > .ant-tabs-nav .ant-tabs-nav-wrap::after,
  .ant-tabs-right > div > .ant-tabs-nav .ant-tabs-nav-wrap::after {
    bottom: 0;
    box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08);
  }
  .ant-tabs-left
    > .ant-tabs-nav
    .ant-tabs-nav-wrap.ant-tabs-nav-wrap-ping-top::before,
  .ant-tabs-right
    > .ant-tabs-nav
    .ant-tabs-nav-wrap.ant-tabs-nav-wrap-ping-top::before,
  .ant-tabs-left
    > div
    > .ant-tabs-nav
    .ant-tabs-nav-wrap.ant-tabs-nav-wrap-ping-top::before,
  .ant-tabs-right
    > div
    > .ant-tabs-nav
    .ant-tabs-nav-wrap.ant-tabs-nav-wrap-ping-top::before {
    opacity: 1;
  }
  .ant-tabs-left
    > .ant-tabs-nav
    .ant-tabs-nav-wrap.ant-tabs-nav-wrap-ping-bottom::after,
  .ant-tabs-right
    > .ant-tabs-nav
    .ant-tabs-nav-wrap.ant-tabs-nav-wrap-ping-bottom::after,
  .ant-tabs-left
    > div
    > .ant-tabs-nav
    .ant-tabs-nav-wrap.ant-tabs-nav-wrap-ping-bottom::after,
  .ant-tabs-right
    > div
    > .ant-tabs-nav
    .ant-tabs-nav-wrap.ant-tabs-nav-wrap-ping-bottom::after {
    opacity: 1;
  }
  .ant-tabs-left > .ant-tabs-nav .ant-tabs-ink-bar,
  .ant-tabs-right > .ant-tabs-nav .ant-tabs-ink-bar,
  .ant-tabs-left > div > .ant-tabs-nav .ant-tabs-ink-bar,
  .ant-tabs-right > div > .ant-tabs-nav .ant-tabs-ink-bar {
    width: 2px;
  }
  .ant-tabs-left > .ant-tabs-nav .ant-tabs-ink-bar-animated,
  .ant-tabs-right > .ant-tabs-nav .ant-tabs-ink-bar-animated,
  .ant-tabs-left > div > .ant-tabs-nav .ant-tabs-ink-bar-animated,
  .ant-tabs-right > div > .ant-tabs-nav .ant-tabs-ink-bar-animated {
    transition: height 0.3s, top 0.3s;
  }
  .ant-tabs-left > .ant-tabs-nav .ant-tabs-nav-list,
  .ant-tabs-right > .ant-tabs-nav .ant-tabs-nav-list,
  .ant-tabs-left > div > .ant-tabs-nav .ant-tabs-nav-list,
  .ant-tabs-right > div > .ant-tabs-nav .ant-tabs-nav-list,
  .ant-tabs-left > .ant-tabs-nav .ant-tabs-nav-operations,
  .ant-tabs-right > .ant-tabs-nav .ant-tabs-nav-operations,
  .ant-tabs-left > div > .ant-tabs-nav .ant-tabs-nav-operations,
  .ant-tabs-right > div > .ant-tabs-nav .ant-tabs-nav-operations {
    flex: 1 0 auto;
    flex-direction: column;
  }
  .ant-tabs-left > .ant-tabs-nav .ant-tabs-ink-bar,
  .ant-tabs-left > div > .ant-tabs-nav .ant-tabs-ink-bar {
    right: 0;
  }
  .ant-tabs-left > .ant-tabs-content-holder,
  .ant-tabs-left > div > .ant-tabs-content-holder {
    margin-left: -1px;
    border-left: 1px solid #f0f0f0;
  }
  .ant-tabs-left
    > .ant-tabs-content-holder
    > .ant-tabs-content
    > .ant-tabs-tabpane,
  .ant-tabs-left
    > div
    > .ant-tabs-content-holder
    > .ant-tabs-content
    > .ant-tabs-tabpane {
    padding-left: 24px;
  }
  .ant-tabs-right > .ant-tabs-nav,
  .ant-tabs-right > div > .ant-tabs-nav {
    order: 1;
  }
  .ant-tabs-right > .ant-tabs-nav .ant-tabs-ink-bar,
  .ant-tabs-right > div > .ant-tabs-nav .ant-tabs-ink-bar {
    left: 0;
  }
  .ant-tabs-right > .ant-tabs-content-holder,
  .ant-tabs-right > div > .ant-tabs-content-holder {
    order: 0;
    margin-right: -1px;
    border-right: 1px solid #f0f0f0;
  }
  .ant-tabs-right
    > .ant-tabs-content-holder
    > .ant-tabs-content
    > .ant-tabs-tabpane,
  .ant-tabs-right
    > div
    > .ant-tabs-content-holder
    > .ant-tabs-content
    > .ant-tabs-tabpane {
    padding-right: 24px;
  }
  .ant-tabs-dropdown {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: 'tnum';
    position: absolute;
    top: -9999px;
    left: -9999px;
    z-index: 1050;
    display: block;
  }
  .ant-tabs-dropdown-hidden {
    display: none;
  }
  .ant-tabs-dropdown-menu {
    max-height: 200px;
    margin: 0;
    padding: 4px 0;
    overflow-x: hidden;
    overflow-y: auto;
    text-align: left;
    list-style-type: none;
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 2px;
    outline: none;
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  }
  .ant-tabs-dropdown-menu-item {
    display: flex;
    align-items: center;
    min-width: 120px;
    margin: 0;
    padding: 5px 12px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.85);
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    transition: all 0.3s;
  }
  .ant-tabs-dropdown-menu-item > span {
    flex: 1;
    white-space: nowrap;
  }
  .ant-tabs-dropdown-menu-item-remove {
    flex: none;
    margin-left: 12px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 12px;
    background: transparent;
    border: 0;
    cursor: pointer;
  }
  .ant-tabs-dropdown-menu-item-remove:hover {
    color: ${primaryColor};
  }
  .ant-tabs-dropdown-menu-item:hover {
    background: #f5f5f5;
  }
  .ant-tabs-dropdown-menu-item-disabled,
  .ant-tabs-dropdown-menu-item-disabled:hover {
    color: rgba(0, 0, 0, 0.25);
    background: transparent;
    cursor: not-allowed;
  }
  .ant-tabs-card > .ant-tabs-nav .ant-tabs-tab,
  .ant-tabs-card > div > .ant-tabs-nav .ant-tabs-tab {
    margin: 0;
    padding: 8px 16px;
    background: ${backgroundColor};
    border: 1px solid #f0f0f0;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .ant-tabs-card > .ant-tabs-nav .ant-tabs-tab-active,
  .ant-tabs-card > div > .ant-tabs-nav .ant-tabs-tab-active {
    color: ${primaryColor};
    background: #fff;
  }
  .ant-tabs-card > .ant-tabs-nav .ant-tabs-ink-bar,
  .ant-tabs-card > div > .ant-tabs-nav .ant-tabs-ink-bar {
    visibility: hidden;
  }
  .ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab,
  .ant-tabs-card.ant-tabs-bottom > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab,
  .ant-tabs-card.ant-tabs-top
    > div
    > .ant-tabs-nav
    .ant-tabs-tab
    + .ant-tabs-tab,
  .ant-tabs-card.ant-tabs-bottom
    > div
    > .ant-tabs-nav
    .ant-tabs-tab
    + .ant-tabs-tab {
    margin-left: 2px;
  }
  .ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab,
  .ant-tabs-card.ant-tabs-top > div > .ant-tabs-nav .ant-tabs-tab {
    border-radius: 2px 2px 0 0;
  }
  .ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab-active,
  .ant-tabs-card.ant-tabs-top > div > .ant-tabs-nav .ant-tabs-tab-active {
    border-bottom-color: #fff;
  }
  .ant-tabs-card.ant-tabs-bottom > .ant-tabs-nav .ant-tabs-tab,
  .ant-tabs-card.ant-tabs-bottom > div > .ant-tabs-nav .ant-tabs-tab {
    border-radius: 0 0 2px 2px;
  }
  .ant-tabs-card.ant-tabs-bottom > .ant-tabs-nav .ant-tabs-tab-active,
  .ant-tabs-card.ant-tabs-bottom > div > .ant-tabs-nav .ant-tabs-tab-active {
    border-top-color: #fff;
  }
  .ant-tabs-card.ant-tabs-left > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab,
  .ant-tabs-card.ant-tabs-right > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab,
  .ant-tabs-card.ant-tabs-left
    > div
    > .ant-tabs-nav
    .ant-tabs-tab
    + .ant-tabs-tab,
  .ant-tabs-card.ant-tabs-right
    > div
    > .ant-tabs-nav
    .ant-tabs-tab
    + .ant-tabs-tab {
    margin-top: 2px;
  }
  .ant-tabs-card.ant-tabs-left > .ant-tabs-nav .ant-tabs-tab,
  .ant-tabs-card.ant-tabs-left > div > .ant-tabs-nav .ant-tabs-tab {
    border-radius: 2px 0 0 2px;
  }
  .ant-tabs-card.ant-tabs-left > .ant-tabs-nav .ant-tabs-tab-active,
  .ant-tabs-card.ant-tabs-left > div > .ant-tabs-nav .ant-tabs-tab-active {
    border-right-color: #fff;
  }
  .ant-tabs-card.ant-tabs-right > .ant-tabs-nav .ant-tabs-tab,
  .ant-tabs-card.ant-tabs-right > div > .ant-tabs-nav .ant-tabs-tab {
    border-radius: 0 2px 2px 0;
  }
  .ant-tabs-card.ant-tabs-right > .ant-tabs-nav .ant-tabs-tab-active,
  .ant-tabs-card.ant-tabs-right > div > .ant-tabs-nav .ant-tabs-tab-active {
    border-left-color: #fff;
  }
  .ant-tabs {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: 'tnum';
    display: flex;
  }
  .ant-tabs > .ant-tabs-nav,
  .ant-tabs > div > .ant-tabs-nav {
    position: relative;
    display: flex;
    flex: none;
    align-items: center;
  }
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-wrap,
  .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-wrap {
    position: relative;
    display: inline-block;
    display: flex;
    flex: auto;
    align-self: stretch;
    overflow: hidden;
    white-space: nowrap;
    transform: translate(0);
  }
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-wrap::before,
  .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-wrap::before,
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-wrap::after,
  .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-wrap::after {
    position: absolute;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s;
    content: '';
    pointer-events: none;
  }
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-list,
  .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-list {
    position: relative;
    display: flex;
    transition: transform 0.3s;
  }
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-operations,
  .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-operations {
    display: flex;
    align-self: stretch;
  }
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-operations-hidden,
  .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-operations-hidden {
    position: absolute;
    visibility: hidden;
    pointer-events: none;
  }
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-more,
  .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-more {
    position: relative;
    padding: 8px 16px;
    background: transparent;
    border: 0;
  }
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-more::after,
  .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-more::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 5px;
    transform: translateY(100%);
    content: '';
  }
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-add,
  .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-add {
    min-width: 40px;
    margin-left: 2px;
    padding: 0 8px;
    background: ${backgroundColor};
    border: 1px solid #f0f0f0;
    border-radius: 2px 2px 0 0;
    outline: none;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-add:hover,
  .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-add:hover {
    color: ${primaryColor};
  }
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-add:active,
  .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-add:active,
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-add:focus,
  .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-add:focus {
    color: ${primaryColor};
  }
  .ant-tabs-extra-content {
    flex: none;
  }
  .ant-tabs-centered
    > .ant-tabs-nav
    .ant-tabs-nav-wrap:not([class*='ant-tabs-nav-wrap-ping']),
  .ant-tabs-centered
    > div
    > .ant-tabs-nav
    .ant-tabs-nav-wrap:not([class*='ant-tabs-nav-wrap-ping']) {
    justify-content: center;
  }
  .ant-tabs-ink-bar {
    position: absolute;
    background: ${primaryColor};
    pointer-events: none;
  }
  .ant-tabs-tab {
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 12px 0;
    font-size: 14px;
    background: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
  }
  .ant-tabs-tab-btn:focus,
  .ant-tabs-tab-remove:focus,
  .ant-tabs-tab-btn:active,
  .ant-tabs-tab-remove:active {
    color: ${primaryColor};
  }
  .ant-tabs-tab-btn {
    outline: none;
    transition: all 0.3s;
  }
  .ant-tabs-tab-remove {
    flex: none;
    margin-right: -4px;
    margin-left: 8px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 12px;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.3s;
  }
  .ant-tabs-tab-remove:hover {
    color: rgba(0, 0, 0, 0.85);
  }
  .ant-tabs-tab:hover {
    color: ${primaryColor};
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${primaryColor};
    text-shadow: 0 0 0.25px currentcolor;
  }
  .ant-tabs-tab.ant-tabs-tab-disabled {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  .ant-tabs-tab.ant-tabs-tab-disabled .ant-tabs-tab-btn:focus,
  .ant-tabs-tab.ant-tabs-tab-disabled .ant-tabs-tab-remove:focus,
  .ant-tabs-tab.ant-tabs-tab-disabled .ant-tabs-tab-btn:active,
  .ant-tabs-tab.ant-tabs-tab-disabled .ant-tabs-tab-remove:active {
    color: rgba(0, 0, 0, 0.25);
  }
  .ant-tabs-tab .ant-tabs-tab-remove .anticon {
    margin: 0;
  }
  .ant-tabs-tab .anticon {
    margin-right: 12px;
  }
  .ant-tabs-tab + .ant-tabs-tab {
    margin: 0 0 0 32px;
  }
  .ant-tabs-content {
    display: flex;
    width: 100%;
  }
  .ant-tabs-content-holder {
    flex: auto;
    min-width: 0;
    min-height: 0;
  }
  .ant-tabs-content-animated {
    transition: margin 0.3s;
  }
  .ant-tabs-tabpane {
    flex: none;
    width: 100%;
    outline: none;
  }
`;

export { StyledTabs };
