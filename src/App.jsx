import React, { useState } from 'react';

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

  const isGoodSelected = good => good === selectedGood;

  return (
    <main className="section container">
      {selectedGood !== null ? (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            onClick={() => setGood(null)}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        {goods.map(good => (
          <tr
            data-cy="Good"
            className={
              isGoodSelected(good) ? 'has-background-success-light' : ''
            }
          >
            <td>
              {isGoodSelected(good) ? (
                <button
                  onClick={() => setGood(null)}
                  data-cy="RemoveButton"
                  type="button"
                  className="button is-info"
                >
                  −
                </button>
              ) : (
                <button
                  onClick={() => setGood(good)}
                  data-cy="AddButton"
                  type="button"
                  className="button"
                >
                  +
                </button>
              )}
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              {good}
            </td>
          </tr>
        ))}
      </table>
    </main>
  );
}
