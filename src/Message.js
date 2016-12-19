import React from 'react';
import Notification from 'bee-notification';
import classnames from 'classnames';

let defaultDuration = 3;
let defaultTop = 10;
let messageInstance;
let key = 1;
let clsPrefix = 'u-notification';

let positionObj = {
    "top": {
        messageStyle: {
            width: "100%"
        },
        notificationStyle: {
            top: defaultTop,
            width: "100%"
        }
    },
    "bottom": {
        messageStyle: {
            width: "100%"
        },
        notificationStyle: {
            bottom: 10,
            width: "100%"
        }
    },
    "topRight": {
        messageStyle: {
            width:  200
        },
        notificationStyle: {
            top: defaultTop,
            right: "10%",
            width: "auto"
        }
    },
    "bottomRight": {
        messageStyle: {
            width:  200
        },
        notificationStyle: {
            bottom: 20,
            right: "10%",
            width: "auto"
        }
    },
    "topLeft": {
        messageStyle: {
            width:  200
        },
        notificationStyle: {
            top: defaultTop,
            left: "10%",
            width: "auto"
        }
    },
    "bottomLeft": {
        messageStyle: {
            width: 200
        },
        notificationStyle: {
            bottom: 20,
            left: "10%",
            width: "auto"
        }
    }
}

function getMessageInstance(position = 'top') {
    var style = positionObj[position].notificationStyle;
  messageInstance = messageInstance || Notification.newInstance({
    clsPrefix,
    transitionName: 'move-up',
    style: style, // 覆盖原来的样式
    position: '',
  });
  return messageInstance;
}

type NoticeType = 'info' | 'success' | 'error' | 'warning' | 'loading' | 'danger';

function notice(
  content: React.ReactNode,
  duration: number = defaultDuration,
  type: NoticeType,
  onClose?: () => void,
  position = "top"
) {
  let iconType = ({
    info: 'uf uf-informationbutton',
    success: 'uf uf-checkedsymbol',
    danger: 'uf uf-crossmarkonablackcirclebackground',
    warning: 'uf uf-exclamationsign',
    loading: 'loading',
  })[type];

  let style = positionObj[position].messageStyle;

  let instance = getMessageInstance(position);
  instance.notice({
    key,
    duration,
    color: type,
    style: style,
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
  info(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose, position = "top") {
    return notice(content, duration, 'info', onClose, position);
  },
  success(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose, position = "top") {
    return notice(content, duration, 'success', onClose, position);
  },
  error(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose, position = "top") {
    return notice(content, duration, 'danger', onClose, position);
  },
  warning(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose, position = "top") {
    return notice(content, duration, 'warning', onClose, position);
  },
  loading(content: ConfigContent, duration?: ConfigDuration, onClose?: ConfigOnClose, position = "top") {
    return notice(content, duration, 'loading', onClose, position);
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
