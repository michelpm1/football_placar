import React from 'react';
// import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'
import Scores from '../components/Scores';

describe('Socres component', () => {
  it('Should return a object containing competition', () => {
    const scores = new Scores();

    scores.getScores(444).then((result) => {
      console.log(result);
      expect(result.data.competition.name).toEqual('Campeonato Brasileiro 2018');
    })
  })
});
