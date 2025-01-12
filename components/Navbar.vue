<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="/"><p>Doster</p><span></span></a>

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
            <a class="nav-link main-btn" href="/">Home<span></span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link main-btn" href="/about">About<span></span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link main-btn" href="https://doster.at/cv">CV<span></span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link main-btn" href="/contact">Contact<span></span></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
</script>