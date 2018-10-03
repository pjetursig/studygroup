document.getElementById("appnav").innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
<div class="container">
  <a class="navbar-brand" href="#">
    <img src="resources/images/annatalogo.png" width="110" height="39" alt="">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarResponsive">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Training paths</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Partnership training</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Customer training</a>
      </li>
    </ul>
  </div>
</div>
</nav>
`;