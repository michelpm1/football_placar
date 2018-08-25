import React from 'react';
import Scores from '../components/Scores';
const scores = new Scores();

describe('Scores component', () => {

  it('Should return status 200 if correct code', () => {
    scores.getScores(444).then((result) => {
      expect(result.status).toBe(200);
    })
  });

  it('Should return status 400 if random code', () => {
    scores.getScores('@&@*').then(() => {
    }).catch( (err) => {
      expect(err.response.status).toBe(400);
    });
  });
});
