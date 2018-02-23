

//nie wiem jak te zdjecia dodac


var movies = [
  {
    id: 1, 
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
<<<<<<< HEAD
    img: 'https://marketplace.canva.com/MACGFoEVNCs/1/0/thumbnail_large/canva-light-blue-cute-car-cartoon-car-wash-poster-MACGFoEVNCs.jpg'
=======
    img: './1.jpg'
>>>>>>> ccec667e78a0bd6feb23e660d6c9fb2047d63c7e
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
<<<<<<< HEAD
    img: 'https://marketplace.canva.com/MACGFoEVNCs/1/0/thumbnail_large/canva-light-blue-cute-car-cartoon-car-wash-poster-MACGFoEVNCs.jpg'
=======
    img: './1.jpg'
>>>>>>> ccec667e78a0bd6feb23e660d6c9fb2047d63c7e
  },
  {
    id: 3,
    title: 'Film 3',
    desc: 'Film o js',
<<<<<<< HEAD
    img: 'https://marketplace.canva.com/MACGFoEVNCs/1/0/thumbnail_large/canva-light-blue-cute-car-cartoon-car-wash-poster-MACGFoEVNCs.jpg'
=======
    img: './1.jpg'
>>>>>>> ccec667e78a0bd6feb23e660d6c9fb2047d63c7e
  },
  {
    id: 4,
    title: 'Film 4',
    desc: 'Film o js',
<<<<<<< HEAD
    img: 'https://marketplace.canva.com/MACGFoEVNCs/1/0/thumbnail_large/canva-light-blue-cute-car-cartoon-car-wash-poster-MACGFoEVNCs.jpg'
=======
    img: './1.jpg'
>>>>>>> ccec667e78a0bd6feb23e660d6c9fb2047d63c7e
  },
  {
    id: 5,
    title: 'Film 5',
    desc: 'Film o js',
<<<<<<< HEAD
    img: 'https://marketplace.canva.com/MACGFoEVNCs/1/0/thumbnail_large/canva-light-blue-cute-car-cartoon-car-wash-poster-MACGFoEVNCs.jpg'
=======
    img: './1.jpg'
>>>>>>> ccec667e78a0bd6feb23e660d6c9fb2047d63c7e
   
  }
  
    
];




var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
<<<<<<< HEAD
      React.createElement('p', {}, movie.desc),
     React.createElement('img', {src: movie.img}),
=======
      React.createElement('p', {}, movie.desc)
       React.createElement('img', {}, movie.img)
>>>>>>> ccec667e78a0bd6feb23e660d6c9fb2047d63c7e
    );
});


var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements),
                  
  );

ReactDOM.render(element, document.getElementById('app'));
