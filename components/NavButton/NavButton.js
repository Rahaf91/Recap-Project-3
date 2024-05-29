export function NavButton({ label, onClick }) {
  const button = document.createElement("button");
  button.className = "button";
  button.textContent = label;
  button.addEventListener("click", onClick);
  return button;
}
