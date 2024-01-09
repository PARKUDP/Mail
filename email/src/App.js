import './App.css';


// メール送信ボタン
function SEND_BUTTON() {
  return (
    <button>送信</button>
  );
}

// メールフォーム
function QUESTION_MAIL() {
  return (
    <div>
      <label for="email">送信先</label><br></br>
      <input type="email" id="email" pattern=".+@gmail\.com" placeholder="メールアドレスを入力してください。"class="text_com"/><br></br>
      <label for="subject">件名</label><br></br>
      <input type="text" id="subject" placeholder="件名を入力してください。"class="text_com"/><br></br>
      <label>本文</label><br></br>
      <textarea name="body" placeholder="本文を入力してください。"class="text_main"/><br></br>
      <SEND_BUTTON />
    </div>
  );
}


// メイン
export default function email() {
  return (
    <div>
      <h1>メール</h1>
      <QUESTION_MAIL />
    </div>
  );
}