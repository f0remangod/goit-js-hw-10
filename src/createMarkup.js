export { makeSingleCardMarkup, makeListMarkup, clearMarkup };
import { refs } from './refs';

function makeSingleCardMarkup({ languages, flags, name, capital, population }) {
  refs.list.innerHTML = '';

  return `
        <div class="header-wrapper"><img class="country-info__image" src="${
          flags.svg
        }" width="60px" alt="${name.official}">
        <p class="country-info__title">${name.official}</p> </div>
        <p class="country-info__text"> Capital: <span>${capital}</span></p>
        <p class="country-info__text"> Population: <span>${population}</span></p>
        <p class="country-info__text"> Languages: <span>${Object.values(
          languages
        )}</span></p>
        </div>`;
}

function makeListMarkup(data) {
  refs.singleCard.innerHTML = '';

  return data
    .map(
      ({ flags, name }) => `
        <li class="country-list__item">
            <img src="${flags.svg}" class="country-list__image" width="50" alt="flag ${name.official}">
            <p class="country-list__name">${name.official}</p>
        </li>`
    )
    .join('');
}

function clearMarkup() {
  refs.singleCard.innerHTML = '';
  refs.list.innerHTML = '';
}
