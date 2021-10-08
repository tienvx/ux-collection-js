'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _stimulus = require("stimulus");

var _symfonyCollectionJs = _interopRequireDefault(require("symfony-collection-js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _dispatchCollectionJsEvent = /*#__PURE__*/new WeakSet();

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _dispatchCollectionJsEvent);

    return _this;
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var _self = this;

      var options = {
        call_post_add_on_init: this.callPostAddOnInitValue,
        post_add: function post_add(new_elem, context, index) {
          _classPrivateMethodGet(_self, _dispatchCollectionJsEvent, _dispatchCollectionJsEvent2).call(_self, 'post-add', {
            new_elem: new_elem,
            context: context,
            index: index
          });
        },
        post_delete: function post_delete(delete_elem, context, index) {
          _classPrivateMethodGet(_self, _dispatchCollectionJsEvent, _dispatchCollectionJsEvent2).call(_self, 'post-delete', {
            delete_elem: delete_elem,
            context: context,
            index: index
          });
        },
        post_up: function post_up(elem, switched_elem, index) {
          _classPrivateMethodGet(_self, _dispatchCollectionJsEvent, _dispatchCollectionJsEvent2).call(_self, 'post-up', {
            elem: elem,
            switched_elem: switched_elem,
            index: index
          });
        },
        post_down: function post_down(elem, switched_elem, index) {
          _classPrivateMethodGet(_self, _dispatchCollectionJsEvent, _dispatchCollectionJsEvent2).call(_self, 'post-down', {
            elem: elem,
            switched_elem: switched_elem,
            index: index
          });
        },
        prototype_name: this.prototypeNameValue || '__name__'
      };

      if (this.allowAddValue) {
        options = _objectSpread(_objectSpread({}, options), {}, {
          other_btn_add: this.element.querySelectorAll('.collection-js-add-btn'),
          btn_add_selector: '.collection-js-elem-add'
        });
      }

      if (this.allowDeleteValue) {
        options.btn_delete_selector = '.collection-js-elem-remove';
      }

      if (this.allowMoveUpValue) {
        options.btn_up_selector = '.collection-js-elem-up';
      }

      if (this.allowMoveDownValue) {
        options.btn_down_selector = '.collection-js-elem-down';
      }

      (0, _symfonyCollectionJs["default"])(this.element.querySelector('.collection-js-root'), options);
    }
  }]);

  return _default;
}(_stimulus.Controller);

exports["default"] = _default;

function _dispatchCollectionJsEvent2(event, detail) {
  // Dispatch event like it was dispatched by https://github.com/stimulus-use/stimulus-use/blob/main/docs/use-dispatch.md
  this.element.dispatchEvent(new CustomEvent("".concat(this.identifier, ":").concat(event), {
    bubbles: true,
    cancelable: true,
    detail: detail
  }));
}

_defineProperty(_default, "values", {
  allowAdd: Boolean,
  allowDelete: Boolean,
  allowMoveUp: Boolean,
  allowMoveDown: Boolean,
  prototypeName: String,
  callPostAddOnInit: Boolean
});