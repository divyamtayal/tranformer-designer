export const Services = (props) => {
  return (
    <div id="services">
      <div className="container">
        <div className="section-title text-center">
          <h2>Our Services</h2>
          <p>Design your own transformer by providing different parameters.</p>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img
              src="img/designs/design.png"
              className="img-responsive services-img"
              alt=""
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <h3>
              Get your transformer design on single click by providing few
              parameters.
            </h3>
            <h3>All these dimensions will be calculated with best results.</h3>
            <div className="list-style">
              <div className="col-lg-6 col-sm-6 col-xs-12">
                <ul>
                  <li>Window Dimentions</li>
                  <li>Yoke Dimentions</li>
                  <li>Frame Dimentions</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <a
              href="/design-tranformer"
              className="btn btn-custom btn-lg page-scroll"
            >
              Design Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
