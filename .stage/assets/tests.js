define('ember-starter/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('ember-starter/tests/application/adapter.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - application');
  QUnit.test('application/adapter.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/adapter.js should pass jshint.');
  });
});
define('ember-starter/tests/components/game-row/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/game-row');
  QUnit.test('components/game-row/component.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/game-row/component.js should pass jshint.');
  });
});
define('ember-starter/tests/components/login-form/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/login-form');
  QUnit.test('components/login-form/component.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/login-form/component.js should pass jshint.');
  });
});
define('ember-starter/tests/components/new-game/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/new-game');
  QUnit.test('components/new-game/component.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/new-game/component.js should pass jshint.');
  });
});
define('ember-starter/tests/game/adapter.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - game');
  QUnit.test('game/adapter.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'game/adapter.js should pass jshint.\ngame/adapter.js: line 2, col 8, \'Ember\' is defined but never used.\n\n1 error');
  });
});
define('ember-starter/tests/game/model.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - game');
  QUnit.test('game/model.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'game/model.js should pass jshint.');
  });
});
define('ember-starter/tests/games/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - games');
  QUnit.test('games/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'games/route.js should pass jshint.\ngames/route.js: line 25, col 17, Forgotten \'debugger\' statement?\n\n1 error');
  });
});
define('ember-starter/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('ember-starter/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/destroy-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('ember-starter/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-starter/tests/helpers/start-app', 'ember-starter/tests/helpers/destroy-app'], function (exports, _qunit, _emberStarterTestsHelpersStartApp, _emberStarterTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _emberStarterTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _emberStarterTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('ember-starter/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/module-for-acceptance.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('ember-starter/tests/helpers/resolver', ['exports', 'ember-resolver', 'ember-starter/config/environment'], function (exports, _emberResolver, _emberStarterConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _emberStarterConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberStarterConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('ember-starter/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('ember-starter/tests/helpers/start-app', ['exports', 'ember', 'ember-starter/app', 'ember-starter/config/environment'], function (exports, _ember, _emberStarterApp, _emberStarterConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _emberStarterConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _emberStarterApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('ember-starter/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('ember-starter/tests/index/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - index');
  QUnit.test('index/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'index/route.js should pass jshint.\nindex/route.js: line 45, col 17, Forgotten \'debugger\' statement?\n\n1 error');
  });
});
define('ember-starter/tests/integration/components/game-row/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('game-row', 'Integration | Component | game row', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 12
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'game-row', ['loc', [null, [1, 0], [1, 12]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:" + EOL +
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.2.0',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'game-row', [], [], 0, null, ['loc', [null, [2, 4], [4, 17]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ember-starter/tests/integration/components/game-row/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/game-row');
  QUnit.test('integration/components/game-row/component-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/game-row/component-test.js should pass jshint.');
  });
});
define('ember-starter/tests/integration/components/login-form/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('login-form', 'Integration | Component | login form', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 14
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'login-form', ['loc', [null, [1, 0], [1, 14]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:" + EOL +
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.2.0',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'login-form', [], [], 0, null, ['loc', [null, [2, 4], [4, 19]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ember-starter/tests/integration/components/login-form/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/login-form');
  QUnit.test('integration/components/login-form/component-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/login-form/component-test.js should pass jshint.');
  });
});
define('ember-starter/tests/integration/components/new-game/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('new-game', 'Integration | Component | new game', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 12
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'new-game', ['loc', [null, [1, 0], [1, 12]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:" + EOL +
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.2.0',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.2.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'new-game', [], [], 0, null, ['loc', [null, [2, 4], [4, 17]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('ember-starter/tests/integration/components/new-game/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/new-game');
  QUnit.test('integration/components/new-game/component-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/new-game/component-test.js should pass jshint.');
  });
});
define('ember-starter/tests/roster/adapter.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - roster');
  QUnit.test('roster/adapter.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'roster/adapter.js should pass jshint.');
  });
});
define('ember-starter/tests/roster/model.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - roster');
  QUnit.test('roster/model.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'roster/model.js should pass jshint.');
  });
});
define('ember-starter/tests/rosters/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - rosters');
  QUnit.test('rosters/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'rosters/route.js should pass jshint.');
  });
});
define('ember-starter/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass jshint.\nrouter.js: line 10, col 30, Missing semicolon.\nrouter.js: line 19, col 32, Missing semicolon.\n\n2 errors');
  });
});
define('ember-starter/tests/stat/adapter.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - stat');
  QUnit.test('stat/adapter.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'stat/adapter.js should pass jshint.');
  });
});
define('ember-starter/tests/stat/model.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - stat');
  QUnit.test('stat/model.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'stat/model.js should pass jshint.');
  });
});
define('ember-starter/tests/stats/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - stats');
  QUnit.test('stats/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'stats/route.js should pass jshint.');
  });
});
define('ember-starter/tests/team/adapter.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - team');
  QUnit.test('team/adapter.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'team/adapter.js should pass jshint.');
  });
});
define('ember-starter/tests/team/model.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - team');
  QUnit.test('team/model.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'team/model.js should pass jshint.');
  });
});
define('ember-starter/tests/teams/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - teams');
  QUnit.test('teams/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'teams/route.js should pass jshint.');
  });
});
define('ember-starter/tests/test-helper', ['exports', 'ember-starter/tests/helpers/resolver', 'ember-qunit'], function (exports, _emberStarterTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_emberStarterTestsHelpersResolver['default']);
});
define('ember-starter/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('ember-starter/tests/unit/application/adapter-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('ember-starter/tests/unit/application/adapter-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/application');
  QUnit.test('unit/application/adapter-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/application/adapter-test.js should pass jshint.');
  });
});
define('ember-starter/tests/unit/game/serializer-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('game', 'Unit | Serializer | game', {
    // Specify the other units that are required for this test.
    needs: ['serializer:game']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-starter/tests/unit/game/serializer-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/game');
  QUnit.test('unit/game/serializer-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/game/serializer-test.js should pass jshint.');
  });
});
define('ember-starter/tests/unit/games/adapter-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:games', 'Unit | Adapter | games', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('ember-starter/tests/unit/games/adapter-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/games');
  QUnit.test('unit/games/adapter-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/games/adapter-test.js should pass jshint.');
  });
});
define('ember-starter/tests/unit/games/model-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('games', 'Unit | Model | games', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-starter/tests/unit/games/model-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/games');
  QUnit.test('unit/games/model-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/games/model-test.js should pass jshint.');
  });
});
define('ember-starter/tests/unit/games/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:games', 'Unit | Route | games', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-starter/tests/unit/games/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/games');
  QUnit.test('unit/games/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/games/route-test.js should pass jshint.');
  });
});
define('ember-starter/tests/unit/index/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-starter/tests/unit/index/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/index');
  QUnit.test('unit/index/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/index/route-test.js should pass jshint.');
  });
});
define('ember-starter/tests/unit/login/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:login', 'Unit | Route | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-starter/tests/unit/login/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/login');
  QUnit.test('unit/login/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/login/route-test.js should pass jshint.');
  });
});
define('ember-starter/tests/unit/player-stat/adapter-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:player-stat', 'Unit | Adapter | player stat', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('ember-starter/tests/unit/player-stat/adapter-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/player-stat');
  QUnit.test('unit/player-stat/adapter-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/player-stat/adapter-test.js should pass jshint.');
  });
});
define('ember-starter/tests/unit/player-stat/model-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('player-stat', 'Unit | Model | player stat', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-starter/tests/unit/player-stat/model-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/player-stat');
  QUnit.test('unit/player-stat/model-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/player-stat/model-test.js should pass jshint.');
  });
});
define('ember-starter/tests/unit/player-stats/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:player-stats', 'Unit | Route | player stats', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-starter/tests/unit/player-stats/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/player-stats');
  QUnit.test('unit/player-stats/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/player-stats/route-test.js should pass jshint.');
  });
});
define('ember-starter/tests/unit/roster/adapter-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:roster', 'Unit | Adapter | roster', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('ember-starter/tests/unit/roster/adapter-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/roster');
  QUnit.test('unit/roster/adapter-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/roster/adapter-test.js should pass jshint.');
  });
});
define('ember-starter/tests/unit/roster/model-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('roster', 'Unit | Model | roster', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-starter/tests/unit/roster/model-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/roster');
  QUnit.test('unit/roster/model-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/roster/model-test.js should pass jshint.');
  });
});
define('ember-starter/tests/unit/rosters/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:rosters', 'Unit | Route | rosters', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-starter/tests/unit/rosters/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/rosters');
  QUnit.test('unit/rosters/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/rosters/route-test.js should pass jshint.');
  });
});
define('ember-starter/tests/unit/team/adapter-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:team', 'Unit | Adapter | team', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('ember-starter/tests/unit/team/adapter-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/team');
  QUnit.test('unit/team/adapter-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/team/adapter-test.js should pass jshint.');
  });
});
define('ember-starter/tests/unit/team/model-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('team', 'Unit | Model | team', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-starter/tests/unit/team/model-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/team');
  QUnit.test('unit/team/model-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/team/model-test.js should pass jshint.');
  });
});
define('ember-starter/tests/unit/teams/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:teams', 'Unit | Route | teams', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-starter/tests/unit/teams/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/teams');
  QUnit.test('unit/teams/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/teams/route-test.js should pass jshint.');
  });
});
define('ember-starter/tests/unit/user/adapter-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:user', 'Unit | Adapter | user', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('ember-starter/tests/unit/user/adapter-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/user');
  QUnit.test('unit/user/adapter-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/user/adapter-test.js should pass jshint.');
  });
});
define('ember-starter/tests/unit/user/model-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('user', 'Unit | Model | user', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-starter/tests/unit/user/model-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/user');
  QUnit.test('unit/user/model-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/user/model-test.js should pass jshint.');
  });
});
define('ember-starter/tests/unit/users/adapter-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:users', 'Unit | Adapter | users', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('ember-starter/tests/unit/users/adapter-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/users');
  QUnit.test('unit/users/adapter-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/users/adapter-test.js should pass jshint.');
  });
});
define('ember-starter/tests/unit/users/model-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('users', 'Unit | Model | users', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-starter/tests/unit/users/model-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/users');
  QUnit.test('unit/users/model-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/users/model-test.js should pass jshint.');
  });
});
define('ember-starter/tests/unit/users/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:users', 'Unit | Route | users', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-starter/tests/unit/users/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/users');
  QUnit.test('unit/users/route-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/users/route-test.js should pass jshint.');
  });
});
define('ember-starter/tests/user/adapter.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - user');
  QUnit.test('user/adapter.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'user/adapter.js should pass jshint.');
  });
});
define('ember-starter/tests/user/model.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - user');
  QUnit.test('user/model.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'user/model.js should pass jshint.');
  });
});
define('ember-starter/tests/users/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - users');
  QUnit.test('users/route.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'users/route.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('ember-starter/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map