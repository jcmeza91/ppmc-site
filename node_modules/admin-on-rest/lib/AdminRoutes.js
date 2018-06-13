'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AdminRoutes = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _getContext = require('recompose/getContext');

var _getContext2 = _interopRequireDefault(_getContext);

var _CrudRoute = require('./CrudRoute');

var _CrudRoute2 = _interopRequireDefault(_CrudRoute);

var _NotFound = require('./mui/layout/NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

var _Restricted = require('./auth/Restricted');

var _Restricted2 = _interopRequireDefault(_Restricted);

var _auth = require('./auth');

var _actions = require('./actions');

var _getMissingAuthClientError = require('./util/getMissingAuthClientError');

var _getMissingAuthClientError2 = _interopRequireDefault(_getMissingAuthClientError);

var _Layout = require('./mui/layout/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AdminRoutes = exports.AdminRoutes = function (_Component) {
    (0, _inherits3.default)(AdminRoutes, _Component);

    function AdminRoutes() {
        (0, _classCallCheck3.default)(this, AdminRoutes);
        return (0, _possibleConstructorReturn3.default)(this, (AdminRoutes.__proto__ || Object.getPrototypeOf(AdminRoutes)).apply(this, arguments));
    }

    (0, _createClass3.default)(AdminRoutes, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.initializeResources(this.props.children);
        }
    }, {
        key: 'initializeResources',
        value: function initializeResources(children) {
            var _this2 = this;

            if (typeof children === 'function') {
                if (!this.props.authClient) {
                    throw new Error((0, _getMissingAuthClientError2.default)('Admin'));
                }

                this.props.authClient(_auth.AUTH_GET_PERMISSIONS).then(function (permissions) {
                    var resources = children(permissions).filter(function (node) {
                        return node;
                    }).map(function (node) {
                        return node.props;
                    });
                    _this2.props.declareResources(resources);
                });
            } else {
                var resources = _react2.default.Children.map(children, function (child) {
                    return child ? child.props : false;
                }) || [];
                this.props.declareResources(resources.filter(function (r) {
                    return r;
                }));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                appLayout = _props.appLayout,
                catchAll = _props.catchAll,
                customRoutes = _props.customRoutes,
                dashboard = _props.dashboard,
                logout = _props.logout,
                menu = _props.menu,
                _props$resources = _props.resources,
                resources = _props$resources === undefined ? [] : _props$resources,
                title = _props.title,
                theme = _props.theme;


            return _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                customRoutes.filter(function (route) {
                    return route.props.noLayout;
                }).map(function (route, index) {
                    return _react2.default.createElement(_reactRouterDom.Route, {
                        key: index,
                        exact: route.props.exact,
                        path: route.props.path,
                        render: function render(_ref) {
                            var location = _ref.location;

                            if (route.props.render) {
                                return route.props.render({
                                    location: location,
                                    title: title,
                                    theme: theme
                                });
                            }
                            if (route.props.component) {
                                return (0, _react.createElement)(route.props.component, {
                                    location: location,
                                    title: title,
                                    theme: theme
                                });
                            }
                        }
                    });
                }),
                _react2.default.createElement(_reactRouterDom.Route, {
                    path: '/',
                    render: function render() {
                        return (0, _react.createElement)(appLayout, {
                            children: _react2.default.createElement(
                                _reactRouterDom.Switch,
                                null,
                                customRoutes && customRoutes.map(function (route, index) {
                                    return _react2.default.createElement(_reactRouterDom.Route, {
                                        key: index,
                                        exact: route.props.exact,
                                        path: route.props.path,
                                        component: route.props.component,
                                        render: route.props.render,
                                        children: route.props.children // eslint-disable-line react/no-children-prop
                                    });
                                }),
                                resources.map(function (resource) {
                                    return _react2.default.createElement(_reactRouterDom.Route, {
                                        path: '/' + resource.name,
                                        key: resource.name,
                                        render: function render() {
                                            return _react2.default.createElement(_CrudRoute2.default, {
                                                resource: resource.name,
                                                list: resource.list,
                                                create: resource.create,
                                                edit: resource.edit,
                                                show: resource.show,
                                                remove: resource.remove,
                                                options: resource.options
                                            });
                                        }
                                    });
                                }),
                                dashboard ? _react2.default.createElement(_reactRouterDom.Route, {
                                    exact: true,
                                    path: '/',
                                    render: function render(routeProps) {
                                        return _react2.default.createElement(
                                            _Restricted2.default,
                                            (0, _extends3.default)({
                                                authParams: {
                                                    route: 'dashboard'
                                                }
                                            }, routeProps),
                                            _react2.default.createElement(dashboard)
                                        );
                                    }
                                }) : resources[0] && _react2.default.createElement(_reactRouterDom.Route, {
                                    exact: true,
                                    path: '/',
                                    render: function render() {
                                        return _react2.default.createElement(_reactRouterDom.Redirect, {
                                            to: '/' + resources[0].name
                                        });
                                    }
                                }),
                                _react2.default.createElement(_reactRouterDom.Route, { component: catchAll || _NotFound2.default })
                            ),
                            dashboard: dashboard,
                            customRoutes: customRoutes.filter(function (route) {
                                return !route.props.noLayout;
                            }),
                            logout: logout,
                            menu: menu,
                            catchAll: catchAll,
                            title: title,
                            theme: theme
                        });
                    }
                })
            );
        }
    }]);
    return AdminRoutes;
}(_react.Component);

var componentPropType = _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]);

AdminRoutes.propTypes = {
    appLayout: componentPropType,
    authClient: _propTypes2.default.func,
    children: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.node]),
    catchAll: componentPropType,
    customRoutes: _propTypes2.default.array,
    dashboard: componentPropType,
    declareResources: _propTypes2.default.func.isRequired,
    logout: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func, _propTypes2.default.string]),
    menu: componentPropType,
    resources: _propTypes2.default.array,
    theme: _propTypes2.default.object,
    title: _propTypes2.default.node
};

AdminRoutes.defaultProps = {
    appLayout: _Layout2.default
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        resources: Object.keys(state.admin.resources).map(function (key) {
            return state.admin.resources[key].props;
        })
    };
};

exports.default = (0, _compose2.default)((0, _getContext2.default)({
    authClient: _propTypes2.default.func
}), (0, _reactRedux.connect)(mapStateToProps, {
    declareResources: _actions.declareResources
}))(AdminRoutes);