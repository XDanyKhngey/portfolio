<template>
  <div id="experience_container" class="container">
    <h1 class="text-center">{{ $t("experience").toUpperCase() }}</h1>
    <hr />
    <div class="container experience-timeline">
      <div
        class="timeline-item"
        v-for="(experience, index) in experienceList"
        :key="index"
      >
        <div class="timeline-period">
          <h5>{{ experience.period }}</h5>
        </div>
        <div class="timeline-details">
          <h6>{{ experience.position }}</h6>
          <p class="text-muted">{{ experience.company }}</p>
          <p class="text-muted">{{ experience.location }}</p>
          <p>{{ experience.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
#experience_container * {
  color: black;
}
#experience_container {
  margin-top: 100px;
  padding: 50px 0px;
}
@media (max-width: 575.98px) {
  #experience_container {
    padding: 50px 10px;
  }
}

.experience-timeline {
  padding: 20px;
  border-left: 2px solid #007bff;
  position: relative;
}

.timeline-item {
  margin-bottom: 40px;
  position: relative;
  padding-left: 30px;
}

.timeline-period h5 {
  font-weight: bold;
}

.timeline-details h6 {
  font-weight: bold;
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: -5px;
  top: 5px;
  width: 15px;
  height: 15px;
  background-color: #007bff;
  border-radius: 50%;
}

.text-muted {
  color: #6c757d !important;
}
</style>

<script>
export default {
  data() {
    return {
      experienceList: [
        {
          period: "2015 - Present",
          position: "Senior Software Engineer",
          company: "Tech Innovators Inc.",
          location: "San Francisco, USA",
          description:
            "Led a team of engineers to develop scalable web applications using cutting-edge technologies such as React, Node.js, and AWS. Spearheaded the design and implementation of a microservices architecture that improved system performance by 40%. Successfully mentored junior developers, fostering a collaborative team environment. Worked closely with product managers and stakeholders to deliver high-quality software solutions, meeting tight deadlines and business objectives.",
        },
        {
          period: "2012 - 2015",
          position: "Full Stack Developer",
          company: "Creative Solutions Ltd.",
          location: "New York, USA",
          description:
            "Developed full-stack web applications with a focus on user experience and performance. Designed RESTful APIs and built responsive front-end interfaces using Angular and Bootstrap. Collaborated with cross-functional teams to implement new features and improve existing functionality, increasing user retention by 25%. Played a key role in transitioning the company's legacy system to a modern, cloud-based platform.",
        },
        {
          period: "2010 - 2012",
          position: "Junior Web Developer",
          company: "Innovatech Solutions",
          location: "Chicago, USA",
          description:
            "Assisted in developing web applications and maintaining legacy systems. Wrote clean, well-documented code in JavaScript, HTML, CSS, and PHP. Worked under the guidance of senior developers to debug and improve performance on large-scale websites. Gained hands-on experience with version control, agile development, and cross-browser compatibility testing.",
        },
      ],
    };
  },
};
</script>
