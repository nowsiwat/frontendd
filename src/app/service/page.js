
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


<section class="py-5">
	<div class="container">
		<div class="text-center">
			<span class="text-muted">Our Story</span>
			<h2 class="display-5 fw-bold mb-3">Service</h2>
		</div>
		<div class="row gx-5">
			<div class="col-md-6">
				<div class="lead text-center text-md-start">
					<p>Lorem ipsum dolor, sit amet elit Quamnitm veniam dicta architecto, quos id nemo minima nulla ducimus officii nulla ducimus officiis! quos id nemo minima nulla ducimus officii nulla ducimus officiis.</p>
				</div>
			</div>
			<div class="col-md-6">
				<div class="lead text-center text-md-start">
					<p>Lorem ipsum dolor, sit amet elit Quamnitm veniam dicta architecto, quos id nemo minima nulla ducimus officii nulla ducimus officiis Quamnitm veniam dicta architecto, quos id nemo minima.</p>
				</div>
			</div>
		</div>
	</div>
</section>


</>
  );
}