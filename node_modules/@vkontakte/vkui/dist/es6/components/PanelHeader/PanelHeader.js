import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';
import withPlatform from '../../hoc/withPlatform';
import { IOS } from '../../lib/platform';
import { WebviewType } from '../ConfigProvider/ConfigProviderContext';

/**
 * @deprecated используйте PanelHeaderSimple
 */
var PanelHeader = /*#__PURE__*/function (_Component) {
  _inherits(PanelHeader, _Component);

  var _super = _createSuper(PanelHeader);

  function PanelHeader() {
    var _this;

    _classCallCheck(this, PanelHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      ready: false
    });

    _defineProperty(_assertThisInitialized(_this), "leftNode", void 0);

    _defineProperty(_assertThisInitialized(_this), "addonNode", void 0);

    _defineProperty(_assertThisInitialized(_this), "titleNode", void 0);

    _defineProperty(_assertThisInitialized(_this), "rightNode", void 0);

    return _this;
  }

  _createClass(PanelHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var panelId = this.context.panel;
      this.leftNode = this.document.getElementById("header-left-".concat(panelId));
      this.addonNode = this.document.getElementById("header-addon-".concat(panelId));
      this.titleNode = this.document.getElementById("header-title-".concat(panelId));
      this.rightNode = this.document.getElementById("header-right-".concat(panelId));
      var getRef = this.props.getRef;

      if (getRef) {
        var element = this.document.getElementById("panel-header-".concat(panelId));

        if (typeof getRef === 'function') {
          getRef(element);
        } else {
          getRef.current = element;
        }
      }

      this.setState({
        ready: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          left = _this$props.left,
          addon = _this$props.addon,
          children = _this$props.children,
          right = _this$props.right,
          transparent = _this$props.transparent,
          platform = _this$props.platform;
      var isPrimitive = typeof children === 'string' || typeof children === 'number';
      return this.state.ready ? [ReactDOM.createPortal( /*#__PURE__*/React.createElement("div", {
        className: classNames('PanelHeader-left-in', {
          'PanelHeader-left-in--tp': transparent
        })
      }, left), this.leftNode), platform === IOS && ReactDOM.createPortal( /*#__PURE__*/React.createElement("div", {
        className: classNames('PanelHeader-addon', {
          'PanelHeader-addon--tp': transparent
        })
      }, addon), this.addonNode), ReactDOM.createPortal( /*#__PURE__*/React.createElement("div", {
        className: classNames('PanelHeader-content', {
          'PanelHeader-content--tp': transparent
        })
      }, isPrimitive ? /*#__PURE__*/React.createElement("span", null, children) : children), this.titleNode), ReactDOM.createPortal( /*#__PURE__*/React.createElement("div", {
        className: classNames('PanelHeader-right', {
          'PanelHeader-right--tp': transparent,
          'PanelHeader-right--vkapps': this.webviewType === WebviewType.VKAPPS
        })
      }, this.webviewType === 'internal' ? right : null), this.rightNode)] : null;
    }
  }, {
    key: "document",
    get: function get() {
      return this.context.document || document;
    }
  }, {
    key: "webviewType",
    get: function get() {
      return this.context.webviewType || WebviewType.VKAPPS;
    }
  }]);

  return PanelHeader;
}(Component);

_defineProperty(PanelHeader, "defaultProps", {
  transparent: false
});

_defineProperty(PanelHeader, "contextTypes", {
  panel: PropTypes.string,
  document: PropTypes.any,
  scheme: PropTypes.string,
  webviewType: PropTypes.oneOf([WebviewType.INTERNAL, WebviewType.VKAPPS])
});

export default withPlatform(PanelHeader);
//# sourceMappingURL=PanelHeader.js.map