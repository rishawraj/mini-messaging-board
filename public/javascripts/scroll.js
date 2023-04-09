function scrollLatestMessageIntoView() {
  const messages = document.querySelectorAll(".message");
  if (messages.length > 0) {
    const latestMessage = messages[messages.length - 1];
    latestMessage.scrollIntoView({ behavior: "smooth" });
  }
}

function run() {
  scrollLatestMessageIntoView();
}

run();
