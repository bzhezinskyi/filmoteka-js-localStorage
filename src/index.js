import movis from './js/fetch';

function create() {
  movis().then(arrey => {
    arrey.data.results;
  });
}

create();
