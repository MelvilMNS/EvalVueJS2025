<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div class="container-fluid">
        <div class="navbar-brand" @click="$router.push('/')"><i class="fa-solid fa-home me-2"></i>Gérer vos factures et vos clients</div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <RouterLink activeClass="active" to="/" class="nav-link"
                ><i class="fa-solid fa-file-lines me-2"></i>Factures</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink activeClass="active" to="/profile" class="nav-link"
                ><i class="fa-solid fa-person me-2"></i>Clients</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
