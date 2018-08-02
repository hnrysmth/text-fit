document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.input');
  const slider = document.querySelector('.slider');
  const output = document.querySelector('.output');

  const inputBackup = localStorage.getItem('input');
  const sliderBackup = localStorage.getItem('slider');

  input.value = inputBackup || 'words words words words words';
  slider.value = sliderBackup || 100;

  const updateOutputText = () => {
    output.textContent = input.value;
  };

  const updateOutputWidth = () => {
    const sizeMultiplier = slider.value / 100;
    const newWidth = input.clientWidth * sizeMultiplier;
    output.style.width = `${newWidth}px`;
  };

  const updateOutputFontSize = () => {
    const style = getComputedStyle(output);
    let fontSize = 1;

    for (let i = 1; i <= 900; i++) {
      fontSize = i;
      output.style.fontSize = `${fontSize}px`;

      const hasBurstHorizontally = output.scrollWidth > output.clientWidth;
      const hasBurstVertically = output.scrollHeight > output.clientHeight;

      if (hasBurstHorizontally || hasBurstVertically) {
        fontSize -= 1;
        output.style.fontSize = `${fontSize}px`;
        break;
      }
    }
  };

  input.addEventListener('keyup', () => {
    updateOutputText();
    updateOutputFontSize();
    localStorage.setItem('input', input.value);
  });

  slider.addEventListener('input', () => {
    updateOutputWidth();
    updateOutputFontSize();
    localStorage.setItem('slider', slider.value);
  });

  updateOutputText();
  updateOutputWidth();
  updateOutputFontSize();
});
