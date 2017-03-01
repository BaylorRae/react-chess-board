# react-chess-board

This is an experiment to create a chess board with CSS, React and [chess.js].
The primary goal is to build the board and place the pieces with as much CSS and
as little JS as possible.

The board background is created using a [checker board gradient pattern in
CSS][css_board] and the pieces are placed with [class named
coordinates][css_coordinates].

The engine to move the pieces and determine legal moves is done with [chess.js].
When a move is attempted, if it's legal, we updated the coordinates of a piece
and redraw the board to account for any major changes.

## Usage

```shell
$ npm start # starts a local server at http://localhost:3000 (this also watches changes in sass-files)
$ npm run build # creates a production copy of the app
$ git subtree push --prefix build origin gh-pages # pushes the build directory to the gh-pages branch
```

## Todo

- [ ] castling is currently not possible (see #1)
- [ ] pawn promotion defaults to a knight
- [ ] show coordinates on board
- [ ] would like to drag and drop

[chess.js]: https://github.com/jhlywa/chess.js
[css_board]: https://github.com/BaylorRae/react-chess-board/blob/master/src/stylesheets/components/_board.scss#L5-L6
[css_coordinates]: https://github.com/BaylorRae/react-chess-board/blob/master/src/stylesheets/_coordinates.scss
