Aristocrat
==========

Discerning members of high society choose the Aristocrat JavaScript library to manipulate their class attributes.


Examples
--------

```javascript
aristocrat.addClass(document.body, 'king');
aristocrat.removeClass(document.body, 'king');
aristocrat.toggleClass(document.body, 'king');
aristocrat.hasClass(document.body, 'king');
```

Downloads
---------

See http://peter.michaux.ca/downloads/aristocrat/ for production ready builds.


Status
------

Ready.


Browser Support
---------------

Tested working in IE6 and newer browsers by a variety of manufacturers.


Dependencies
------------

None.


Build
-----

To build the production ready files, you need [JSMin](http://www.crockford.com/javascript/jsmin.html) or any other tool with the same command line interface. Then just type "make" at the command line and look in the build directory for the results.

For the record, this is how I installed JSMin. Note that I have /Users/peter/bin in my PATH.

```sh
$ cd ~/tmp
$ curl -O https://raw.github.com/douglascrockford/JSMin/master/jsmin.c
$ gcc -o jsmin jsmin.c
$ mv jsmin ~/bin
$ rm jsmin.c
$ which jsmin
/Users/peter/bin/jsmin
```


Tests
-----

To run the automated tests, open tst/runner.html in a web browser.


Author
------

Peter Michaux<br>
petermichaux@gmail.com<br>
http://peter.michaux.ca/<br>
[@petermichaux](https://twitter.com/petermichaux)
