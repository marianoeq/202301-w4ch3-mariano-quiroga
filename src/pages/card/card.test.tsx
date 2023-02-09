import { render, screen } from '@testing-library/react';
import { Card } from './card';
describe('Given a card component', () => {
  describe('When it is rendered', () => {
    test('Then image should appear', () => {
      render(
        <Card
          id={0}
          role={''}
          name={''}
          lastname={''}
          boss={''}
          edad={0}
          img={''}
          alive={false}
        ></Card>
      );
      const element = screen.getByRole('img');
      expect(element).toBeInTheDocument();
    });
  });
});
