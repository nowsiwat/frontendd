import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
<>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">LOGO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
   <div className="d-flex" id="navbarSupportedContent">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="http://localhost:3001/">Home</a>
    </li>
    <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="https://www.facebook.com/siwat.sangkhaanan.5">About</a>
    </li>
    <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Service</a>
    </li>
    <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Contact</a>
    </li>
  </ul>
<form className="d-flex" role="navbarSupportedContent">
<button className="btn btn-outline-secondary" type="submit">SignIn</button>
  <button className="btn btn-outline-secondary" type="submit">SignUp</button>
</form>

</div>

  </div>
  </nav>

  <div className="container-fluid">
      <div className="row my-2">
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://ninenic.com/download/ninenic_com/webdesign/website-builder-websitedesign-banner1.jpg" className="d-block w-100" width="600px" height="500px" />
    </div>
  </div>
</div>

      </div>
        <div className="row my-2">
<div className="col-md-4 text-center bg-link p-5">
<div className="card" style={{width: '18rem'}}>
  <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" width="100%"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
<div className="col-md-4 text-center bg-link p-5 ">
<div className="card" style={{width: '18rem'}}>
  <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" width="100%" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
<div className="col-md-4 text-center bg-link p-5 ">
<div className="card" style={{width: '18rem'}}>
  <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" width="100%" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
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