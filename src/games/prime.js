import { getRandomNumber, isPrime } from '../games/math-utils.js'

const descriptionPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const generateRoundPrime = () => {
  const question = getRandomNumber(1, 100) // получаем число
  const correctAnswer = isPrime(question) ? 'yes' : 'no' // правильный ответ
  return { question, correctAnswer }
}

export { descriptionPrime, generateRoundPrime }
