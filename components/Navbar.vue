<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="/"data-aos="fade-left">
        <img class="me" loading="lazy" src="/images/Logo.PNG" alt="Example Image" />
      </a>

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
            <a class="nav-link main-btn" href="/" data-aos="fade-up">Home<span></span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link main-btn" href="aboutme"
               data-aos="fade-up"
               data-aos-delay="200"
               data-aos-offset="300">About<span></span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link main-btn" target="_blank" href="/images/cv-en.pdf"
               data-aos="fade-up"
               data-aos-delay="400"
               data-aos-offset="300">CV<span></span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link main-btn" href="/#contact"
               data-aos="fade-up"
               data-aos-delay="500"
               data-aos-offset="300">Contact<span></span></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>