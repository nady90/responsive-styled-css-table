import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Responsive Table</h1>
      <div className="table-container">
        <table>
          <caption>The last 12 champions league finals</caption>

          <tr>
            <th>Season</th>
            <th>Winner</th>
            <th>Loser</th>
            <th>Score</th>
            <th>Venue</th>
            <th>Attendance</th>
          </tr>

          <tr>
            <td data-cell="season">2021–22</td>
            <td data-cell="winner">Real Madrid</td>
            <td data-cell="loser">Liverpool</td>
            <td data-cell="score">1-0</td>
            <td data-cell="venue">Stade de France</td>
            <td data-cell="attendance">75,000</td>
          </tr>

          <tr>
            <td data-cell="season">2020–21</td>
            <td data-cell="winner">Chelsea</td>
            <td data-cell="loser">Manchester City</td>
            <td data-cell="score">1-0</td>
            <td data-cell="venue">Estádio do Dragão</td>
            <td data-cell="attendance">14,110</td>
          </tr>

          <tr>
            <td data-cell="season">2019–20</td>
            <td data-cell="winner">Bayern Munich</td>
            <td data-cell="loser">Paris Saint-Germain</td>
            <td data-cell="score">1-0</td>
            <td data-cell="venue">Estádio da Luz</td>
            <td data-cell="attendance">0</td>
          </tr>

          <tr>
            <td data-cell="season">2018–19</td>
            <td data-cell="winner">Liverpool</td>
            <td data-cell="loser">Tottenham Hotspur</td>
            <td data-cell="score">2-0</td>
            <td data-cell="venue">Metropolitano Stadium</td>
            <td data-cell="attendance">63,272</td>
          </tr>

          <tr>
            <td data-cell="season">2017–18</td>
            <td data-cell="winner">Real Madrid</td>
            <td data-cell="loser">Liverpool</td>
            <td data-cell="score">3-1</td>
            <td data-cell="venue">NSC Olimpiyskiy Stadium</td>
            <td data-cell="attendance">61,561</td>
          </tr>

          <tr>
            <td data-cell="season">2016–17</td>
            <td data-cell="winner">Real Madrid</td>
            <td data-cell="loser">Juventus</td>
            <td data-cell="score">4-1</td>
            <td data-cell="venue">Millennium Stadium</td>
            <td data-cell="attendance">65,842</td>
          </tr>

          <tr>
            <td data-cell="season">2015–16</td>
            <td data-cell="winner">Real Madrid</td>
            <td data-cell="loser">Atlético Madrid</td>
            <td data-cell="score">1-1</td>
            <td data-cell="venue">San Siro</td>
            <td data-cell="attendance">71,942</td>
          </tr>

          <tr>
            <td data-cell="season">2014–15</td>
            <td data-cell="winner">Barcelona</td>
            <td data-cell="loser">Juventus</td>
            <td data-cell="score">3-1</td>
            <td data-cell="venue">Olympiastadion</td>
            <td data-cell="attendance">70,442</td>
          </tr>

          <tr>
            <td data-cell="season">2013–14</td>
            <td data-cell="winner">Real Madrid</td>
            <td data-cell="loser">Atlético Madrid</td>
            <td data-cell="score">4-1</td>
            <td data-cell="venue">Estádio da Luz</td>
            <td data-cell="attendance">60,976</td>
          </tr>

          <tr>
            <td data-cell="season">2012–13</td>
            <td data-cell="winner">Bayern Munich</td>
            <td data-cell="loser">Borussia Dortmund</td>
            <td data-cell="score">2-1</td>
            <td data-cell="venue">Wembley Stadium</td>
            <td data-cell="attendance">86,298</td>
          </tr>

          <tr>
            <td data-cell="season">2011–12</td>
            <td data-cell="winner">Chelsea</td>
            <td data-cell="loser">Bayern Munich</td>
            <td data-cell="score">1-1</td>
            <td data-cell="venue">Allianz Arena</td>
            <td data-cell="attendance">62,500</td>
          </tr>

          <tr>
            <td data-cell="season">2010–11</td>
            <td data-cell="winner">Barcelona</td>
            <td data-cell="loser">Manchester United</td>
            <td data-cell="score">3-1</td>
            <td data-cell="venue">Wembley Stadium</td>
            <td data-cell="attendance">87,695</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
