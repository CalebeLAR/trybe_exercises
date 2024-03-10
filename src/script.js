import validator from 'validator';

const btn_validate = document.querySelector('button');

btn_validate.addEventListener('click', (event) => {
  event.preventDefault();

  const message = document.querySelector('h6');
  const text = document.querySelector('textarea').value;
  let select = document.querySelector('select').value;

  const is_valid = validator[`${select}`](text);

  select = select.replace("is","")

  message.textContent = is_valid
    ? `o texto é um ${select}`
    : `o texto não é um ${select}`;
});
