<div>
<script>
function doAction(event){
var param = new Object();
var d = document.querySelector('#date').value;
var dstr = new Date(d).toString();
param['date'] = dstr;
param['user'] = document.querySelector('#user').value;
param['mail'] = document.querySelector('#mail').value;
google.script.run.withSuccessHandler(onSuccess) 
.withFailureHandler(onFailure) .checkData(param);
document.querySelector('#msg').textContent = '……問い合わせ中……';
}
function onSuccess(result){
document.querySelector('#msg').textContent = result;
}
function onFailure(error) {
alert(error.message);
document.querySelector('#msg').textContent = '';
}
</script>
<p id="msg">必ず全項目を入力してください。</p>
<form>
<table>
<tr><td>日付：</td><td><input type="date" id="date" name="date" value=""></td></tr>
<tr><td>利用者名：</td><td><input type="text" id="user" name="user"></td></tr>
<tr><td>メールアドレス：</td><td><input type="text" id="mail" name="mail"></td></tr>
<tr><td></td><td><input type="button" onclick="doAction(e);" value="予約する"></td></tr>
</table>
</form>
</div>