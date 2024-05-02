
const navbar=()=>{
  return ` <nav class="navbar navbar-expand-lg bg-body-tertiary"  >
  <div class="container-fluid" style="display: flex; justify-content: space-around   ;">
  <div>  <a class="navbar-brand" href="/index.html"><img src="https://img.freepik.com/free-vector/hand-drawn-clothing-store-logo-design_23-2149577874.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1714521600&semt=ais" height="100px" width="100px" style="object-fit: cover;" alt=""></a></div>

    <div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="font-size: 20px; font-weight: 600;">
            <li class="nav-item">
              <a class="nav-link active" aria-current="/pages/index.html" href="/index.html" style="color: #929A8A;">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/pages/product.html" style="color: #929A8A;" >Product</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/pages/cart.html" style="color: #929A8A;">Cart</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/pages/addmin.html" style="color: #929A8A;">Admin</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/pages/signup.html" style="color: #929A8A;">Signup</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/pages/login.html" style="color: #929A8A;">Login</a>
            </li>
           
          
          </ul>
    </div>
    
    
    </div>

    <div> <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form></div>
  </div>
</nav>`
}
export default navbar