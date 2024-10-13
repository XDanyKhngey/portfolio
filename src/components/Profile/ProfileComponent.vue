<template>
  <div id="about_me_container" class="container">
    <h1 class="text-center">{{ $t("about_me").toUpperCase() }}</h1>
    <hr />

    <div class="info_container d-flex align-items-center mt-5 gap-5">
      <div class="summarize">
        <h3>
          <strong>{{ $t("i_am_wd_go") }}</strong>
        </h3>
        <br />
        <p>
          A dedicated Government Officer and accomplished Web Developer, this
          professional has a strong passion for serving the public and enhancing
          community welfare. With a background in both government operations and
          web technology, they have developed a unique skill set that bridges
          the gap between public service and digital innovation.
        </p>
        <p>
          In their role as a Government Officer, they are committed to
          implementing policies that promote transparency, efficiency, and
          accessibility in government services. Working tirelessly to improve
          systems and processes, they ensure that citizens have access to vital
          information and resources.
        </p>
        <p>
          As a Web Developer, they leverage their technical expertise to create
          user-friendly web applications that cater to the needs of the public.
          Proficiency in various programming languages and frameworks enables
          the design and development of platforms that facilitate better
          communication between government entities and the community.
        </p>
        <p>
          This dual role allows for a deep understanding of the intricacies of
          government functions, as well as the application of innovative
          solutions that enhance service delivery. By combining a commitment to
          public service with technical skills, they strive to make a meaningful
          impact in the community, fostering a more connected and informed
          society.
        </p>
        <hr />
        <div
          class="basic_info_container d-flex justify-content-between align-items-center gap-3"
          style="flex-flow: wrap"
        >
          <div class="basic_info">
            <p>
              <strong>{{ $t("phone") }}</strong>
            </p>
            <p>(+855) 69 799 949</p>
          </div>
          <div class="basic_info">
            <p>
              <strong>{{ $t("email") }}</strong>
            </p>
            <p>
              <a
                style="color: var(--bs-blue)"
                href="mailto:danykhgney69@gmail.com"
                >danykhgney69@gmail.com</a
              >
            </p>
          </div>
          <div class="basic_info">
            <p>
              <strong>{{ $t("website") }}</strong>
            </p>
            <p>
              <a
                style="color: var(--bs-blue)"
                class="link-opacity-100"
                href="https://danyportfolio.vercel.app"
                >https://danyportfolio.vercel.app</a
              >
            </p>
          </div>
        </div>
      </div>
      <div class="profile_img">
        <div class="card">
          <img src="./profile.jpg" alt="image" />
          <div class="card-body">
            <div class="social_link">
              <span class="fb text-center">
                <a target="_blank" href="https://web.facebook.com/oun.dany.3591"
                  ><i class="bi bi-facebook"></i
                ></a>
              </span>
              <span class="linkedin text-center">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/khngey-dany-2a202314b/"
                  ><i class="bi bi-linkedin"></i
                ></a>
              </span>
              <span class="telegram text-center">
                <a target="_blank" href="https://t.me/KhngeyDany"
                  ><i class="bi bi-telegram"></i
                ></a>
              </span>
              <span class="github text-center">
                <a target="_blank" href="https://github.com/XDanyKhngey"
                  ><i class="bi bi-github"></i
                ></a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
#about_me_container * {
  color: black;
}
#about_me_container {
  margin-top: 100px;
  padding: 50px 0px;
}

.profile_img {
  width: 500px;
}

.social_link span a i {
  width: 32px;
  height: 32px;
  font-size: 32px;
  color: var(--bs-pink) !important;
}

.social_link span:hover {
  box-shadow: 0 4px 20px rgba(255, 0, 234, 0.5);
}

.social_link {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.social_link span {
  transition: 0.5s all ease;
  padding: 5px;
  border-radius: 50%;
  width: 58px;
}

@media (max-width: 1199.98px) {
  .info_container {
    flex-direction: column-reverse;
  }
}
@media (max-width: 575.98px) {
  #about_me_container {
    padding: 50px 10px;
  }
  .profile_img {
    width: 100%;
  }
}
@media (min-width: 575.98px) {
}
</style>
