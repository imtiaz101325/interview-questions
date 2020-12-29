// Please remove this code and start over

export default function AnswerOne() {
  return (
    <section>
      <div>
        <h1>Student Form</h1>
        <label>Name </label>
        <input type="text" />
        <br />
        <label>Address </label>
        <input type="text" />
        <br />
        <label>Date of birth </label>
        <input type="date" />
        <br />
        <label>Gender </label>
        <input type="radio" /> male
        <input type="radio" /> female
        <br />
        <label>Clubs </label>
        <input type="checkbox" /> Chess
        <input type="checkbox" /> Drama
        <input type="checkbox" /> Football
        <input type="checkbox" /> Debate
        <input type="checkbox" /> Computer
        <br />
        <label>Teacher's feedback </label>
        <textarea></textarea>
        <br />
        <label>Section </label>
        <select name="moviepref">
          <option value={1} selected="true">
            A
          </option>
          <option value={2}>B</option>
          <option value={3}>C</option>
          <option value={4}>D</option>
          <option value={5}>E</option>
        </select>
        <br />
        <input type="submit" value="submit" />
      </div>
      <br />
      <br />
      <div>
        <div>
          <label>Filter section </label>
          <select name="moviepref">
            <option></option>
            <option value={1}>A</option>
          </select>
        </div>
        <div>
          <h2>Section A</h2>
          <form>
            <h3>Filters</h3>
            <table>
              <tr>
                <td>
                  <label>Gender: </label>
                  All <input type="radio" />
                  Male <input type="radio" />
                  Female <input type="radio" />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Name: </label>
                  <input type="text" />
                </td>
              </tr>
            </table>
          </form>
          <table style={{ width: "100%" }}>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Clubs</th>
              <th>Feedback</th>
            </tr>
            <tr>
              <td>Alex</td>
              <td>4/6, Downing Street, Kentucky </td>
              <td>16/12/2002</td>
              <td>Male</td>
              <td>Chess, Computer</td>
              <td>Good kid!</td>
            </tr>
          </table>
        </div>
        <div>
          <h2>Section B</h2>
          <form>
            <h3>Filters</h3>
            <table>
              <tr>
                <td>
                  <label>Gender: </label>
                  All <input type="radio" />
                  Male <input type="radio" />
                  Female <input type="radio" />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Name: </label>
                  <input type="text" />
                </td>
              </tr>
            </table>
          </form>
          <table style={{ width: "100%" }}>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Clubs</th>
              <th>Feedback</th>
            </tr>
            <tr>
              <td>Beth</td>
              <td>123 Main Street, New York </td>
              <td>08/06/2001</td>
              <td>Female</td>
              <td>Drama, Debate</td>
              <td>She's very talented.</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
}
