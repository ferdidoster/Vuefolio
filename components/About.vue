<template>
  <section id="about">
    <div class="container spacer">
      <div class="row">
        <div class="col-12"
             data-aos="fade-left"
             data-aos-anchor="#about">
          <h2>About Me</h2>
          <p class="mt-3">Hey, I’m <strong>Ferdinand Doster</strong>, a frontend developer with a passion for creating clean, responsive, and well-structured websites. I specialize in building fast and user-friendly online experiences using <strong>Shopware, TYPO3, JavaScript, and PHP</strong>.</p>

          <p class="mt-3">My interest in web development started when I was a teenager, experimenting with HTML and CSS to build small fan sites. What began as a hobby quickly turned into a career, and over the years, I’ve worked on a variety of projects, from e-commerce platforms to custom CMS solutions. In early 2024, I transitioned from jQuery to React and Vue.js to stay up to date with modern development trends.</p>

          <div class="row justify-content-center">
            <div class="col-12 col-lg-12">
              <h3 class="spacer-top">What I Do</h3>
              <CardGrid :cards="cardData" />
            </div>
          </div>

          <h3 class="spacer-top"
              data-aos="fade-left" >Let’s Connect</h3>
          <p data-aos="fade-left" >I’m always open to new opportunities, whether it’s a <strong>full-time position or freelance work</strong>. If you're looking for a developer who values <strong>clean code, performance, and great user experiences</strong>, feel free to reach out!</p>

        </div>
      </div>
    </div>
    <Contact/>
  </section>
</template>

<script setup lang="ts">
import Contact from "./Contact.vue";
import CardGrid from "./UI/CardGrid.vue";

const cardData = [
  {
    title: "Shopware & TYPO3 Development ",
    description: "Custom themes, Twig templates, and performance tuning.",
    image: "/optimized-images/typo3-shopware.webp",
  },
  {
    title: "Modern Frontend Development",
    description: "React, Vue.js, and CSS frameworks.",
    image: "/optimized-images/frontend_dev.webp",
  },
  {
    title: "Website Performance & Optimization",
    description: "Improving speed, SEO, and accessibility",
    image: "/optimized-images/optimization.webp",
  },
  {
    title: "Problem-Solving",
    description: "Debugging, learning new technologies, and improving workflows",
    image: "/optimized-images/problem-solving.webp",
  },
];
</script>