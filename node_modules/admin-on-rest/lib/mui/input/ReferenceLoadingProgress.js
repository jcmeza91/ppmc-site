'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LinearProgress = require('material-ui/LinearProgress');

var _LinearProgress2 = _interopRequireDefault(_LinearProgress);

var _Labeled = require('./Labeled');

var _Labeled2 = _interopRequireDefault(_Labeled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var progessContainerStyle = {
    padding: '2em 0',
    height: 'auto'
};
var progessStyle = {
    width: '16em',
    margin: '1em 0'
};

var ReferenceLoadingProgress = function ReferenceLoadingProgress(_ref) {
    var label = _ref.label;
    return _react2.default.createElement(
        _Labeled2.default,
        { label: label },
        _react2.default.createElement(
            'span',
            { style: progessContainerStyle },
            _react2.default.createElement(_LinearProgress2.default, { mode: 'indeterminate', style: progessStyle })
        )
    );
};

ReferenceLoadingProgress.propTypes = {
    label: _propTypes2.default.string.isRequired
};

exports.default = ReferenceLoadingProgress;
module.exports = exports['default'];