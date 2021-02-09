/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMeassage";
// JSX記法
// returnしていくHTMLの内容には１つのタグで囲わないといけない
// divタグが不要の場合は、React.Fragmentでかこってあげると無駄な要素が増えない <> </>も可能
// Reactのコンポーネント名は必ずパスカルケースで書くこと App, SomeComponent など

// コンポーネント：画面要素の１単位。大（１画面）から小（１つのテキストボックス）までさまざま
// Props : コンポーネントに渡される引数のようなもの
// State : 各コンポーネントが持つ状態。Stateが変更されると再レンダリングされる
const App = () => {
  console.log("init");
  // State変更、コンポーネントのpropsの中身が変わった場合、親のコンポーネントが再レンダリングされた場合に
  // 再レンダリング(App = () => の頭から読み込む)
  // 分割代入で取り出す [変数名, 更新関数] = useState(初期値）
  // 変数名は自由で、関数名はset変数名が通例
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  // setNumの更新関数で処理をしてnumを動的にすることが可能
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  // 関心の分離 useEffect()
  // 第２引数が[]だと最初のレンダリング(最初の１回だけ）だけ実行され、Stateの変更時には実行されない。
  // 第２引数が[num] numのState変わるたびに、useEffect()が実行される（関心を持たせることができる）
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！ </ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ^ω^ )</p>}
    </>
  );
};
// {} 内にJSが記載できる
// Reactでボタンなどにイベントを割り当てる時は、キャメルケースで書く
// CSSを使うには、style= {{ color: 'red' }} 外側{}JSとして認識する 内側{}はJSのオブジェクト
// 文字列とすることを忘れずに 'red'

export default App; // このファイルは他のファイルでも使用できるよという意味
