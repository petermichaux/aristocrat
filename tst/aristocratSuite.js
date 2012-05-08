(function() {

    function trim(str) {
        return str.replace(/^\s+|\s+$/g, '');
    }

    function collapse(str) {
        return str.replace(/\s+/, ' ');
    }

    function cleanup(str) {
        return trim(collapse(str));
    }

    buster.testCase("Aristocrat Suite", {

        "test identity": function() {
            assert.same(true, true);
        },

        "test hasClass is false when no className on element": function() {
            var el = document.createElement('div');
            assert.same(false, aristocrat.hasClass(el, 'king'));
        },

        "test hasClass is true when className on element": function() {
            var el = document.createElement('div');
            el.className = 'king'
            assert.same(true, aristocrat.hasClass(el, 'king'));
            assert.same(false, aristocrat.hasClass(el, 'queen'));
        },

        "test hasClass is true when two classNames on element": function() {
            var el = document.createElement('div');
            el.className = 'king queen';
            assert.same(true, aristocrat.hasClass(el, 'king'));
            assert.same(true, aristocrat.hasClass(el, 'queen'));
            assert.same(false, aristocrat.hasClass(el, 'jack'));
        },

        "test hasClass is true when three classNames on element": function() {
            // particularly interested in the middle class name being detected correctly
            var el = document.createElement('div');
            el.className = 'king queen jack';
            assert.same(true, aristocrat.hasClass(el, 'king'));
            assert.same(true, aristocrat.hasClass(el, 'queen'));
            assert.same(true, aristocrat.hasClass(el, 'jack'));
        },

        "test hasClass is true when duplicate className on element": function() {
            var el = document.createElement('div');
            el.className = 'king king';
            assert.same(true, aristocrat.hasClass(el, 'king'));
        },

        "test hasClass is false when testing for part of a className": function() {
            var el = document.createElement('div');
            el.className = 'king';
            assert.same(false, aristocrat.hasClass(el, 'ki'));
        },

        "test addClass does to an element with no className": function() {
            var el = document.createElement('div');
            aristocrat.addClass(el, 'king');
            assert.same('king', cleanup(el.className));
        },

        "test addClass does to an element with a different className": function() {
            var el = document.createElement('div');
            el.className = 'king';
            aristocrat.addClass(el, 'queen');
            assert.same('king queen', cleanup(el.className));
        },

        "test addClass doesn't to an element that already has the className": function() {
            var el = document.createElement('div');
            el.className = 'king';
            aristocrat.addClass(el, 'king');
            assert.same('king', cleanup(el.className));
        },

        "test removeClass does to an element that has the className": function() {
            var el = document.createElement('div');
            el.className = 'king';
            aristocrat.removeClass(el, 'king');
            assert.same('', cleanup(el.className));
        },

        "test removeClass does to an element that has the className multiple times": function() {
            var el = document.createElement('div');
            el.className = 'king queen king jack king';
            aristocrat.removeClass(el, 'king');
            assert.same('queen jack', cleanup(el.className));
        },

        "test removeClass does to an element that has the className multiple adjacent times": function() {
            var el = document.createElement('div');
            el.className = 'king queen king king king';
            aristocrat.removeClass(el, 'king');
            assert.same('queen', cleanup(el.className));
        },

        "test removeClass does not to an element that has a className that contains the provided className": function() {
            var el = document.createElement('div');
            el.className = 'king';
            aristocrat.removeClass(el, 'ki');
            assert.same('king', cleanup(el.className));
        },

        "test toggleClass does to an element that has the className": function() {
            var el = document.createElement('div');
            el.className = 'king queen';
            aristocrat.toggleClass(el, 'queen');
            assert.same('king', cleanup(el.className));
        },

        "test toggleClass does to an element that has the className multiple times": function() {
            var el = document.createElement('div');
            el.className = 'king queen jack queen';
            aristocrat.toggleClass(el, 'queen');
            assert.same('king jack', cleanup(el.className));
        },

        "test toggleClass does to an element that has the className multiple adjacent times": function() {
            var el = document.createElement('div');
            el.className = 'king queen queen';
            aristocrat.toggleClass(el, 'queen');
            assert.same('king', cleanup(el.className));
        },

        "test toggleClass does to an element that does not have the className": function() {
            var el = document.createElement('div');
            el.className = 'king';
            aristocrat.toggleClass(el, 'queen');
            assert.same('king queen', cleanup(el.className));
        }

    });

}());
