

//nie wiem jak te zdjecia dodac


var movies = [
  {
    id: 1, 
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img.src: 'http://garafova.com/wp-content/uploads/2017/05/infographic_KPJS_print.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'http://garafova.com/wp-content/uploads/2017/05/infographic_KPJS_print.jpg'
  },
  {
    id: 3,
    title: 'Film 3',
    desc: 'Film o js',
    img.src: 'http://garafova.com/wp-content/uploads/2017/05/infographic_KPJS_print.jpg'
  },
  {
    id: 4,
    title: 'Film 4',
    desc: 'Film o js',
    img.src: 'http://garafova.com/wp-content/uploads/2017/05/infographic_KPJS_print.jpg'
  },
  {
    id: 5,
    title: 'Film 5',
    desc: 'Film o js',
    img.src: 'http://garafova.com/wp-content/uploads/2017/05/infographic_KPJS_print.jpg'
   
  }
  
    
];




var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc)
       React.createElement('img', {src:''}, movie.img)
    );
});


var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));