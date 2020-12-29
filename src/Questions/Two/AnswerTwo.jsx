import { useState } from "react";

// Functions
// import fakeAPI from './fakeAPI'

export default function AnswerTwo() {
  const [data] = useState([{ username: "example", watchTime: 12 }]);

  async function handleOnChange() {
    // call api set data so that it renders data below
  }

  return (
    <section>
      <label>Movie</label>
      <input type="text" onChange={handleOnChange} />
      {/* render data here */}
      <table>
        <tr>
          <th>Username</th>
          <th>WatchTime</th>
        </tr>
        {data.map(({ username, watchTime }) => (
          <tr>
            <td>{username}</td>
            <td>{watchTime}</td>
          </tr>
        ))}
      </table>
    </section>
  );
}
