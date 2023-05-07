"use strict";

var _Vue = Vue,
    createApp = _Vue.createApp;
createApp({
  data: function data() {
    return {
      key: null,
      code: null,
      keyboard: null,
      isVisibleNotify: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    window.addEventListener("keydown", function (event) {
      _this.key = event.which;
      _this.code = event.code;
      _this.keyboard = event.key;
    });
  },
  methods: {
    copText: function copText(txt) {
      var _this2 = this;

      return regeneratorRuntime.async(function copText$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (txt) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.next = 4;
              return regeneratorRuntime.awrap(navigator.clipboard.writeText(txt));

            case 4:
              this.isVisibleNotify = true;
              setTimeout(function () {
                _this2.isVisibleNotify = false;
              }, 1000);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }
}).mount("#app");