'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReferenceArrayInput = exports.getDataStatus = exports.getSelectedReferencesStatus = exports.REFERENCES_STATUS_EMPTY = exports.REFERENCES_STATUS_INCOMPLETE = exports.REFERENCES_STATUS_READY = undefined;

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

var _reactRedux = require('react-redux');

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

var _dataActions = require('../../actions/dataActions');

var _possibleValues = require('../../reducer/admin/references/possibleValues');

var _ReferenceLoadingProgress = require('./ReferenceLoadingProgress');

var _ReferenceLoadingProgress2 = _interopRequireDefault(_ReferenceLoadingProgress);

var _ReferenceError = require('./ReferenceError');

var _ReferenceError2 = _interopRequireDefault(_ReferenceError);

var _translate = require('../../i18n/translate');

var _translate2 = _interopRequireDefault(_translate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var referenceSource = function referenceSource(resource, source) {
    return resource + '@' + source;
};

var REFERENCES_STATUS_READY = exports.REFERENCES_STATUS_READY = 'REFERENCES_STATUS_READY';
var REFERENCES_STATUS_INCOMPLETE = exports.REFERENCES_STATUS_INCOMPLETE = 'REFERENCES_STATUS_INCOMPLETE';
var REFERENCES_STATUS_EMPTY = exports.REFERENCES_STATUS_EMPTY = 'REFERENCES_STATUS_EMPTY';
var getSelectedReferencesStatus = exports.getSelectedReferencesStatus = function getSelectedReferencesStatus(input, referenceRecords) {
    return !input.value || input.value.length === referenceRecords.length ? REFERENCES_STATUS_READY : referenceRecords.length > 0 ? REFERENCES_STATUS_INCOMPLETE : REFERENCES_STATUS_EMPTY;
};

var getDataStatus = exports.getDataStatus = function getDataStatus(_ref) {
    var input = _ref.input,
        matchingReferences = _ref.matchingReferences,
        referenceRecords = _ref.referenceRecords,
        translate = _ref.translate;

    // selectedReferencesData can be "empty" (no data was found for references from input.value)
    // or "incomplete" (Not all of the reference data was found)
    // or "ready" (all references data was found or there is no references from input.value)
    var selectedReferencesData = getSelectedReferencesStatus(input, referenceRecords);

    var matchingReferencesError = matchingReferences && matchingReferences.error ? translate(matchingReferences.error, {
        _: matchingReferences.error
    }) : null;

    return {
        waiting: !matchingReferences && input.value && selectedReferencesData === REFERENCES_STATUS_EMPTY || !matchingReferences && !input.value,
        error: matchingReferencesError && (!input.value || input.value && selectedReferencesData === REFERENCES_STATUS_EMPTY) ? translate('aor.input.references.all_missing', {
            _: 'aor.input.references.all_missing'
        }) : null,
        warning: matchingReferencesError || input.value && selectedReferencesData !== REFERENCES_STATUS_READY ? matchingReferencesError || translate('aor.input.references.many_missing', {
            _: 'aor.input.references.many_missing'
        }) : null,
        choices: Array.isArray(matchingReferences) ? matchingReferences : referenceRecords
    };
};

/**
 * An Input component for fields containing a list of references to another resource.
 * Useful for 'hasMany' relationship.
 *
 * @example
 * The post object has many tags, so the post resource looks like:
 * {
 *    id: 1234,
 *    tag_ids: [ "1", "23", "4" ]
 * }
 *
 * ReferenceArrayInput component fetches the current resources (using the
 * `CRUD_GET_MANY` REST method) as well as possible resources (using the
 * `CRUD_GET_MATCHING` REST method) in the reference endpoint. It then
 * delegates rendering to a subcomponent, to which it passes the possible
 * choices as the `choices` attribute.
 *
 * Use it with a selector component as child, like `<SelectArrayInput>`
 * or <CheckboxGroupInput>.
 *
 * @example
 * export const PostEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <ReferenceArrayInput source="tag_ids" reference="tags">
 *                 <SelectArrayInput optionText="name" />
 *             </ReferenceArrayInput>
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * By default, restricts the possible values to 25. You can extend this limit
 * by setting the `perPage` prop.
 *
 * @example
 * <ReferenceArrayInput
 *      source="tag_ids"
 *      reference="tags"
 *      perPage={100}>
 *     <SelectArrayInput optionText="name" />
 * </ReferenceArrayInput>
 *
 * By default, orders the possible values by id desc. You can change this order
 * by setting the `sort` prop (an object with `field` and `order` properties).
 *
 * @example
 * <ReferenceArrayInput
 *      source="tag_ids"
 *      reference="tags"
 *      sort={{ field: 'name', order: 'ASC' }}>
 *     <SelectArrayInput optionText="name" />
 * </ReferenceArrayInput>
 *
 * Also, you can filter the query used to populate the possible values. Use the
 * `filter` prop for that.
 *
 * @example
 * <ReferenceArrayInput
 *      source="tag_ids"
 *      reference="tags"
 *      filter={{ is_public: true }}>
 *     <SelectArrayInput optionText="name" />
 * </ReferenceArrayInput>
 *
 * The enclosed component may filter results. ReferenceArrayInput passes a
 * `setFilter` function as prop to its child component. It uses the value to
 * create a filter for the query - by default { q: [searchText] }. You can
 * customize the mapping searchText => searchQuery by setting a custom
 * `filterToQuery` function prop:
 *
 * @example
 * <ReferenceArrayInput
 *      source="tag_ids"
 *      reference="tags"
 *      filterToQuery={searchText => ({ name: searchText })}>
 *     <SelectArrayInput optionText="name" />
 * </ReferenceArrayInput>
 */

var ReferenceArrayInput = exports.ReferenceArrayInput = function (_Component) {
    (0, _inherits3.default)(ReferenceArrayInput, _Component);

    function ReferenceArrayInput(props) {
        (0, _classCallCheck3.default)(this, ReferenceArrayInput);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ReferenceArrayInput.__proto__ || Object.getPrototypeOf(ReferenceArrayInput)).call(this, props));

        _initialiseProps.call(_this);

        var perPage = props.perPage,
            sort = props.sort,
            filter = props.filter;
        // stored as a property rather than state because we don't want redraw of async updates

        _this.params = { pagination: { page: 1, perPage: perPage }, sort: sort, filter: filter };
        _this.debouncedSetFilter = (0, _lodash2.default)(_this.setFilter.bind(_this), 500);
        return _this;
    }

    (0, _createClass3.default)(ReferenceArrayInput, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.fetchReferenceAndOptions();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.record.id !== nextProps.record.id) {
                this.fetchReferenceAndOptions(nextProps);
            }
        }
    }, {
        key: 'fetchReferenceAndOptions',
        value: function fetchReferenceAndOptions() {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props,
                input = _ref2.input,
                reference = _ref2.reference,
                source = _ref2.source,
                resource = _ref2.resource;

            var _params = this.params,
                pagination = _params.pagination,
                sort = _params.sort,
                filter = _params.filter;

            var ids = input.value;
            if (ids) {
                if (!Array.isArray(ids)) {
                    throw Error('The value of ReferenceArrayInput should be an array');
                }
                this.props.crudGetMany(reference, ids);
            }
            this.props.crudGetMatching(reference, referenceSource(resource, source), pagination, sort, filter);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                input = _props.input,
                resource = _props.resource,
                label = _props.label,
                source = _props.source,
                allowEmpty = _props.allowEmpty,
                matchingReferences = _props.matchingReferences,
                basePath = _props.basePath,
                onChange = _props.onChange,
                children = _props.children,
                meta = _props.meta,
                translate = _props.translate,
                referenceRecords = _props.referenceRecords;


            if (_react2.default.Children.count(children) !== 1) {
                throw new Error('<ReferenceArrayInput> only accepts a single child (like <Datagrid>)');
            }

            var translatedLabel = translate(label || 'resources.' + resource + '.fields.' + source);

            var dataStatus = getDataStatus({
                input: input,
                matchingReferences: matchingReferences,
                referenceRecords: referenceRecords,
                translate: translate
            });

            if (dataStatus.waiting) {
                return _react2.default.createElement(_ReferenceLoadingProgress2.default, { label: translatedLabel });
            }

            if (dataStatus.error) {
                return _react2.default.createElement(_ReferenceError2.default, {
                    label: translatedLabel,
                    error: translate('aor.input.references.all_missing', {
                        _: 'aor.input.references.all_missing'
                    })
                });
            }

            return _react2.default.cloneElement(children, {
                allowEmpty: allowEmpty,
                input: input,
                label: translatedLabel,
                resource: resource,
                meta: dataStatus.warning ? (0, _extends3.default)({}, meta, {
                    error: dataStatus.warning,
                    touched: true
                }) : meta,
                source: source,
                choices: dataStatus.choices,
                basePath: basePath,
                onChange: onChange,
                setFilter: this.debouncedSetFilter,
                setPagination: this.setPagination,
                setSort: this.setSort,
                translateChoice: false
            });
        }
    }]);
    return ReferenceArrayInput;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.setFilter = function (filter) {
        if (filter !== _this2.params.filter) {
            _this2.params.filter = _this2.props.filterToQuery(filter);
            _this2.fetchReferenceAndOptions();
        }
    };

    this.setPagination = function (pagination) {
        if (pagination !== _this2.param.pagination) {
            _this2.param.pagination = pagination;
            _this2.fetchReferenceAndOptions();
        }
    };

    this.setSort = function (sort) {
        if (sort !== _this2.params.sort) {
            _this2.params.sort = sort;
            _this2.fetchReferenceAndOptions();
        }
    };
};

