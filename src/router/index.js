import Vue from 'vue'
import Router from 'vue-router';
import Home from '../views/Home';
import Book from '../views/book/Book';
import SpecificBook from '../views/book/SpecificBook';
import NewBook from '../views/book/NewBook';
import EditBook from '../views/book/EditBook';
import DeleteBook from '../views/book/DeleteBook';
import Author from '../views/author/Author';
import SpecificAuthor from '../views/author/SpecificAuthor';
import NewAuthor from '../views/author/NewAuthor';
import EditAuthor from '../views/author/EditAuthor';
import DeleteAuthor from '../views/author/DeleteAuthor';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/books',
      name: 'Book',
      component: Book,
    },
    {
      path: '/books/1',
      name: 'SpecificBook',
      component: SpecificBook,
    },
    {
      path: '/books/new',
      name: 'NewBook',
      component: NewBook,
    },
    {
      path: '/books/1/edit',
      name: 'EditBook',
      component: EditBook,
    },
    {
      path: '/books/1/delete',
      name: 'DeleteBook',
      component: DeleteBook,
    },
    {
      path: '/authors',
      name: 'Author',
      component: Author,
    },
    {
      path: '/authors/1',
      name: 'SpecificAuthor',
      component: SpecificAuthor,
    },
    {
      path: '/authors/new',
      name: 'NewAuthor',
      component: NewAuthor,
    },
    {
      path: '/authors/1/edit',
      name: 'EditAuthor',
      component: EditAuthor,
    },
    {
      path: '/authors/1/delete',
      name: 'DeleteAuthor',
      component: DeleteAuthor,
    }
  ],
})
