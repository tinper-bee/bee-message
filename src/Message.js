import React from 'react';
import Notification from 'bee-notification';
import classnames from 'classnames';

let defaultDuration = 3;
let defaultTop = 10;
let messageInstance;
let key = 1;
let clsPrefix = 'u-notification';

function getMessageInstance() {
  messageInstance = messageInstance || Notification.newInstance({
    clsPrefix,
    transitionName: 'move-up',
    style: { top: defaultTop, left: "50%" }, // 覆盖原来的样式
    position: '',
  });
  return messageInstance;
}

type NoticeType = 'info' | 'success' | 'error' | 'warning' | 'loading' | 'danger';

function notice(
  content: React.ReactNode,
  duration: number = defaultDuration,
  type: NoticeType,
  onClose?: () => void) {
  let iconType = ({
    info: 'uf uf-informationbutton',
    success: 'uf uf-checkedsymbol',
    danger: 'uf uf-crossmarkonablackcirclebackground',
    warning: 'uf uf-exclamationsign',
    loading: 'loading',
  })[type];

  let instance = getMessageInstance();
  instance.notice({
    key,
    duration,
    color: type,
    style: {position: "relative", right: "50%"},
    content: (
      <div className={`${clsPrefix}-custom-content`}>
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
//
// export interfase ConfigOptions {
//   top?: number;
//   duration?: number;
//   clsPrefix?: string;
// }

export default {
  info(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose) {
    return notice(content, duration, 'info', onClose);
  },
  success(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose) {
    return notice(content, duration, 'success', onClose);
  },
  error(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose) {
    return notice(content, duration, 'danger', onClose);
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
