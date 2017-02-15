import React from 'react';


function Hello({text}) {
  const styleObj = {
    width: 600,
    height: 50,
    textAlign: 'center',
    background: '#ccc',
    color: 'blue'
  };

  return (
    <h1 style={styleObj}>I am {text}</h1>
  );
}

// class Hello extends Component {
//   render() {
//     return (
//       <div>
//         Hello
//       </div>
//     );
//   }
// }

export default Hello;