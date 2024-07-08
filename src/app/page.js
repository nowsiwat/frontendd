import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
<>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png" alt="Bootstrap" width={30} height={24} />
</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
   <div className="d-flex" id="navbarSupportedContent">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="/">Home</a>
    </li>
    <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/about">About</a>
    </li>
    <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/service">Service</a>
    </li>
    <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/contact">Contact</a>
    </li>
  </ul>
<form className="d-flex" role="navbarSupportedContent">
<a className="btn btn-outline-secondary" type="page" href="/login" >SignIn</a>
<a className="btn btn-outline-secondary" type="page" href="/sign" >SignUp</a>
</form>

</div>

  </div>
  </nav>

  <div className="container-fluid">
    <div classname="row my-2">
  <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" width="100%" height="500px" />
      </div>
      <div className="carousel-item">
        <img src="https://images.pexels.com/photos/1624255/pexels-photo-1624255.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100"  width="100%"  height="500px" />
      </div>
      <div className="carousel-item">
        <img src="https://images.pexels.com/photos/592077/pexels-photo-592077.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100"  width="100%"  height="500px" />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>

<div/>
<div/>
        <div className="row my-2">
<div className="col-md-4 text-center bg-link p-5">
<div className="card" style={{width: '18rem'}}>
  <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" width="100px"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
<div className="col-md-4 text-center bg-link p-5 ">
<div className="card" style={{width: '18rem'}}>
  <img src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" width="100px" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
<div className="col-md-4 text-center bg-link p-5 ">
<div className="card" style={{width: '18rem'}}>
  <img src="https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" width="100px" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
        </div>
        <div className="row my-2">
        <div className="col-md-12 text-center bg-dark p-5 text-white">
        <div>
  Cover Footer for 
  <a href="https://getbootstrap.com/" className="text-white mx-2">Bootstrap
  </a>
   by ,
  <a href="https://twitter.com/mdo" className="text-white">@mdo
  </a>
</div>

          <div >
          </div>
          </div>
        </div>

    </div>

</>
  );
}