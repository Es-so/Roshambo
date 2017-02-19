import 'universal-fetch';

const url = 'https://hook.io/eric-basley/roshambo';

const checkStatus = (result) => {
  if (result.status !== 200) {
    throw new Error(result.statusText);
  }
  return result;
};

const parserJson = result => result.json();

const requestJson = () => fetch(url).then(checkStatus).then(parserJson);

export default requestJson;
