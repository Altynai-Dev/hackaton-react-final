import React, { useState } from "react";
import "./Quiz.css";

export default function App() {
  const questions = [
    {
      questionText:
        "Единственный в мире мультфильм получил премию Британского кинофестиваля в номинации (лучший фильм), а не (лучший мультфильм).Как он называется?",
      answerOptions: [
        { answerText: "Евангелион", isCorrect: false },
        { answerText: "Принцесса Мононоке", isCorrect: false },
        { answerText: "Унесённые призраками", isCorrect: true },
        { answerText: "Стальной алхимик", isCorrect: false },
      ],
    },
    {
      questionText: "Что такое сёдзё?",
      answerOptions: [
        { answerText: "аниме со сценами битвы", isCorrect: false },
        { answerText: "аниме для девушек", isCorrect: true },
        { answerText: "персонаж в самурайской одежде", isCorrect: false },
        { answerText: "механический человек", isCorrect: false },
      ],
    },
    {
      questionText: "Что такое манга?",
      answerOptions: [
        { answerText: "комиксы, по которым снимают аниме", isCorrect: true },
        { answerText: "национальный японский костюм", isCorrect: false },
        { answerText: "девушка в аниме", isCorrect: false },
        { answerText: "рассказ о детстве героев", isCorrect: false },
      ],
    },
    {
      questionText: "Как называют фанатов аниме и манги?",
      answerOptions: [
        { answerText: "наруто", isCorrect: false },
        { answerText: "додзинси", isCorrect: false },
        { answerText: "бурито", isCorrect: false },
        { answerText: "отаку", isCorrect: true },
      ],
    },
    {
      questionText:
        "Назовите одного из известнейших японских режиссёров-аниматоров, создавших мультфильмы в жанре аниме.",
      answerOptions: [
        { answerText: "Тсутому Шимомура", isCorrect: false },
        { answerText: "Харуки Мураками", isCorrect: false },
        { answerText: "Хаяо Миядзаки", isCorrect: true },
        { answerText: "Емсуши Яногами", isCorrect: false },
      ],
    },
    {
      questionText:
        "Какой философский вопрос поднимает серия аниме-фильмов Тетрадь смерти?",
      answerOptions: [
        { answerText: "Быть или не быть?", isCorrect: false },
        { answerText: "Нужно ли бояться смерти?", isCorrect: false },
        { answerText: "Может ли убийство быть благом?", isCorrect: true },
        { answerText: "Для чего необходимо искусство?", isCorrect: false },
      ],
    },
    {
      questionText: "Какое известное аниме было снято по мотивам видеоигры?",
      answerOptions: [
        { answerText: "Евангелион", isCorrect: false },
        { answerText: "Акварион", isCorrect: false },
        { answerText: "Покемон", isCorrect: true },
        { answerText: "Сейлор Мун", isCorrect: false },
      ],
    },
    {
      questionText:
        "Как зовут главную героиню сериала Сейлор Мун в обычной жизни?",
      answerOptions: [
        { answerText: "Икуко", isCorrect: false },
        { answerText: "Осака", isCorrect: false },
        { answerText: "Усаги", isCorrect: true },
        { answerText: "Мамору", isCorrect: false },
      ],
    },
    {
      questionText: "Какое прозвище получил Канеки?",
      answerOptions: [
        { answerText: "черный кролик", isCorrect: false },
        { answerText: "гурман", isCorrect: false },
        { answerText: "глазная повязка", isCorrect: true },
        { answerText: "ястреб", isCorrect: false },
      ],
    },
    {
      questionText:
        "Какой силой обладает маг Грей Фуллбастер из аниме «Хвост Феи»?",
      answerOptions: [
        { answerText: "Магия воды", isCorrect: false },
        { answerText: "Магия ветра", isCorrect: false },
        { answerText: "Магия льда", isCorrect: true },
        { answerText: "Магия земли", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
