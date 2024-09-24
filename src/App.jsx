import React, { useState } from 'react';
import cn from 'classnames';

import 'bulma/css/bulma.css';
import './App.scss';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export function App() {
  const [selectedGood, setGood] = useState('Jam');

  const handleReset = () => {
    setGood('');
  };

  const handleGood = good => {
    setGood(good);
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? (
          <>
            {`${selectedGood} is selected`}
            <button
              onClick={handleReset}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </>
        ) : (
          'No goods selected'
        )}
      </h1>

      <table className="table">
        {goods.map(good => {
          const isGoodSelected = good === selectedGood;

          const changingGoodButtonCondition = () =>
            isGoodSelected ? handleReset() : handleGood(good);

          return (
            <tr
              key={good}
              data-cy="Good"
              className={cn({ 'has-background-success-light': isGoodSelected })}
            >
              <td>
                <button
                  onClick={changingGoodButtonCondition}
                  data-cy={isGoodSelected ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={cn('button', { 'is-info': isGoodSelected })}
                >
                  {isGoodSelected ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          );
        })}
      </table>
    </main>
  );
}
