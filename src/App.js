import './App.css';
import { SiChessdotcom } from "react-icons/si";
import { FaRegChessPawn } from "react-icons/fa6";
import { GiChessRook } from "react-icons/gi";
import { FaChessKnight } from "react-icons/fa6";
import { FaChessBishop } from "react-icons/fa6";
import { FaChessKing } from "react-icons/fa6";
import { GiChessQueen } from "react-icons/gi";
import { LiaChessRookSolid } from "react-icons/lia";
import { FaRegChessKnight } from "react-icons/fa6";
import { TbChessBishop } from "react-icons/tb";
import { FaRegChessKing } from "react-icons/fa6";
import { FaRegChessQueen } from "react-icons/fa6";

function App() {
  return (
    <table className="chess-board">
    <tbody>
      <h1>CHESS BOARD</h1>
        <tr>
            <th></th>
            <th>A</th>
            <th>B</th>
            <th>C</th>
            <th>D</th>
            <th>E</th>
            <th>F</th>
            <th>G</th>
            <th>H</th>
        </tr>
        <tr>
            <th>1</th>
            <td className="light"><GiChessRook className='coin'/></td>
            <td className="dark"><FaChessKnight className='coin'/></td>
            <td className="light"><FaChessBishop className='coin'/></td>
            <td className="dark"><FaChessKing className='coin'/></td>
            <td className="light"><GiChessQueen className='coin'/></td>
            <td className="dark"><FaChessBishop className='coin'/></td>
            <td className="light"><FaChessKnight className='coin'/></td>
            <td className="dark"><GiChessRook className='coin'/></td>
        </tr>
        <tr>
            <th>2</th>
            <td className="dark"><SiChessdotcom className='coin'/></td>
            <td className="light"><SiChessdotcom className='coin'/></td>
            <td className="dark"><SiChessdotcom className='coin'/></td>
            <td className="light"><SiChessdotcom className='coin'/></td>
            <td className="dark"><SiChessdotcom className='coin'/></td>
            <td className="light"><SiChessdotcom className='coin'/></td>
            <td className="dark"><SiChessdotcom className='coin'/></td>
            <td className="light"><SiChessdotcom className='coin'/></td>
        </tr>
        <tr>
            <th>3</th>
            <td className="light"></td>
            <td className="dark"></td>
            <td className="light"></td>
            <td className="dark"></td>
            <td className="light"></td>
            <td className="dark"></td>
            <td className="light"></td>
            <td className="dark"></td>
        </tr>
        <tr>
            <th>4</th>
            <td className="dark"></td>
            <td className="light"></td>
            <td className="dark"></td>
            <td className="light"></td>
            <td className="dark"></td>
            <td className="light"></td>
            <td className="dark"></td>
            <td className="light"></td>
        </tr>
        <tr>
            <th>5</th>
            <td className="light"></td>
            <td className="dark"></td>
            <td className="light"></td>
            <td className="dark"></td>
            <td className="light"></td>
            <td className="dark"></td>
            <td className="light"></td>
            <td className="dark"></td>
        </tr>
        <tr>
            <th>6</th>
            <td className="dark"></td>
            <td className="light"></td>
            <td className="dark"></td>
            <td className="light"></td>
            <td className="dark"></td>
            <td className="light"></td>
            <td className="dark"></td>
            <td className="light"></td>
        </tr>
        <tr>
            <th>7</th>
            <td className="light"><FaRegChessPawn className='whitecoin'/></td>
            <td className="dark"><FaRegChessPawn className='whitecoin'/></td>
            <td className="light"><FaRegChessPawn className='whitecoin'/></td>
            <td className="dark"><FaRegChessPawn className='whitecoin'/></td>
            <td className="light"><FaRegChessPawn className='whitecoin'/></td>
            <td className="dark"><FaRegChessPawn className='whitecoin'/></td>
            <td className="light"><FaRegChessPawn className='whitecoin'/></td>
            <td className="dark"><FaRegChessPawn className='whitecoin'/></td>
        </tr>
        <tr>
            <th>8</th>
            <td className="dark"><LiaChessRookSolid className='whitecoin'/></td>
            <td className="light"><FaRegChessKnight className='whitecoin'/></td>
            <td className="dark"><TbChessBishop className='whitecoin'/></td>
            <td className="light"><FaRegChessKing className='whitecoin'/></td>
            <td className="dark"><FaRegChessQueen className='whitecoin'/></td>
            <td className="light"><TbChessBishop className='whitecoin'/></td>
            <td className="dark"><FaRegChessKnight className='whitecoin'/></td>
            <td className="light"><LiaChessRookSolid className='whitecoin'/></td>
        </tr>
    </tbody>
</table>
  );
}

export default App;
