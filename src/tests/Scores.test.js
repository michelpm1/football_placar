import React from 'react';
import Scores from '../components/Scores';
const scores = new Scores();

describe('Scores component', () => {

  it('Should return status 200', () => {
    scores.getScores(444).then((result) => {
      console.log(result.status);
      expect(result.status).toBe(200);
    })
  });

  it('Should return status 400', () => {
    scores.getScores('@&@*').then((result) => {
      console.log(result.response.status);
      expect(result.response.status).toBe(400);
    })
  })
});
