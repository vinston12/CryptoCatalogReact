

function RandomColorTable(props) {
  const thElements = document.getElementsByClassName('random-background');

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  for (let i = 0; i < thElements.length; i++) {
    thElements[i].style.backgroundColor = getRandomColor();
  }

  return props.children;
}

export default RandomColorTable;