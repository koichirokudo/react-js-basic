import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props; // 分割代入でpropsを省略
  const contentStyle = {
    color, // color: color は color に省略できる JSはプロパティ名と設定名が同じときは省略できる
    fontSize: "18px" // font-sizeではなくfontSizeになる
  };
  // タグの中で表示したい場合はprops.childrenという特殊な変数を使う
  return <p style={contentStyle}>{children}</p>;
  // props.messageという特定の名称でpropsを設定することもできる
  // {props.message}
};

// ２種類のexportのやり方がある
// export default ColorfulMessage;
// 関数の前に export const .. みたいに書いて、呼び出し側で 分割代入でimportしてあげる方法がある
// このexportの方が、タイポ時にエラーが表示されるので、export const の方がいい
