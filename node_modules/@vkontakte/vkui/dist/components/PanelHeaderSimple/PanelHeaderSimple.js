"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _usePlatform = _interopRequireDefault(require("../../hooks/usePlatform"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _FixedLayout = _interopRequireDefault(require("../FixedLayout/FixedLayout"));

var _Separator = _interopRequireDefault(require("../Separator/Separator"));

var _platform = require("../../lib/platform");

var _ConfigProviderContext = require("../ConfigProvider/ConfigProviderContext");

var PanelHeaderSimple = function PanelHeaderSimple(_ref) {
  var className = _ref.className,
      left = _ref.left,
      addon = _ref.addon,
      children = _ref.children,
      right = _ref.right,
      separator = _ref.separator,
      visor = _ref.visor,
      transparent = _ref.transparent,
      getRef = _ref.getRef,
      getRootRef = _ref.getRootRef,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["className", "left", "addon", "children", "right", "separator", "visor", "transparent", "getRef", "getRootRef"]);
  var platform = (0, _usePlatform.default)();

  var _useContext = (0, _react.useContext)(_ConfigProviderContext.ConfigProviderContext),
      webviewType = _useContext.webviewType;

  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, restProps, {
    className: (0, _classNames.default)((0, _getClassName.default)('PanelHeaderSimple', platform), {
      'PanelHeaderSimple--trnsp': transparent,
      'PanelHeaderSimple--vis': visor,
      'PanelHeaderSimple--sep': separator && visor,
      'PanelHeaderSimple--vkapps': webviewType === _ConfigProviderContext.WebviewType.VKAPPS
    }, className),
    ref: getRootRef
  }), /*#__PURE__*/_react.default.createElement(_FixedLayout.default, {
    vertical: "top",
    className: "PanelHeaderSimple__fixed",
    getRootRef: getRef
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "PanelHeaderSimple__in"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "PanelHeaderSimple__left"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "PanelHeaderSimple__left-in"
  }, left), platform !== _platform.ANDROID && !!addon && /*#__PURE__*/_react.default.createElement("div", {
    className: "PanelHeaderSimple__addon"
  }, addon)), /*#__PURE__*/_react.default.createElement("div", {
    className: "PanelHeaderSimple__content"
  }, children), /*#__PURE__*/_react.default.createElement("div", {
    className: "PanelHeaderSimple__right"
  }, webviewType !== _ConfigProviderContext.WebviewType.VKAPPS && right))), separator && visor && /*#__PURE__*/_react.default.createElement(_Separator.default, {
    className: "PanelHeaderSimple__separator"
  }));
};

PanelHeaderSimple.defaultProps = {
  separator: true,
  transparent: false,
  visor: true
};
var _default = PanelHeaderSimple;
exports.default = _default;
//# sourceMappingURL=PanelHeaderSimple.js.map