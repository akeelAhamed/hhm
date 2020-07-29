import BaseComponent from '../BaseComponent';
import "./custom.css";
import { Container, Row, Col, Pagination } from "react-bootstrap";

class BlogPage extends BaseComponent {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="Container">
        <div className="bg-image m-3">
          <h3>Higher living</h3>
        </div>

        <div className="m-5">
          <h1 className="blog-text">
            <span>Blogs</span>
          </h1>
          <img
            style={{ height: 400 }}
            className="img-fluid w-100"
            src={require("./img/blog.jpg")}
            alt=""
          />
        </div>

        <div className="m-5">
          <blockquote className="lead">
            <h2>Lorem ipsum</h2>
            <footer>
              <cite> - RadhaKrishnan</cite>
            </footer>
          </blockquote>

          <p>
            Dr.T.P Jayakrishnan, the founder of Holistic Metaphysics beleives
            that to live fruitfully, recognizing the deep bond between us and
            the universal energy around us is essential. He strives to
            understand truths that have not unveiled itself to us yet and makes
            wy for science to tread on. His unquenched curiosity to find the
            path towards meaningful existence led to the birth of a new way of
            living.
          </p>
          <strong className="bg-info">READ MORE `{'>>'}`</strong>
        </div>

        <Container fluid className="justify-content-between">
          <Row>
            <Col xl lg md="6">
              <div className="card">
                <img
                  className="card-img-top"
                  src={require("../VisionPage/img/lens.jpg")}
                  alt="card"
                />
                <div className="card-body">
                  <blockquote>
                    <h5 className="card-title text-uppercase">
                      What is lorem ipsum?
                    </h5>
                    <footer className="text-uppercase">T.P.Jayakrishnan</footer>
                  </blockquote>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <a href="#h" class="btn btn-info">
                    Read More
                  </a>
                </div>
              </div>
            </Col>

            <Col xl lg md="6">
              <div className="card">
                <img
                  className="card-img-top"
                  src={require("../VisionPage/img/lens.jpg")}
                  alt="Card"
                />
                <div className="card-body">
                  <blockquote>
                    <h5 className="card-title text-uppercase">
                      What is lorem ipsum?
                    </h5>
                    <footer className="text-uppercase">T.P.Jayakrishnan</footer>
                  </blockquote>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <a href="#h" class="btn btn-info">
                    Read More
                  </a>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xl lg md="6">
              <div className="card">
                <img
                  className="card-img-top"
                  src={require("../VisionPage/img/lens.jpg")}
                  alt="Card"
                />
                <div className="card-body">
                  <blockquote>
                    <h5 className="card-title text-uppercase">
                      What is lorem ipsum?
                    </h5>
                    <footer className="text-uppercase">T.P.Jayakrishnan</footer>
                  </blockquote>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <a href="#h" class="btn btn-info">
                    Read More
                  </a>
                </div>
              </div>
            </Col>

            <Col xl lg md="6">
              <div className="card">
                <img
                  className="card-img-top"
                  src={require("../VisionPage/img/lens.jpg")}
                  alt="card"
                />
                <div className="card-body">
                  <blockquote>
                    <h5 className="card-title text-uppercase">
                      What is lorem ipsum?
                    </h5>
                    <footer className="text-uppercase">T.P.Jayakrishnan</footer>
                  </blockquote>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <a href="#h" class="btn btn-info">
                    Read More
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>


        <Pagination className="mt-2 d-flex justify-content-center" >
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item active>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>

      </div>
    );
  }
}

export default BlogPage;
