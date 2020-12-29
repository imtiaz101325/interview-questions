import { useState } from "react";

function fakeAPI() {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.1) {
      reject(new Error("Internal server error"));
    }

    setTimeout(() => {
      const numberOfUsers = Math.floor(Math.random() * 1000)
      const users = [...Array(numberOfUsers).keys()].map(num => ({
        username: `User ${num}`,
        watchTime: Math.floor(Math.random() * 100)
      }))
  
      resolve(users)
    }, 500);
  });
}

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
