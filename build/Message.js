'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _beeNotification = require('bee-notification');

var _beeNotification2 = _interopRequireDefault(_beeNotification);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultDuration = 3;
var defaultTop = 10;
var messageInstance = void 0;
var key = 1;
var clsPrefix = 'u-notification';

var positionObj = {
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
      width: 200
    },
    notificationStyle: {
      top: defaultTop,
      right: "10%",
      width: "auto"
    }
  },
  "bottomRight": {
    messageStyle: {
      width: 200
    },
    notificationStyle: {
      bottom: 20,
      right: "10%",
      width: "auto"
    }
  },
  "topLeft": {
    messageStyle: {
      width: 200
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
};

function getMessageInstance() {
  var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'top';

  var style = positionObj[position].notificationStyle;
  messageInstance = messageInstance || _beeNotification2["default"].newInstance({
    clsPrefix: clsPrefix,
    transitionName: 'move-up',
    style: style, // 覆盖原来的样式
    position: ''
  });
  return messageInstance;
}

function notice(content) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDuration;
  var type = arguments[2];
  var onClose = arguments[3];
  var position = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "top";

  var iconType = {
    info: 'uf uf-informationbutton',
    success: 'uf uf-checkedsymbol',
    danger: 'uf uf-crossmarkonablackcirclebackground',
    warning: 'uf uf-exclamationsign',
    loading: 'loading'
  }[type];

  var style = positionObj[position].messageStyle;

  var instance = getMessageInstance(position);
  instance.notice({
    key: key,
    duration: duration,
    color: type,
    style: style,
    content: _react2["default"].createElement(
      'div',
      { className: clsPrefix + '-custom-content' },
      _react2["default"].createElement('i', { className: (0, _classnames2["default"])(iconType) }),
      _react2["default"].createElement(
        'span',
        null,
        content
      )
    ),
    onClose: onClose
  });
  return function () {
    var target = key++;
    return function () {
      instance.removeNotice(target);
    };
  }();
}

//
// export interfase ConfigOptions {
//   top?: number;
//   duration?: number;
//   clsPrefix?: string;
// }

exports["default"] = {
  info: function info(content, duration, onClose) {
    var position = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "top";

    return notice(content, duration, 'info', onClose, position);
  },
  success: function success(content, duration, onClose) {
    var position = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "top";

    return notice(content, duration, 'success', onClose, position);
  },
  error: function error(content, duration, onClose) {
    var position = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "top";

    return notice(content, duration, 'danger', onClose, position);
  },
  warning: function warning(content, duration, onClose) {
    var position = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "top";

    return notice(content, duration, 'warning', onClose, position);
  },
  loading: function loading(content, duration, onClose) {
    var position = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "top";

    return notice(content, duration, 'loading', onClose, position);
  },
  config: function config(options) {
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
  destroy: function destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  }
};
module.exports = exports['default'];