"use strict";


// cssセレクター
const selectors = ["div#above-the-fold", "div#menu", "div#segmented-dislike-button", "button"];

// badButtonをクリックする関数
function returnButtonEle(selectors, index, parentEle) {

    // 要素取得を4回行う
    if (index < 4) {
        const childEle = parentEle.querySelector(selectors[index.toString()]);

        // 要素があるかどうか
        if (childEle === null) {
            setTimeout(returnButtonEle, 200, selectors, index, parentEle);
        } else {
            index += 1;
            setTimeout(returnButtonEle, 0, selectors, index, childEle);
        }
    } else {
        const buttonStatus = parentEle.getAttribute("aria-pressed");

        // ボタンがまだ押されてない時
        if (buttonStatus === "false") {
            parentEle.click();
        }
    }
}

// 実行する関数
function runF() {
    // 現在のpathname
    const currentURLpath = location.pathname;
    if (currentURLpath == "/watch") {
        returnButtonEle(selectors, 0, document);
    }
}
// navigateしたらevent発生
document.addEventListener("yt-navigate-finish", runF);