ReferenceArrayInput.propTypes = {
    addField: _propTypes2.default.bool.isRequired,
    allowEmpty: _propTypes2.default.bool.isRequired,
    basePath: _propTypes2.default.string,
    children: _propTypes2.default.element.isRequired,
    crudGetMatching: _propTypes2.default.func.isRequired,
    crudGetMany: _propTypes2.default.func.isRequired,
    filter: _propTypes2.default.object,
    filterToQuery: _propTypes2.default.func.isRequired,
    input: _propTypes2.default.object.isRequired,
    label: _propTypes2.default.string,
    matchingReferences: _propTypes2.default.array,
    meta: _propTypes2.default.object,
    onChange: _propTypes2.default.func,
    perPage: _propTypes2.default.number,
    reference: _propTypes2.default.string.isRequired,
    referenceRecords: _propTypes2.default.array,
    resource: _propTypes2.default.string.isRequired,
    sort: _propTypes2.default.shape({
        field: _propTypes2.default.string,
        order: _propTypes2.default.oneOf(['ASC', 'DESC'])
    }),
    source: _propTypes2.default.string,
    translate: _propTypes2.default.func.isRequired
};

ReferenceArrayInput.defaultProps = {
    allowEmpty: false,
    filter: {},
    filterToQuery: function filterToQuery(searchText) {
        return { q: searchText };
    },
    matchingReferences: null,
    perPage: 25,
    referenceRecords: [],
    sort: { field: 'id', order: 'DESC' }
};

function mapStateToProps(state, props) {
    var referenceIds = props.input.value || [];
    var data = state.admin.resources[props.reference].data;
    return {
        matchingReferences: (0, _possibleValues.getPossibleReferences)(state, referenceSource(props.resource, props.source), props.reference, referenceIds),
        referenceRecords: referenceIds.reduce(function (references, referenceId) {
            if (data[referenceId]) {
                references.push(data[referenceId]);
            }
            return references;
        }, [])
    };
}

var ConnectedReferenceArrayInput = (0, _reactRedux.connect)(mapStateToProps, {
    crudGetMany: _dataActions.crudGetMany,
    crudGetMatching: _dataActions.crudGetMatching
})((0, _translate2.default)(ReferenceArrayInput));

ConnectedReferenceArrayInput.defaultProps = {
    addField: true
};

exports.default = ConnectedReferenceArrayInput;