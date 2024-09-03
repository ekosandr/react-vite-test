import { useState } from 'react'
import './page4module.css'

const questions = [
    {
      title: 'React - это ... ?',
      variants: ['библиотека', 'фреймворк', 'приложение'],
      correct: 0,
    },
    {
        title: 'Какая из перечисленных структур данных является неизменяемой в JavaScript?',
        variants: ['Объекты', 'Массивы', 'Строки'],
        correct: 2,
      },
    {
      title: 'Компонент - это ... ',
      variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
      correct: 1,
    },
    {
      title: 'Что такое JSX?',
      variants: [
        'Это простой HTML',
        'Это функция',
        'Это тот же HTML, но с возможностью выполнять JS-код',
      ],
      correct: 2,
    },
    {
        title: 'Для чего используется протокол WebSocket?',
        variants: [
          'Для отправки HTTP - запросов',
          'для хранения данных на сервере',
          'Для передачи данных между клиентом и сервером через постоянное соединение без разрыва',
          'Для обработки изображений'
        ],
        correct: 2,
      },
];

function Result({correct}) {
    return (
      <div className="resultContainer">
        <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" style={{width: '120px'}} />
        <h2 className="resultText">Вы отгадали {correct} ответа из {questions.length}</h2>
        <a href='/pages/page4'>
          <button  className="retryButton">Попробовать снова</button>
        </a>
      </div>
    );
};
  


  function Game({ question, onClickVariant}) {
  
    return (
      <div  className="container">
        <div >
          <div style={{ width: '20%' }} ></div>
        </div>
        <h1 className="title" >{question.title}</h1>
        <ul className="variantsList" style={{ listStyleType: 'none'}} >
          {question.variants.map((text, index) => (
            <li onClick={() => onClickVariant(index)} key={text} className="variantItem" style={{border: "3px solid grey"}}>{text}</li>))}
        </ul>
      </div>
    );
}

const Page4 = () => {
    const [step,setStep] = useState(0);
    const [correct,setCorrect] = useState (0);
    const question = questions[step]
  
    const onClickVariant =(index) => {
      console.log(step,index);
      setStep(step + 1);
  
      if (index === question.correct){
        setCorrect(correct + 1);
      }
    }
  return (
    <div >
        {
          step != questions.length ? <Game step = {step} question={question} onClickVariant={onClickVariant}/> : <Result correct={correct}/>
        }
      
    </div>
  )
}
export default Page4



  
