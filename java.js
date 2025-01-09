<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=big5">
<meta name=Generator content="Microsoft Word 15 (filtered)">
<style>
<!--
 /* Font Definitions */
 @font-face
	{font-family:新細明體;
	panose-1:2 2 5 0 0 0 0 0 0 0;}
@font-face
	{font-family:"Cambria Math";
	panose-1:2 4 5 3 5 4 6 3 2 4;}
@font-face
	{font-family:Garamond;
	panose-1:2 2 4 4 3 3 1 1 8 3;}
@font-face
	{font-family:"\@新細明體";
	panose-1:2 1 6 1 0 1 1 1 1 1;}
 /* Style Definitions */
 p.MsoNormal, li.MsoNormal, div.MsoNormal
	{margin:0in;
	font-size:12.0pt;
	font-family:"Garamond",serif;}
.MsoChpDefault
	{font-size:10.0pt;}
 /* Page Definitions */
 @page WordSection1
	{size:595.3pt 841.9pt;
	margin:1.0in 1.25in 1.0in 1.25in;
	layout-grid:18.0pt;}
div.WordSection1
	{page:WordSection1;}
-->
</style>

</head>

<body lang=EN-HK style='word-wrap:break-word;text-justify-trim:punctuation'>

<div class=WordSection1 style='layout-grid:18.0pt'>

<p class=MsoNormal><span lang=EN-US>// </span><span lang=ZH-TW
style='font-family:"新細明體",serif'>獲取畫布元素和上下文</span></p>

<p class=MsoNormal><span lang=EN-US>const canvas =
document.getElementById('gameCanvas');</span></p>

<p class=MsoNormal><span lang=EN-US>const ctx = canvas.getContext('2d');</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>// </span><span lang=ZH-TW
style='font-family:"新細明體",serif'>設置遊戲變量</span></p>

<p class=MsoNormal><span lang=EN-US>const brickWidth = 75;</span></p>

<p class=MsoNormal><span lang=EN-US>const brickHeight = 20;</span></p>

<p class=MsoNormal><span lang=EN-US>const brickPadding = 10;</span></p>

<p class=MsoNormal><span lang=EN-US>const brickOffsetTop = 30;</span></p>

<p class=MsoNormal><span lang=EN-US>const brickOffsetLeft = 30;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>let bricks = [];</span></p>

<p class=MsoNormal><span lang=EN-US>let score = 0;</span></p>

<p class=MsoNormal><span lang=EN-US>let lives = 3;</span></p>

<p class=MsoNormal><span lang=EN-US>let gameOver = false;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>// </span><span lang=ZH-TW
style='font-family:"新細明體",serif'>創建形狀為</span><span lang=EN-US> &quot;MIA&quot; </span><span
lang=ZH-TW style='font-family:"新細明體",serif'>的磚塊</span></p>

<p class=MsoNormal><span lang=EN-US>function createBricks() {</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp; bricks = [];</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp; const rows = [</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&quot; M&nbsp;&nbsp; M &quot;,</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&quot; MM MM &quot;,</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&quot; M M M &quot;,</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&quot; M&nbsp;&nbsp; M &quot;,</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&quot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &quot;,</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&quot;&nbsp; AAA&nbsp; &quot;,</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&quot; A&nbsp;&nbsp; A &quot;,</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&quot;AAAAAAA&quot;,</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp; ];</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp; for (let r = 0; r &lt;
rows.length; r++) {</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
const row = [];</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
for (let c = 0; c &lt; rows[r].length; c++) {</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
if (rows[r][c] !== &quot; &quot;) {</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
row.push({</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
x: c * (brickWidth + brickPadding) + brickOffsetLeft,</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
y: r * (brickHeight + brickPadding) + brickOffsetTop,</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
visible: true,</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
});</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
}</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
}</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
bricks.push(row);</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp; }</span></p>

<p class=MsoNormal><span lang=EN-US>}</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>createBricks();</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>let ball = { x: canvas.width / 2, y:
canvas.height - 30, dx: 2, dy: -2, radius: 10 };</span></p>

<p class=MsoNormal><span lang=EN-US>let paddle = { x: (canvas.width - 75) / 2,
width: 75, height: 10 };</span></p>

<p class=MsoNormal><span lang=EN-US>let rightPressed = false;</span></p>

<p class=MsoNormal><span lang=EN-US>let leftPressed = false;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>// </span><span lang=ZH-TW
style='font-family:"新細明體",serif'>繪製磚塊</span></p>

<p class=MsoNormal><span lang=EN-US>function drawBricks() {</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp; bricks.forEach((row)
=&gt; {</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
row.forEach((brick) =&gt; {</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
if (brick.visible) {</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
ctx.beginPath();</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
ctx.rect(brick.x, brick.y, brickWidth, brickHeight);</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
ctx.fillStyle = '#0095DD';</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
ctx.fill();</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
ctx.closePath();</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
}</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
});</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp; });</span></p>

<p class=MsoNormal><span lang=EN-US>}</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>// </span><span lang=ZH-TW
style='font-family:"新細明體",serif'>碰撞檢測</span></p>

