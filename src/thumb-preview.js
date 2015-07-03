const React = require("react");

class ThumbPreview extends React.Component {

  constructor(props){
    super(props);

    this.state = { imgSrc: this.props.images[0] };
  }

  render(){
    return <img src={this.state.imgSrc}
      onMouseMove={this._mouseMoveHandler.bind(this)}/>;
  }

  _mouseMoveHandler(event){
    let target = event.target;
    let allImages = this.props.images;
    let sectionWidth = parseInt(target.width, 10) / allImages.length;
    let positionX = event.clientX - event.target.getBoundingClientRect().left;

    this._changeImage(target, allImages, positionX, sectionWidth);
  }

  _changeImage(img, allImages, positionX, sectionWidth){
    let imagesCount = allImages.length;
    let setDefault = true;

    for(let i=imagesCount-1; i>0; i--){
      if(positionX > (sectionWidth*i)){
        this._updateSrc(allImages[i]);
        setDefault = false;
        break;
      }
    }

    if(setDefault){
      this._updateSrc(allImages[0]);
    }
  }

  _updateSrc(imagePath){
    this.setState({ imgSrc: imagePath });
  }
}

module.exports = ThumbPreview;
