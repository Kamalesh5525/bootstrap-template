import React, { useState } from "react";
import "./product.css";
import { MdFastfood } from "react-icons/md";

const Product = ({ menu, item }) => {
  const [itemMenu, setItemMenu] = useState(menu);
  const [products, setProducts] = useState(item);

  const FilterData = (cat) => {
    if (cat == "All") {
      setProducts(item);
    } else {
      const f = item.filter((product) => product.catogry === cat);
      setProducts(f);
    }
  };

  return (
    <div className="bg-img">
      <header className="">
        <div className="container">
          <div className="d-flex py-3 justify-content-between align-items-center">
            <img
              src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/logo/logo.png"
              alt=""
              srcset=""
            />
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <ul className=" d-flex align-items-center mb-0">
              <li className="mx-2">
                <a className=" fs-5">
                  <i class="fa-solid fa-user-injured"></i>
                  <span className="ms-2">Account</span>
                </a>
              </li>{" "}
              <li className="mx-2">
                <a className=" fs-5">
                  <i class="fa-solid fa-heart"></i>
                  <span className="ms-2">Wishlist</span>
                </a>
              </li>{" "}
              <li className="mx-2">
                <a className=" fs-5">
                  <i class="fa-solid fa-cart-shopping"></i>
                  <span className="ms-2">Cart</span>
                </a>
              </li>
            </ul>
          </div>
          <hr />
          <div className="d-flex justify-content-between align-items-center mb-2">
            <button className="btn  d-block  fw-bold">
              <i class="fa-solid fa-bars-staggered"></i>
            </button>
            <ul class="d-flex  mb-2 mb-lg-0  justify-content-between">
              <li class="nav-item mx-3 d-flex align-items-center">
                <a class="nav-link active me-2" aria-current="page" href="#">
                  home
                </a>
                <i class="fa-solid fa-angle-down"></i>
              </li>
              <li class="nav-item mx-3 d-flex align-items-center">
                <a class="nav-link active me-2" aria-current="page" href="#">
                  blog
                </a>
                <i class="fa-solid fa-angle-down"></i>
              </li>
              <li class="nav-item mx-3 d-flex align-items-center">
                <a class="nav-link active me-2" aria-current="page" href="#">
                  pages
                </a>
                <i class="fa-solid fa-angle-down"></i>
              </li>
              <li class="nav-item mx-3 d-flex align-items-center">
                <a class="nav-link active me-2" aria-current="page" href="#">
                  elements
                </a>
                <i class="fa-solid fa-angle-down"></i>
              </li>
              <li class="nav-item mx-3 d-flex align-items-center">
                <a class="nav-link active me-2" aria-current="page" href="#">
                  product
                </a>
                <i class="fa-solid fa-angle-down"></i>
              </li>
              <li class="nav-item mx-3 d-flex align-items-center">
                <a class="nav-link active me-2" aria-current="page" href="#">
                  service
                </a>
                <i class="fa-solid fa-angle-down"></i>
              </li>
            </ul>
            <div>
              <h6>+123 ( 456 ) ( 7890 )</h6>
            </div>
          </div>
        </div>
      </header>

      <div className="banner">
        <div className="card bg-dark text-white">
          <img
            src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/banner/banner-2.jpg"
            className="card-img"
            alt="..."
          />
          <div className="card-img-overlay my-5">
            <h5 className="card-title text-black fw-bold">
              100% Organic Fruits
            </h5>
            <h1 className="fw-bold text-black py-3">
              Explore fresh & <br></br> juicy fruits.
            </h1>
            <p className="card-text fw-normal text-secondary my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              reiciendis<br></br>
              beatae consequuntur.
            </p>
          </div>
        </div>
      </div>

      <div className="card-group ">
        <div className="card border border-0">
          <div className="boxcard">
            <div className="box">
              <h5>Cake & milk</h5>
              <p>(65 items)</p>
            </div>
            <div className="box">
              <h5>Fresh Meat</h5>
              <p>(3 items)</p>
            </div>
            <div className="box">
              <h5>Vagetable</h5>
              <p>(25 items)</p>
            </div>
            <div className="box">
              <h5>Apple & Mango</h5>
              <p>(45 items)</p>
            </div>
            <div className="box">
              <h5>Straberry</h5>
              <p>(68 items)</p>
            </div>
            <div className="box">
              <button className="py-2 btn btn-success my-3"> veiw More</button>
            </div>
          </div>
        </div>
        <div className="card border border-0">
          <img
            src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/categories/3.jpg"
            className="card-img-top"
            alt="..."
          />
        </div>

        <div className="card border border-0">
          <img
            src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/categories/4.jpg"
            className="card-img-top1"
            alt="..."
          />
        </div>
      </div>

      <div align="center">
        <h1>Popular products</h1>
        <p className="text-dark">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor <br />
          incididunt ut labore lacus vel facilisis.
        </p>
        {
          <div>
            <div className="container">
              <div className="row">
                <div className="col-3 mt-5">
                  <div
                    className="py-2 mb-2 rounded"
                    style={{
                      background: "rgba(0,0,0,0.06)",
                      border: "1px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    <h5 className="ms-3 mb-0 text-start">All</h5>
                  </div>{" "}
                  <div
                    className="py-2 mb-2 rounded"
                    style={{
                      background: "rgba(0,0,0,0.06)",
                      border: "1px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    <h5 className="ms-3 mb-0 text-start">Snake</h5>
                  </div>{" "}
                  <div
                    className="py-2 mb-2 rounded"
                    style={{
                      background: "rgba(0,0,0,0.06)",
                      border: "1px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    <h5 className="ms-3 mb-0 text-start">Vagetable</h5>
                  </div>{" "}
                  <div
                    className="py-2 mb-2 rounded"
                    style={{
                      background: "rgba(0,0,0,0.06)",
                      border: "1px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    <h5 className="ms-3 mb-0 text-start">Fruit</h5>
                  </div>{" "}
                  <div
                    className="py-2 mb-2 rounded"
                    style={{
                      background: "rgba(0,0,0,0.06)",
                      border: "1px solid rgba(0,0,0,0.06)",
                    }}
                  >
                    <h5 className="ms-3 mb-0 text-start">Bakery</h5>
                  </div>
                  <img
                    src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/product-banner.jpg"
                    className="w-100 mt-5 rounded"
                    style={{ maxHeight: "489px" }}
                    alt=""
                  />
                </div>
                <div className="col-9">
                  <div className="d-flex flex-wrap">
                    {products.map((p, index) => (
                      <div key={index} className="col-3 px-2">
                        <div className="card mt-5" style={{ height: "auto" }}>
                          <img
                            className="card-img-top3 w-100"
                            src={p.image}
                            alt="Product"
                          />
                          <div className="card-body3 px-2 pb-3">
                            <p className="card-title mt-1 text-secondary">
                              {p.name}
                            </p>
                            <div>
                              <i class="fa-solid fa-star text-warning"></i>
                              <i class="fa-solid fa-star text-warning"></i>
                              <i class="fa-solid fa-star text-warning"></i>
                              <i class="fa-solid fa-star text-warning"></i>
                              <i class="fa-solid fa-star text-warning"></i>
                            </div>
                            <span>{p.Note}</span>
                            <p className="card-text mt-2 text-success fw-bold">
                              {p.price} Rs.
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="d-flex  my-5 ">
                <div className="back col-4 text-start mx-2 px-4 rounded">
                  <h5 className="">
                    Healthy <br /> Bakery Products
                  </h5>
                  <span className="fw-bold fs-4">30% </span>
                  <span className="text-secondary"> on first order</span>
                  <button className="btn btn-success d-block mt-4 fw-bold">
                    Shop Now
                  </button>
                </div>

                <div className="back1 col-4 text-start px-4 mx-2 rounded">
                  <h5 className="">
                    Healthy <br /> Bakery Products
                  </h5>
                  <span className="fw-bold fs-4">20% </span>
                  <span className="text-secondary"> on first order</span>
                  <button className="btn btn-success d-block mt-4 fw-bold">
                    Shop Now
                  </button>
                </div>

                <div className="back2 col-4 text-start px-4 mx-2 rounded">
                  <h5 className="">
                    Healthy <br /> Bakery Products
                  </h5>
                  <span className="fw-bold fs-4">35% </span>
                  <span className="text-secondary"> on first order</span>
                  <button className="btn btn-success d-block mt-4 fw-bold">
                    Shop Now
                  </button>
                </div>
              </div>

              <div className="d-flex  my-5 py-5 ">
                <div className="back4 col-3 text-center mx-2 p-4 rounded ">
                  <h2 className="">
                    <i class="fa-solid fa-suitcase "></i>
                  </h2>
                  <h5 className="">Product packing</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
                <div className="back4 col-3 text-center mx-2 p-4 rounded ">
                  <h2 className="">
                    <i class="fa-solid fa-headset"></i>
                  </h2>
                  <h5 className="">24 * 7 Support</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
                <div className="back4 col-3 text-center mx-2 p-4 rounded ">
                  <h2 className="">
                    <i class="fa-solid fa-truck-moving"></i>
                  </h2>
                  <h5 className="">Delivery In 5 days</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
                <div className="back4 col-3 text-center mx-2 p-4 rounded ">
                  <h2 className="">
                    <i class="fa-solid fa-file-invoice-dollar"></i>
                  </h2>
                  <h5 className="py-2 my-2">Payment Secure</h5>
                  <p className="py-2 my-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                  </p>
                </div>
              </div>
            </div>
            <div className="deal">
              <div className="back5 col-4 text-start px-4 mx-2 rounded">
                <h5 className="">35% Off</h5>
                <span className="fw-bold fs-2">
                  Great deal on organic food.
                </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do maecenas accumsan lacus vel facilisis.
                </p>
                <button className="btn btn-success d-block mt-4 fw-bold">
                  Shop Now
                </button>
              </div>
            </div>

            <div className="my-5">
              <h1>Great Words From People</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor <br />
                incididunt ut labore lacus vel facilisis.
              </p>

              <div className="d-flex  my-5 container ">
                <div className=" greate col-4 text-center mx-2 px-4 ">
                  <div className="gt">
                    <img
                      src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/testimonial/1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="pc">
                    <h6 className="">Co Founder</h6>
                    <h3>Stephen Smith</h3>
                    <p>
                      “eiusmpsu dolor sit amet, conse cte tur ng elit, sed do
                      eiusmod tem lacus vel facilisis.”
                    </p>
                    <div>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                    </div>
                  </div>
                </div>

                <div className=" greate col-4 text-center mx-2 px-4 ">
                  <div className="gt">
                    <img
                      src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/testimonial/3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="pc">
                    <h6 className="">Manager</h6>
                    <h3>Lorem Robinson</h3>
                    <p>
                      “eiusmpsu dolor sit amet, conse cte tur ng elit, sed do
                      eiusmod tem lacus vel facilisis.”
                    </p>
                    <div>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                    </div>
                  </div>
                </div>

                <div className=" greate col-4 text-center mx-2 px-4 ">
                  <div className="gt">
                    <img
                      src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/testimonial/2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="pc">
                    <h6 className="">Team Leader</h6>
                    <h3>Sadika Alard</h3>
                    <p>
                      “eiusmpsu dolor sit amet, conse cte tur ng elit, sed do
                      eiusmod tem lacus vel facilisis.”
                    </p>
                    <div>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                      <i class="fa-solid fa-star text-warning"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-5">
              <h1>Latest News</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor <br />
                incididunt ut labore lacus vel facilisis.
              </p>

              <div className="d-flex  my-5 container ">
                <div className=" greate1 col-4 text-start rounded">
                  <div className="news p-3">
                    <h6 className="my-2">By Admin | Snacks</h6>
                    <h5 className="my-2 py-2">
                      Urna pretium elit mauris cursus at elit Vestibulum.
                    </h5>
                    <p>
                      Read More <i class="fa-solid fa-arrow-right"></i>
                    </p>

                    <div className="kk">
                      <img
                        src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/blog/2.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className=" greate1 col-4 text-start rounded">
                  <div className="news p-3">
                    <h6 className="my-2">By Admin | Snacks</h6>
                    <h5 className="my-2 py-2">
                      Urna pretium elit mauris cursus at elit Vestibulum.
                    </h5>
                    <p>
                      Read More <i class="fa-solid fa-arrow-right"></i>
                    </p>

                    <div className="kk">
                      <img
                        src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/blog/1.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className=" greate1 col-4 text-start rounded">
                  <div className="news p-3">
                    <h6 className="my-2">By Admin | Snacks</h6>
                    <h5 className="my-2 py-2">
                      Urna pretium elit mauris cursus at elit Vestibulum.
                    </h5>
                    <p>
                      Read More <i class="fa-solid fa-arrow-right"></i>
                    </p>

                    <div className="kk">
                      <img
                        src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/blog/3.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <footer>
              <div >
                <div class=" container">
                  <div class="d-flex text-center pb-5">
                    <div class="col-xs-12 col-sm-6 col-md-3 footer-column">
                      <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/logo/logo.png" className="me-auto" alt="" />
                      <p>Carrot is the biggest market of grocery products. Get your daily needs from our store.</p>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-3 footer-column">
                      <ul className="fs-5 text-secondary">
                        <li className="fw-bold fs-3">Company</li>
                        <li>About Us</li>
                        <li>Delivery Information</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>contact Us</li>
                        <li>Support Center</li>

                      </ul>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-3 footer-column">
                    <ul className="fs-5 text-secondary">
                        <li className="fw-bold fs-3">Category</li>
                        <li>Dairy & Bakery</li>
                        <li>Fruits & Vegetable</li>
                        <li>Snack & Spice</li>
                        <li>Juice & Drinks</li>
                        <li>Chicken & Meat</li>
                        <li>Fast Food</li>

                      </ul>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-3 footer-column">
                      <h4 className="fw-bold">Subscribe Our Newsletter</h4>
                      <input type="text" placeholder="search here " className="form-control mb-4" />
                      <div className="d-flex ">
                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/1.jpg" width="60px" className="rounded mx-1" alt="" />
                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/2.jpg" width="60px" className="rounded mx-1" alt="" />
                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/3.jpg" width="60px" className="rounded mx-1" alt="" />
                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/4.jpg" width="60px" className="rounded mx-1" alt="" />
                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/5.jpg" width="60px" className="rounded mx-1" alt="" />
                        
                      </div>
                    </div>
                  </div>
                  <hr />
                  <h6 className="pb-3">© 2024 Carrot, All rights reserved.</h6>
                </div>
              </div>
            </footer>
          </div>
        }
      </div>
    </div>
  );
};

export default Product;
