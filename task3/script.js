const directors = [
    {
      name: 'Стивен Спилберг',
      career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
      films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
      top_rated_film: 'Список Шиндлера'
    },
    {
      name: 'Кристофер Нолан',
      career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
      films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
      top_rated_film: 'Начало'
    },
    {
      name: 'Мартин МакДона',
      career: 'Сценарист, Режиссёр, Продюсер',
      films: 'https://www.film.ru/person/martin-makdonah',
      top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
      name: 'Алексей Балабанов',
      career: 'Режиссёр, Сценарист, Актёр, Продюсер',
      films: 'https://www.film.ru/person/aleksey-balabanov',
      top_rated_film: 'Брат'
    },
    {
      name: 'Питер Фаррелли',
      career: 'Продюсер, Режиссёр, Сценарист, Актёр',
      films: 'https://www.film.ru/person/piter-farrelli',
      top_rated_film: 'Зелёная книга'
    },
    {
      name: 'Юрий Быков',
      career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
      films: 'https://www.film.ru/person/yuriy-bykov',
      top_rated_film: 'Дурак'
    },
    {
      name: 'Жан-Марк Валле',
      career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
      films: 'https://www.film.ru/person/zhan-mark-valle',
      top_rated_film: 'Далласский клуб покупателей'
    },
  ];
  
  let topFilmsList = [];
  
  function displayDirectors(directors) {
    const directorsList = document.getElementById('directors-list');
    
    directors.forEach(director => {
      const directorDiv = document.createElement('div');
      directorDiv.classList.add('director');
      directorDiv.innerHTML = `
        <h3>${director.name}</h3>
        <p><strong>Карьерные роли:</strong> ${director.career}</p>
        <p><strong>Ссылки на фильмы:</strong> <a href="${director.films}" target="_blank">Смотреть</a></p>
        <p><strong>Лучший фильм:</strong> ${director.top_rated_film}</p>
      `;
      directorsList.appendChild(directorDiv);

      topFilmsList.push(director.top_rated_film);
    });
  }

  function displayTopFilms() {
    const topFilmsListElement = document.getElementById('top-films-list');
    topFilmsList.forEach(film => {
      const filmItem = document.createElement('li');
      filmItem.textContent = film;
      topFilmsListElement.appendChild(filmItem);
    });
  }
 
  directors.sort((a, b) => {
    const lastNameA = a.name.split(' ')[1].toLowerCase();  
    const lastNameB = b.name.split(' ')[1].toLowerCase();  
  
    if (lastNameA < lastNameB) return -1;  
    if (lastNameA > lastNameB) return 1; 
    return 0;  
  });

  displayDirectors(directors);
  displayTopFilms();
  