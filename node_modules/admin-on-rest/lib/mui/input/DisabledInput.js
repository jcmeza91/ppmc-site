'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _FieldTitle = require('../../util/FieldTitle');

var _FieldTitle2 = _interopRequireDefault(_FieldTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DisabledInput = function DisabledInput(_ref) {
    var value = _ref.input.value,
        label = _ref.label,
        resource = _ref.resource,
        source = _ref.source,
        elStyle = _ref.elStyle,
        options = _ref.options;
    return _react2.default.createElement(_TextField2.default, (0, _extends3.default)({
        value: value,
        floatingLabelText: _react2.default.createElement(_FieldTitle2.default, { label: label, source: source, resource: resource }),
        style: elStyle,
        disabled: true
    }, options));
};

DisabledInput.propTypes = {
    label: _propTypes2.default.string,
    record: _propTypes2.default.object,
    resource: _propTypes2.default.string,
    source: _propTypes2.default.string,
    elStyle: _propTypes2.default.object,
    input: _propTypes2.default.object,
    addField: _propTypes2.default.bool.isRequired
};

DisabledInput.defaultProps = {
    addField: true
};

exports.default = DisabledInput;
module.exports = exports['default'];