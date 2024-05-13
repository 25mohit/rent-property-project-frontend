
import Image from "next/image";

const HomeLoader = () => {
    return (

        <div className="row listingProduct bottomSpace skeletonLoader">
            <div className="titleBox">
                <div className="col"><h3 className="titleS height20 width150 skeletonAnimation"></h3></div>
                <div className="col text-right">
                    <button className="filterBtn height20 width50 skeletonAnimation"></button>
                </div>
            </div>
            <div className="col-6">
                <div className="productCard">
                    <figure className="productCardImg">
                        <div className="widthfull height150 skeletonAnimation"></div>
                    </figure>
                    <div className="productCardBoy">
                        <h3 className="itemPrice height20 width150 skeletonAnimation"></h3>
                        <h4 className="distance height10 width100 skeletonAnimation"></h4>
                        <h5 className="prdTitle textLimit l1 height10 width100 skeletonAnimation"></h5>
                        <p className="location textLimit l1 height10 width100 skeletonAnimation"></p>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="productCard">
                    <figure className="productCardImg">
                        <div className="widthfull height150 skeletonAnimation"></div>
                    </figure>
                    <div className="productCardBoy">
                        <h3 className="itemPrice height20 width150 skeletonAnimation"></h3>
                        <h4 className="distance height10 width100 skeletonAnimation"></h4>
                        <h5 className="prdTitle textLimit l1 height10 width100 skeletonAnimation"></h5>
                        <p className="location textLimit l1 height10 width100 skeletonAnimation"></p>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="productCard">
                    <figure className="productCardImg">
                        <div className="widthfull height150 skeletonAnimation"></div>
                    </figure>
                    <div className="productCardBoy">
                        <h3 className="itemPrice height20 width150 skeletonAnimation"></h3>
                        <h4 className="distance height10 width100 skeletonAnimation"></h4>
                        <h5 className="prdTitle textLimit l1 height10 width100 skeletonAnimation"></h5>
                        <p className="location textLimit l1 height10 width100 skeletonAnimation"></p>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="productCard">
                    <figure className="productCardImg">
                        <div className="widthfull height150 skeletonAnimation"></div>
                    </figure>
                    <div className="productCardBoy">
                        <h3 className="itemPrice height20 width150 skeletonAnimation"></h3>
                        <h4 className="distance height10 width100 skeletonAnimation"></h4>
                        <h5 className="prdTitle textLimit l1 height10 width100 skeletonAnimation"></h5>
                        <p className="location textLimit l1 height10 width100 skeletonAnimation"></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeLoader