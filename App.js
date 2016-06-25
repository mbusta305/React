import React from 'react';
class App extends React.Component {
  constructor() {
    super();
    this.state = {data: [
      {id: 1, name: "Simon Bailey"},{id: 2, name: "Thomas Burleson"},
      {id: 3, name: "Alyssa Foligno"},{id: 4, name: "Zach Bamman"},
      {id: 5, name: "Jimmy Obenour"},{id: 6, name: "Matt Phillips"},
      {id: 7, name: "Johnny Busta"},{id: 8, name: "Jeff Conine"},
      {id: 9, name: "Babe Ruth"},{id: 10, name: "Hank Arron"},
      {id: 11, name: "Steve Jobs"},
      {id: 12, name: "Bill Gates"},
      {id: 13, name: "Tony Tiger"},
      {id: 14, name: "Tyler McGinnis"},
      {id: 15, name: "Keith Peters"},
      {id: 16, name: "Robert Penner"},
      {id: 17, name: "Lukas Ruebbelke"},
      {id: 18, name: "Brett Shollenberger"},
    ]}
  }
  render(){
    let rows = this.state.data.map( person => {
      return <PersonRow key={person.id} data={person} />
    })
    return <table>
      <tbody>{rows}</tbody>
    </table>
  }
}

const PersonRow = (props) => {
  return <tr>
      <td>{props.data.id}</td>
      <td>{props.data.name}</td>
    </tr>
}

export default App
