"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var React = require("react");

var ThumbPreview = (function (_React$Component) {
  function ThumbPreview(props) {
    _classCallCheck(this, ThumbPreview);

    _get(Object.getPrototypeOf(ThumbPreview.prototype), "constructor", this).call(this, props);

    this.state = { imgSrc: this.props.images[0] };
  }

  _inherits(ThumbPreview, _React$Component);

  _createClass(ThumbPreview, [{
    key: "render",
    value: function render() {
      return React.createElement("img", { src: this.state.imgSrc,
        onMouseMove: this._mouseMoveHandler.bind(this) });
    }
  }, {
    key: "_mouseMoveHandler",
    value: function _mouseMoveHandler(event) {
      var target = event.target;
      var allImages = this.props.images;
      var sectionWidth = parseInt(target.width, 10) / allImages.length;
      var positionX = event.clientX - event.target.getBoundingClientRect().left;

      this._changeImage(target, allImages, positionX, sectionWidth);
    }
  }, {
    key: "_changeImage",
    value: function _changeImage(img, allImages, positionX, sectionWidth) {
      var imagesCount = allImages.length;
      var setDefault = true;

      for (var i = imagesCount - 1; i > 0; i--) {
        if (positionX > sectionWidth * i) {
          this._updateSrc(allImages[i]);
          setDefault = false;
          break;
        }
      }

      if (setDefault) {
        this._updateSrc(allImages[0]);
      }
    }
  }, {
    key: "_updateSrc",
    value: function _updateSrc(imagePath) {
      this.setState({ imgSrc: imagePath });
    }
  }]);

  return ThumbPreview;
})(React.Component);

module.exports = ThumbPreview;