import carpet from "../../assets/carpet.jpg";
import bowls from "../../assets/Bowls.jpg";
import children from "../../assets/children.jpg";
import cookware from "../../assets/Cookware.jpg";
import dress from "../../assets/dress.jpg";
import duvet from "../../assets/Duvet.jpg";
import handbag from "../../assets/Handbag.jpg";
import handbagf from "../../assets/handbagf.jpg";
import dinnerset from "../../assets/dinnerset.jpg";
import Jeans from "../../assets/Jeans.jpg";
import Juiceset from "../../assets/Juiceset.jpg";
import Kitchenset from "../../assets/Kitchenset.jpg";
import mats from "../../assets/mats.jpg";
import mentrouser from "../../assets/Mentrouser.jpg";
import mugs from "../../assets/Mugs.jpg";
import nets from "../../assets/nets.jpg";
import sleeveless from "../../assets/sleeveless.jpg";
import smart from "../../assets/smart.jpg";
import trousermen from "../../assets/trousermen.jpg";
import womend from "../../assets/women.jpg";

import "./featured.css";

const Featured = () => {
  return (
    <div className=" d-flex flex-column align-items-center pt-5">
      <div className="upperdiv text-center">
        <p>Shop by category</p>
        <h3>Featured Products</h3>
        <hr />
      </div>
      <div className="lowerdiv container row d-flex gap-3 flex-wrap pt-4">
        <div
          className="sectionf col-12 col-sm-5 col-lg-2 col-md-3 p-3  d-flex flex-column align-items-center gap-3 bg-secondary-subtle
"
        >
          <div className="image">
            <img src={womend} className="img-fluid" alt="shopping item" />
          </div>
          <div
            className="wprice text-center w-100 p-2
"
          >
            <h4 className="fs-6 fw-bolder">Women dress</h4>
            <h5 className="fs-6 fw-normal">KSH. 400</h5>
          </div>
        </div>
        <div className="sectionf col-12 col-sm-5 col-lg-2 col-md-3 p-3  d-flex flex-column align-items-center gap-3 bg-secondary-subtle">
          <div className="image">
            <img src={sleeveless} className="img-fluid" alt="shopping item" />
          </div>
          <div
            className="wprice text-center w-100 p-2
"
          >
            <h4 className="fs-6 fw-bolder">Comfortable dress</h4>
            <h5 className="fs-6 fw-normal">KSH. 350</h5>
          </div>
        </div>
        <div className="sectionf col-12 col-sm-5 col-lg-2 col-md-3 p-3  d-flex flex-column align-items-center gap-3 bg-secondary-subtle">
          <div className="image">
            <img src={mentrouser} className="img-fluid" alt="shopping item" />
          </div>
          <div
            className="wprice text-center w-100 p-2
"
          >
            <h4 className="fs-6 fw-bolder">Men trouser</h4>
            <h5 className="fs-6 fw-normal">KSH. 350</h5>
          </div>
        </div>
        <div className="sectionf col-12 col-sm-5 col-lg-2 col-md-3 p-3  d-flex flex-column align-items-center gap-3 bg-secondary-subtle">
          <div className="image">
            <img src={children} className="img-fluid" alt="shopping item" />
          </div>
          <div
            className="wprice text-center w-100 p-2
"
          >
            <h4 className="fs-6 fw-bolder">Children Clothing</h4>
            <h5 className="fs-6 fw-normal">KSH. 500</h5>
          </div>
        </div>
        <div className="sectionf col-12 col-sm-5 col-lg-2 col-md-3 p-3  d-flex flex-column align-items-center gap-3 bg-secondary-subtle">
          <div className="image">
            <img src={Jeans} className="img-fluid" alt="shopping item" />
          </div>
          <div
            className="wprice text-center w-100 p-2
"
          >
            <h4 className="fs-6 fw-bolder">Jeans Trouser</h4>
            <h5 className="fs-6 fw-normal">KSH. 1200</h5>
          </div>
        </div>
        <div className="sectionf col-12 col-sm-5 col-lg-2 col-md-3 p-3  d-flex flex-column align-items-center gap-3 bg-secondary-subtle">
          <div className="image">
            <img src={trousermen} className="img-fluid" alt="shopping item" />
          </div>
          <div
            className="wprice text-center w-100 p-2
"
          >
            <h4 className="fs-6 fw-bolder">Men trouser</h4>
            <h5 className="fs-6 fw-normal">KSH. 1100</h5>
          </div>
        </div>
        <div className="sectionf col-12 col-sm-5 col-lg-2 col-md-3 p-3  d-flex flex-column align-items-center gap-3 bg-secondary-subtle">
          <div className="image">
            <img src={dress} className="img-fluid" alt="shopping item" />
          </div>
          <div
            className="wprice text-center w-100 p-2
"
          >
            <h4 className="item fs-6 fw-bolder">Ladies Dress</h4>
            <h5 className="price fs-6 fw-normal">KSH. 350</h5>
          </div>
        </div>
        <div className="sectionf col-12 col-sm-5 col-lg-2 col-md-3 p-3  d-flex flex-column align-items-center gap-3 bg-secondary-subtle">
          <div className="image">
            <img src={carpet} className="img-fluid" alt="shopping item" />
          </div>
          <div
            className="wprice text-center w-100 p-2
"
          >
            <h4 className="item fs-6 fw-bolder">Carpet</h4>
            <h5 className="price fs-6 fw-normal">KSH. 350</h5>
          </div>
        </div>
        <div className="sectionf col-12 col-sm-5 col-lg-2 col-md-3 p-3  d-flex flex-column align-items-center gap-3 bg-secondary-subtle">
          <div className="image">
            <img src={bowls} className="img-fluid" alt="shopping item" />
          </div>
          <div
            className="wprice text-center w-100 p-2
"
          >
            <h4 className="item fs-6 fw-bolder">Bowl set</h4>
            <h5 className="price fs-6 fw-normal">KSH. 350</h5>
          </div>
        </div>
        <div className="sectionf col-12 col-sm-5 col-lg-2 col-md-3 p-3  d-flex flex-column align-items-center gap-3 bg-secondary-subtle">
          <div className="image">
            <img src={cookware} className="img-fluid" alt="shopping item" />
          </div>
          <div
            className="wprice text-center w-100 p-2
"
          >
            <h4 className="item fs-6 fw-bolder">Cooking Utensils</h4>
            <h5 className="price fs-6 fw-normal">KSH. 350</h5>
          </div>
        </div>
        <div className="sectionf col-12 col-sm-5 col-lg-2 col-md-3 p-3  d-flex flex-column align-items-center gap-3 bg-secondary-subtle">
          <div className="image">
            <img src={duvet} className="img-fluid" alt="shopping item" />
          </div>
          <div
            className="wprice text-center w-100 p-2
"
          >
            <h4 className="item fs-6 fw-bolder">Duvet</h4>
            <h5 className="price fs-6 fw-normal">KSH. 350</h5>
          </div>
        </div>
        <div className="sectionf col-12 col-sm-5 col-lg-2 col-md-3 p-3  d-flex flex-column align-items-center gap-3 bg-secondary-subtle">
          <div className="image">
            <img src={handbag} className="img-fluid" alt="shopping item" />
          </div>
          <div
            className="wprice text-center w-100 p-2
"
          >
            <h4 className="item fs-6 fw-bolder">Handbag</h4>
            <h5 className="price fs-6 fw-normal">KSH. 350</h5>
          </div>
        </div>
        <div className="sectionf col-12 col-sm-5 col-lg-2 col-md-3 p-3  d-flex flex-column align-items-center gap-3 bg-secondary-subtle">
          <div className="image">
            <img src={handbagf} className="img-fluid" alt="shopping item" />
          </div>
          <div
            className="wprice text-center w-100 p-2
"
          >
            <h4 className="item fs-6 fw-bolder">Handbag</h4>
            <h5 className="price fs-6 fw-normal">KSH. 350</h5>
          </div>
        </div>
        <div className="sectionf col-12 col-sm-5 col-lg-2 col-md-3 p-3  d-flex flex-column align-items-center gap-3 bg-secondary-subtle">
          <div className="image">
            <img src={dinnerset} className="img-fluid" alt="shopping item" />
          </div>
          <div
            className="wprice text-center w-100 p-2
"
          >
            <h4 className="item fs-6 fw-bolder">Dinner set</h4>
            <h5 className="price fs-6 fw-normal">KSH. 350</h5>
          </div>
        </div>
        <div className="sectionf col-12 col-sm-5 col-lg-2 col-md-3 p-3  d-flex flex-column align-items-center gap-3 bg-secondary-subtle">
          <div className="image">
            <img src={Juiceset} className="img-fluid" alt="shopping item" />
          </div>
          <div
            className="wprice text-center w-100 p-2
"
          >
            <h4 className="item fs-6 fw-bolder">Juice glass</h4>
            <h5 className="price fs-6 fw-normal">KSH. 350</h5>
          </div>
        </div>
        <div className="sectionf col-12 col-sm-5 col-lg-2 col-md-3 p-3  d-flex flex-column align-items-center gap-3 bg-secondary-subtle">
          <div className="image">
            <img src={Kitchenset} className="img-fluid" alt="shopping item" />
          </div>
          <div
            className="wprice text-center w-100 p-2
"
          >
            <h4 className="item fs-6 fw-bolder">Kitchen set</h4>
            <h5 className="price fs-6 fw-normal">KSH. 350</h5>
          </div>
        </div>
        <div className="sectionf col-12 col-sm-5 col-lg-2 col-md-3 p-3  d-flex flex-column align-items-center gap-3 bg-secondary-subtle">
          <div className="image">
            <img src={mats} className="img-fluid" alt="shopping item" />
          </div>
          <div
            className="wprice text-center w-100 p-2
"
          >
            <h4 className="item fs-6 fw-bolder">Mats</h4>
            <h5 className="price fs-6 fw-normal">KSH. 350</h5>
          </div>
        </div>
        <div className="sectionf col-12 col-sm-5 col-lg-2 col-md-3 p-3  d-flex flex-column align-items-center gap-3 bg-secondary-subtle">
          <div className="image">
            <img src={mugs} className="img-fluid" alt="shopping item" />
          </div>
          <div
            className="wprice text-center w-100 p-2
"
          >
            <h4 className="item fs-6 fw-bolder">Mugs</h4>
            <h5 className="price fs-6 fw-normal">KSH. 350</h5>
          </div>
        </div>
        <div className="sectionf col-12 col-sm-5 col-lg-2 col-md-3 p-3  d-flex flex-column align-items-center gap-3 bg-secondary-subtle">
          <div className="image">
            <img src={nets} className="img-fluid" alt="shopping item" />
          </div>
          <div
            className="wprice text-center w-100 p-2
"
          >
            <h4 className="item fs-6 fw-bolder">Bed net</h4>
            <h5 className="price fs-6 fw-normal">KSH. 1000</h5>
          </div>
        </div>
        <div className="sectionf col-12 col-sm-5 col-lg-2 col-md-3 p-3  d-flex flex-column align-items-center gap-3 bg-secondary-subtle">
          <div className="image">
            <img src={smart} className="img-fluid" alt="shopping item" />
          </div>
          <div
            className="wprice text-center w-100 p-2
"
          >
            <h4 className="item fs-6 fw-bolder">Ladies wear</h4>
            <h5 className="price fs-6 fw-normal">KSH. 1800</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
