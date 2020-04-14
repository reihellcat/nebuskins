"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _withPlatform = _interopRequireDefault(require("../../hoc/withPlatform"));

var _platform = require("../../lib/platform");

var _ConfigProviderContext = require("../ConfigProvider/ConfigProviderContext");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @deprecated используйте PanelHeaderSimple
 */
var PanelHeader = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(PanelHeader, _Component);

  var _super = _createSuper(PanelHeader);

  function PanelHeader() {
    var _this;

    (0, _classCallCheck2.default)(this, PanelHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      ready: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "leftNode", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "addonNode", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "titleNode", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "rightNode", void 0);
    return _this;
  }

  (0, _createClass2.default)(PanelHeader, [{
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
      return this.state.ready ? [_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classNames.default)('PanelHeader-left-in', {
          'PanelHeader-left-in--tp': transparent
        })
      }, left), this.leftNode), platform === _platform.IOS && _reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classNames.default)('PanelHeader-addon', {
          'PanelHeader-addon--tp': transparent
        })
      }, addon), this.addonNode), _reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classNames.default)('PanelHeader-content', {
          'PanelHeader-content--tp': transparent
        })
      }, isPrimitive ? /*#__PURE__*/_react.default.createElement("span", null, children) : children), this.titleNode), _reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classNames.default)('PanelHeader-right', {
          'PanelHeader-right--tp': transparent,
          'PanelHeader-right--vkapps': this.webviewType === _ConfigProviderContext.WebviewType.VKAPPS
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
      return this.context.webviewType || _ConfigProviderContext.WebviewType.VKAPPS;
    }
  }]);
  return PanelHeader;
}(_react.Component);

(0, _defineProperty2.default)(PanelHeader, "defaultProps", {
  transparent: false
});
(0, _defineProperty2.default)(PanelHeader, "contextTypes", {
  panel: _propTypes.default.string,
  document: _propTypes.default.any,
  scheme: _propTypes.default.string,
  webviewType: _propTypes.default.oneOf([_ConfigProviderContext.WebviewType.INTERNAL, _ConfigProviderContext.WebviewType.VKAPPS])
});

var _default = (0, _withPlatform.default)(PanelHeader);

exports.default = _default;
//# sourceMappingURL=PanelHeader.js.map