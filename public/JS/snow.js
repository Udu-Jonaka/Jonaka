function startSnowfall() {
  const container = document.getElementById("snowfall-container");

  // Clear any existing snowflakes
  container.innerHTML = "";

  const duration = 10000; // 10 seconds
  const snowflakeCount = 100;
  const interval = duration / snowflakeCount;

  let created = 0;

  const snowInterval = setInterval(function () {
    if (created >= snowflakeCount) {
      clearInterval(snowInterval);
      return;
    }

    createSnowflake(container);
    created++;
  }, interval);

  // Stop after 10 seconds and clean up
  setTimeout(function () {
    clearInterval(snowInterval);

    // Fade out and remove remaining snowflakes after a bit
    setTimeout(function () {
      container.innerHTML = "";
    }, 5000);
  }, duration);
}

function createSnowflake(container) {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.textContent = "❄";

  // Random horizontal position
  snowflake.style.left = Math.random() * 100 + "%";

  // Random size
  const size = Math.random() * 1.5 + 0.5;
  snowflake.style.fontSize = size + "em";

  // Random fall duration (3-8 seconds)
  const fallDuration = Math.random() * 5 + 3;
  snowflake.style.animationDuration = fallDuration + "s";

  // Random horizontal drift
  const drift = (Math.random() - 0.5) * 100;
  snowflake.style.setProperty("--drift", drift + "px");

  container.appendChild(snowflake);

  // Remove snowflake after animation completes
  setTimeout(function () {
    if (snowflake.parentNode) {
      snowflake.remove();
    }
  }, fallDuration * 1000);
}

// Auto-start on page load
window.addEventListener("load", startSnowfall);