<p class=MsoNormal><span lang=EN-US>function collisionDetection() {</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp; bricks.forEach((row)
=&gt; {</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
row.forEach((brick) =&gt; {</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
if (brick.visible) {</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
if (ball.x &gt; brick.x &amp;&amp; ball.x &lt; brick.x + brickWidth &amp;&amp;
ball.y &gt; brick.y &amp;&amp; ball.y &lt; brick.y + brickHeight) {</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
ball.dy = -ball.dy;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
brick.visible = false;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
score++;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
}</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
}</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
});</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp; });</span></p>

<p class=MsoNormal><span lang=EN-US>}</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>// </span><span lang=ZH-TW
style='font-family:"新細明體",serif'>遊戲結束檢查</span></p>

<p class=MsoNormal><span lang=EN-US>function gameOverCheck() {</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp; if (ball.y + ball.dy
&gt; canvas.height - ball.radius) {</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
gameOver = true;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp; }</span></p>

<p class=MsoNormal><span lang=EN-US>}</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>// </span><span lang=ZH-TW
style='font-family:"新細明體",serif'>重啟遊戲</span></p>

<p class=MsoNormal><span lang=EN-US>function restartGame() {</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp; ball.x = canvas.width /
2;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp; ball.y = canvas.height -
30;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp; ball.dx = 2;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp; ball.dy = -2;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp; gameOver = false;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp; createBricks(); // </span><span
lang=ZH-TW style='font-family:"新細明體",serif'>重建磚塊</span></p>

<p class=MsoNormal><span lang=EN-US>}</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>// </span><span lang=ZH-TW
style='font-family:"新細明體",serif'>主遊戲循環</span></p>

<p class=MsoNormal><span lang=EN-US>function draw() {</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp; ctx.clearRect(0, 0,
canvas.width, canvas.height);</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp; drawBricks();</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp; &nbsp;collisionDetection();</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp; if (!gameOver) {</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
// </span><span lang=ZH-TW style='font-family:"新細明體",serif'>繪製球</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
ctx.beginPath();</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
ctx.fillStyle = '#0095DD';</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
ctx.fill();</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
ctx.closePath();</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
// </span><span lang=ZH-TW style='font-family:"新細明體",serif'>繪製球拍</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
ctx.beginPath();</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
ctx.rect(paddle.x, canvas.height - paddle.height, paddle.width, paddle.height);</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
ctx.fillStyle = '#0095DD';</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
ctx.fill();</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
ctx.closePath();</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
// </span><span lang=ZH-TW style='font-family:"新細明體",serif'>移動球</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
ball.x += ball.dx;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;ball.y
+= ball.dy;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
// </span><span lang=ZH-TW style='font-family:"新細明體",serif'>球與牆壁碰撞</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
if (ball.x + ball.dx &gt; canvas.width - ball.radius || ball.x + ball.dx &lt;
ball.radius) {</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
ball.dx = -ball.dx;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
}</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
if (ball.y + ball.dy &lt; ball.radius) {</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
ball.dy = -ball.dy;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
} else if (ball.y + ball.dy &gt; canvas.height - ball.radius) {</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
if (ball.x &gt; paddle.x &amp;&amp; ball.x &lt; paddle.x + paddle.width) {</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
ball.dy = -ball.dy;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
} else {</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
gameOverCheck();</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
}</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
}</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
// </span><span lang=ZH-TW style='font-family:"新細明體",serif'>球拍移動</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
if (rightPressed &amp;&amp; paddle.x &lt; canvas.width - paddle.width) {</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
paddle.x += 7;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
} else if (leftPressed &amp;&amp; paddle.x &gt; 0) {</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
paddle.x -= 7;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
}</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
requestAnimationFrame(draw);</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp; } else {</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
// </span><span lang=ZH-TW style='font-family:"新細明體",serif'>遊戲結束文字</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
ctx.font = '30px Arial';</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
ctx.fillStyle = '#FFFFFF';</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
ctx.fillText('Game Over', canvas.width / 2 - 70, canvas.height / 2);</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
// </span><span lang=ZH-TW style='font-family:"新細明體",serif'>延遲後重啟遊戲</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
setTimeout(restartGame, 2000);</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp; }</span></p>

<p class=MsoNormal><span lang=EN-US>}</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>// </span><span lang=ZH-TW
style='font-family:"新細明體",serif'>鍵盤事件監聽器</span></p>

<p class=MsoNormal><span lang=EN-US>document.addEventListener('keydown', (e)
=&gt; {</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp; if (e.key === 'Right' ||
e.key === 'ArrowRight') {</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
rightPressed = true;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp; } else if (e.key ===
'Left' || e.key === 'ArrowLeft') {</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
leftPressed = true;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp; }</span></p>

<p class=MsoNormal><span lang=EN-US>});</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>document.addEventListener('keyup', (e)
=&gt; {</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp; if (e.key === 'Right' ||
e.key === 'ArrowRight') {</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
rightPressed = false;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp; } else if (e.key ===
'Left' || e.key === 'ArrowLeft') {</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
leftPressed = false;</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;&nbsp;&nbsp; }</span></p>

<p class=MsoNormal><span lang=EN-US>});</span></p>

<p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

<p class=MsoNormal><span lang=EN-US>// </span><span lang=ZH-TW
style='font-family:"新細明體",serif'>開始遊戲循環</span></p>

<p class=MsoNormal><span lang=EN-US>draw();</span></p>

</div>

</body>

</html>
