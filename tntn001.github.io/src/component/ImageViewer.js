import React from "react"
import Img from "react-image";
import LightBox from "react-image-lightbox"
import "react-image-lightbox/style.css";

export default class ImageViewer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            photoIndex: 0
        }
        var listImage = props.list || [];
        var defaultWidth = props.width || 100;
        this.listViewImage = [];
        for (var i = 0; i < listImage.length; i++) {
            this.listViewImage.push
                (<Img src={listImage[i]}
                    width={defaultWidth}
                    height={defaultWidth}
                    style={{
                        marginRight: 20,
                        marginBottom: 20,
                        borderStyle: "groove",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        overflow: "hidden"
                    }}
                    onClick={() => this.imageClick()} />);
        }
    }

    imageClick() {
        this.setState({ isOpen: true });
    }

    render() {
        const { photoIndex, isOpen } = this.state;
        const { list } = this.props;
        return (<div>
            <div style={{
                display: "flex",
                flexDirection: "row",
            }}>
                {this.listViewImage}
            </div>

            {isOpen && (<LightBox
                mainSrc={list[photoIndex]}
                nextSrc={list[(photoIndex + 1) % list.length]}
                prevSrc={list[(photoIndex + list.length - 1) % list.length]}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                    this.setState({
                        photoIndex: (photoIndex + list.length - 1) % list.length,
                    })
                }
                onMoveNextRequest={() =>
                    this.setState({
                        photoIndex: (photoIndex + 1) % list.length,
                    })
                }
            />)}

        </div>)
    }

}