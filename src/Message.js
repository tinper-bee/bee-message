import React from 'react';
import Notification from 'bee-notification';
import classnames from 'classnames';

let defaultDuration = 1.5;
let defaultTop = 10;
let messageInstance;
let key = 1;
let clsPrefix = 'u-notification';

function getMessageInstance() {
  messageInstance = messageInstance || Notification.newInstance({
    clsPrefix,
    transitionName: 'move-up',
    style: { top: defaultTop }, // 覆盖原来的样式
  });
  return messageInstance;
}

type NoticeType = 'info' | 'success' | 'error' | 'warning' | 'loading';

function notice(
  content: React.ReactNode,
  duration: number = defaultDuration,
  type: NoticeType,
  onClose?: () => void) {
  let iconType = ({
    info: 'info-circle',
    success: 'check-circle',
    error: 'cross-circle',
    warning: 'exclamation-circle',
    loading: 'loading',
  })[type];

  let instance = getMessageInstance();
  instance.notice({
    key,
    duration,
    style: {},
    content: (
      <div className={`${clsPrefix}-custom-content ${clsPrefix}-${type}`}>
        <i className= { classnames(iconType) } />
        <span>{content}</span>
      </div>
    ),
    onClose,
  });
  return (function () {
    let target = key++;
    return function () {
      instance.removeNotice(target);
    };
  }());
}


type ConfigContent = React.ReactNode | string;


type ConfigDuration = number;

export type ConfigOnClose = () => void;

export ConfigOptions {
  top?: number;
  duration?: number;
  clsPrefix?: string;
}

export default {
  info(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose) {
    return notice(content, duration, 'info', onClose);
  },
  success(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose) {
    return notice(content, duration, 'success', onClose);
  },
  error(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose) {
    return notice(content, duration, 'error', onClose);
  },
  // Departed usage, please use warning()
  warn(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose) {
    return notice(content, duration, 'warning', onClose);
  },
  warning(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose) {
    return notice(content, duration, 'warning', onClose);
  },
  loading(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose) {
    return notice(content, duration, 'loading', onClose);
  },
  config(options: ConfigOptions) {
    if (options.top !== undefined) {
      defaultTop = options.top;
    }
    if (options.duration !== undefined) {
      defaultDuration = options.duration;
    }
    if (options.clsPrefix !== undefined) {
      clsPrefix = options.clsPrefix;
    }
  },
  destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  },
};
