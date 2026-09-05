document.getElementById("year").textContent = new Date().getFullYear();

const shareButton = document.getElementById("shareButton");
const toast = document.getElementById("toast");

shareButton?.addEventListener("click", async () => {
  const shareData = {
    title: "Bersama Kita Bisa Membantu — Donasi Buku",
    text: "Mari berbagi buku, pengetahuan, dan harapan. Sekecil apa pun bantuanmu tetap berarti.",
    url: window.location.href,
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(window.location.href);
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 2200);
    }
  } catch (error) {
    if (error?.name !== "AbortError") console.error("Share failed:", error);
  }
});
