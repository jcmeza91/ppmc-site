'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _createHashHistory = require('history/createHashHistory');

var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

var _reactRouterRedux = require('react-router-redux');

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _effects = require('redux-saga/effects');

var _withContext = require('recompose/withContext');

var _withContext2 = _interopRequireDefault(_withContext);

var _reactRouterDom = require('react-router-dom');

var _authActions = require('./actions/authActions');

var _Login = require('./mui/auth/Login');

var _Login2 = _interopRequireDefault(_Login);

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _saga = require('./sideEffect/saga');

var _Menu = require('./mui/layout/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Logout = require('./mui/auth/Logout');

var _Logout2 = _interopRequireDefault(_Logout);

var _TranslationProvider = require('./i18n/TranslationProvider');

var _TranslationProvider2 = _interopRequireDefault(_TranslationProvider);

var _AdminRoutes = require('./AdminRoutes');

var _AdminRoutes2 = _interopRequireDefault(_AdminRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Admin = function Admin(_ref) {
    var appLayout = _ref.appLayout,
        authClient = _ref.authClient,
        children = _ref.children,
        _ref$customReducers = _ref.customReducers,
        customReducers = _ref$customReducers === undefined ? {} : _ref$customReducers,
        _ref$customSagas = _ref.customSagas,
        customSagas = _ref$customSagas === undefined ? [] : _ref$customSagas,
        _ref$customRoutes = _ref.customRoutes,
        customRoutes = _ref$customRoutes === undefined ? [] : _ref$customRoutes,
        dashboard = _ref.dashboard,
        history = _ref.history,
        locale = _ref.locale,
        _ref$messages = _ref.messages,
        messages = _ref$messages === undefined ? {} : _ref$messages,
        _ref$menu = _ref.menu,
        menu = _ref$menu === undefined ? _Menu2.default : _ref$menu,
        catchAll = _ref.catchAll,
        restClient = _ref.restClient,
        theme = _ref.theme,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? 'Admin on REST' : _ref$title,
        loginPage = _ref.loginPage,
        logoutButton = _ref.logoutButton,
        initialState = _ref.initialState;

    var appReducer = (0, _reducer2.default)(customReducers, locale);
    var resettableAppReducer = function resettableAppReducer(state, action) {
        return appReducer(action.type !== _authActions.USER_LOGOUT ? state : undefined, action);
    };
    var saga = /*#__PURE__*/_regenerator2.default.mark(function rootSaga() {
        return _regenerator2.default.wrap(function rootSaga$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _effects.all)([(0, _saga.crudSaga)(restClient, authClient)].concat((0, _toConsumableArray3.default)(customSagas)).map(_effects.fork));

                    case 2:
                    case 'end':
                        return _context.stop();
                }
            }
        }, rootSaga, this);
    });
    var sagaMiddleware = (0, _reduxSaga2.default)();
    var routerHistory = history || (0, _createHashHistory2.default)();
    var store = (0, _redux.createStore)(resettableAppReducer, initialState, (0, _redux.compose)((0, _redux.applyMiddleware)(sagaMiddleware, (0, _reactRouterRedux.routerMiddleware)(routerHistory)), typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : function (f) {
        return f;
    }));
    sagaMiddleware.run(saga);

    var logout = authClient ? (0, _react.createElement)(logoutButton || _Logout2.default) : null;

    return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _TranslationProvider2.default,
            { messages: messages },
            _react2.default.createElement(
                _reactRouterRedux.ConnectedRouter,
                { history: routerHistory },
                _react2.default.createElement(
                    _reactRouterDom.Switch,
                    null,
                    loginPage && _react2.default.createElement(_reactRouterDom.Route, {
                        exact: true,
                        path: '/login',
                        render: function render(_ref2) {
                            var location = _ref2.location;
                            return (0, _react.createElement)(loginPage, {
                                location: location,
                                title: title,
                                theme: theme
                            });
                        }
                    }),
                    _react2.default.createElement(_reactRouterDom.Route, {
                        path: '/',
                        render: function render(routeProps) {
                            return _react2.default.createElement(
                                _AdminRoutes2.default,
                                (0, _extends3.default)({
                                    appLayout: appLayout,
                                    catchAll: catchAll,
                                    customRoutes: customRoutes,
                                    dashboard: dashboard,
                                    logout: logout,
                                    menu: menu,
                                    theme: theme,
                                    title: title
                                }, routeProps),
                                children
                            );
                        }
                    })
                )
            )
        )
    );
};

var componentPropType = _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]);

Admin.propTypes = {
    appLayout: componentPropType,
    authClient: _propTypes2.default.func,
    children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
    catchAll: componentPropType,
    customSagas: _propTypes2.default.array,
    customReducers: _propTypes2.default.object,
    customRoutes: _propTypes2.default.array,
    dashboard: componentPropType,
    history: _propTypes2.default.object,
    loginPage: componentPropType,
    logoutButton: componentPropType,
    menu: componentPropType,
    restClient: _propTypes2.default.func,
    theme: _propTypes2.default.object,
    title: _propTypes2.default.node,
    locale: _propTypes2.default.string,
    messages: _propTypes2.default.object,
    initialState: _propTypes2.default.object
};

Admin.defaultProps = {
    loginPage: _Login2.default
};

exports.default = (0, _withContext2.default)({
    authClient: _propTypes2.default.func
}, function (_ref3) {
    var authClient = _ref3.authClient;
    return { authClient: authClient };
})(Admin);
module.exports = exports['default'];