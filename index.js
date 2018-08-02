document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.input');
  const slider = document.querySelector('.slider');
  const output = document.querySelector('.output');

  const originalWidth = output.clientWidth;

  const copyInput = () => output.textContent = input.value;

  const updateSize = () => {
    const sizeMultiplier = slider.value / 100;
    const newWidth = originalWidth * sizeMultiplier;
    output.style.width = `${newWidth}px`;
  };

  input.addEventListener('keyup', copyInput);
  slider.addEventListener('input', updateSize);

  copyInput();

  console.log('go!', input, slider, output);
});
