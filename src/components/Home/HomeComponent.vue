<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

// Use i18n composable
const { t } = useI18n();

// Reactive variables to store text and indexes
const h1TypedText = ref("");
const h1SpanTypedText = ref("");
const h4TypedText = ref("");
const h1Index = ref(0);
const h1SpanIndex = ref(0);
const h4Index = ref(0);
const typingSpeed = 100; // Typing speed in ms
const loopDelay = 3000; // Delay before restarting the animation
let typingInterval = null;

// Function to reset typing animation
const resetTyping = () => {
  h1TypedText.value = "";
  h1SpanTypedText.value = "";
  h4TypedText.value = "";
  h1Index.value = 0;
  h1SpanIndex.value = 0;
  h4Index.value = 0;
  startTyping(); // Restart the typing after reset
};

// Typing functions
const typeH1 = () => {
  const h1Text = t("hi_i_am").toUpperCase();
  if (h1Index.value < h1Text.length) {
    h1TypedText.value += h1Text[h1Index.value];
    h1Index.value++;
  }
};

const typeH1Span = () => {
  const h1SpanText = t("dany_khgney").toUpperCase();
  if (h1SpanIndex.value < h1SpanText.length) {
    h1SpanTypedText.value += h1SpanText[h1SpanIndex.value];
    h1SpanIndex.value++;
  }
};

const typeH4 = () => {
  const h4Text = `${t("web_dev").toUpperCase()} / ${t(
    "government_officer"
  ).toUpperCase()}`;
  if (h4Index.value < h4Text.length) {
    h4TypedText.value += h4Text[h4Index.value];
    h4Index.value++;
  }
};

// Function to start typing animation
const startTyping = () => {
  typingInterval = setInterval(() => {
    typeH1();
    if (h1Index.value === t("hi_i_am").toUpperCase().length) {
      typeH1Span();
    }
    typeH4();
    if (
      h1SpanTypedText.value === t("dany_khgney").toUpperCase() &&
      h4TypedText.value ===
        `${t("web_dev").toUpperCase()} / ${t(
          "government_officer"
        ).toUpperCase()}`
    ) {
      clearInterval(typingInterval);
      setTimeout(resetTyping, loopDelay); // Restart after delay
    }
  }, typingSpeed);
};

// Automatically start typing animation on component mount
onMounted(() => {
  startTyping();
});
</script>

<template>
  <div id="bg_cover">
    <div
      class="d-flex justify-content-center align-items-center"
      style="height: calc(100vh - 100px); flex-direction: column"
    >
      <h1 class="text-center">
        {{ h1TypedText }}<br />
        <br />
        <span style="color: var(--bs-pink); font-weight: bold">{{
          h1SpanTypedText
        }}</span>
      </h1>
      <h4 class="text-center mt-5">{{ h4TypedText }}</h4>
      <a
        target="_blank"
        href="/cv.pdf"
        class="mt-5 btn btn-secondary"
        id="download_cv_btn"
        >{{ t("download_cv").toUpperCase() }}</a
      >
    </div>
    <p
      id="github_link"
      style="
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
      "
      class="text-center text-white"
    >
      {{ $t('find_p_on') }}
      <a target="_blank" class="text-white" href="https://github.com/XDanyKhngey/dany_portfolio"
        >Github</a
      >
    </p>
  </div>
</template>

<style>
h1,
h4 {
  color: white;
}
#bg_cover {
  position: relative;
  width: 100%;
  height: calc(100vh);
  background-image: url("/img/bgbook.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 100px;
}

#bg_cover::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  z-index: 1;
}

#bg_cover > * {
  position: relative;
  z-index: 2;
}

#download_cv_btn {
  padding: 10px 30px;
  font-weight: bold;
  background-color: var(--bs-pink);
}

.typing-effect {
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid;
  animation: blink-caret 0.75s step-end infinite;
}

/* Blinking cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
}

@media (min-width: 991.98px) {
  #github_link {
    display: none;
  }
}

@media (max-width: 991.98px) {
  #github_link {
    display: block;
  }
}
</style>
