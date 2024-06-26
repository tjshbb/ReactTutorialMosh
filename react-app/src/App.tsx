import { useState } from "react";

function App() {

  // object, object
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John"
    },
  });

  //object, array
  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom']
  });

  //object, array, object
  const [cart, setCart] = useState({
    discount: .1,
    items: [
      { id: 1, title: 'Product 1', quantity: 1 },
      { id: 2, title: 'Product 2', quantity: 1 }
    ]
  });

  //array, object
  const [bugs, setBugs] = useState([
    { id: 1, title: 'Bug 1', fixed: false },
    { id: 2, title: 'Bug 2', fixed: false },
  ]);

  //array
  const [tags, setTags] = useState([
    'happy',
    'cheerful'
  ]);

  const handleClick = () => {
    // update a value in an object, object
    setGame({ ...game, player: { ...game.player, name: 'Bob' } });

    //add a value to an object, array
    setPizza({ ...pizza, toppings: [...pizza.toppings, 'cheese'] });

    //update a value in an object, array, object
    setCart({ ...cart, items: cart.items.map(item => item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item) });

    //update a value in an array, object
    setBugs(bugs.map(bug => bug.id === 1 ? { ...bug, fixed: true } : bug));

    //add a value to an array
    setTags([...tags, 'exciting']);

    //remove a value from an array
    setTags(tags.filter(tag => tag !== 'happy'));

    //update a value in an array
    setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag))
  };

  return (
    <div></div>
  );
}

export default App;