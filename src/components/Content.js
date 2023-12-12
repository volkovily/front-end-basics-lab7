import React, { Component } from 'react';
import Image from './Image';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      element1: {
        backgroundColor: 'white',
        color: 'black'
      },
      element2: {
        backgroundColor: 'white',
        color: 'black'
      },
      isClicked: false,
      isClicked2: false,
      imageVisible: true,
      imageWidth: 500,
      imageHeight: 500,
    };
  }

  handleElement1Click = () => {
    this.setState((prevState) => ({
      isClicked: !prevState.isClicked,
    }));
  };

  handleElement2Click = () => {
    this.setState((prevState) => ({
      isClicked2: !prevState.isClicked2,
    }));
  };

  handleAddButtonClick = () => {
    this.setState({
      imageVisible: true,
    });
  };

  handleIncreaseButtonClick = () => {
    this.setState((prevState) => ({
      imageWidth: prevState.imageWidth * 1.1,
      imageHeight: prevState.imageHeight * 1.1,
    }));
  };

  handleDecreaseButtonClick = () => {
    this.setState((prevState) => ({
      imageWidth: prevState.imageWidth * 0.9,
      imageHeight: prevState.imageHeight * 0.9,
    }));
  };

  handleRemoveButtonClick = () => {
    this.setState({
      imageVisible: false,
    });
  };

  changeColor1 = (element) => {
    const { backgroundColor, color } = this.state[element];
    const newBackgroundColor = backgroundColor === 'red' ? 'green' : 'red';
    const newColor = color === 'white' ? 'black' : 'white';
    this.setState({
      [element]: {
        backgroundColor: newBackgroundColor,
        color: newColor,
      },
    });
  }

  changeColor2 = (element) => {
    const { backgroundColor, color } = this.state[element];
    const newBackgroundColor = backgroundColor === 'blue' ? 'yellow' : 'blue';
    const newColor = color === 'white' ? 'red' : 'white';
    this.setState({
      [element]: {
        backgroundColor: newBackgroundColor,
        color: newColor,
      },
    });
  }

  render() {
    const {imageVisible, imageWidth, imageHeight } = this.state;

    return (
      <div>
        <p>Місце народження: 07.19.2004, Київ, Україна</p>
        <p
          id="element1"
          style={{
            backgroundColor: this.state.element1.backgroundColor,
            color: this.state.element1.color
          }}
          onClick={() => this.changeColor1('element1')}
        >
          Освіта: Київська спеціалізована школа №57 <br /> НТУУ "Київський політехнічний інститут імені Ігоря Сікорського"
        </p>
        <p
          id="element2"
          style={{
            backgroundColor: this.state.element2.backgroundColor,
            color: this.state.element2.color
          }}
          onClick={() => this.changeColor2('element2')}
        >
          Мої хобі:
        </p>
        <ul>
          <li>Комп'ютерні ігри</li>
          <li>Читання книжок</li>
          <li>Футбол</li>
        </ul>
        <p>Улюблені фільми:</p>
        <ol>
          <li>Назад у майбутнє</li>
          <li>Матриця</li>
          <li>Месники</li>
          </ol>
        <p>Рим — столиця Італії, адміністративний центр області Лаціо. Найбільше місто Італії та одне з найбільших 
          в Європі (8-е місце). Рим — одне з найстаріших міст світу, столиця Стародавнього Риму. 
          Тому, Рим часто називають «вічним містом». Також Рим називають «містом на семи пагорбах».</p>
        {imageVisible && (
          <Image
            src="https://photos.smugmug.com/Europe/Italy/Rome/i-sgm3wGs/0/b26af301/500x500!/IMG_1967-500x500!.jpg"
            alt="Фото Рим (Італія)"
            width={imageWidth}
            height={imageHeight}
          />
        )}
        <div id="button-container">
          <button id="add" onClick={this.handleAddButtonClick}>
            Додати
          </button>
          <button id="increase" onClick={this.handleIncreaseButtonClick}>
            Збільшити
          </button>
          <button id="decrease" onClick={this.handleDecreaseButtonClick}>
            Зменшити
          </button>
          <button id="remove" onClick={this.handleRemoveButtonClick}>
            Видалити
          </button>
        </div>
      </div>
    );
  }
}

export default Content;