let html = document.querySelector("#html");
let style = document.querySelector("#style");
//通过css选择器找到这个元素
//html.innerHTML = string.substring(0, n);设置html里面的内容
let string = `
/*你好，我叫臧高传
 *接下来我演示一下我的前端功底
 *首先我要准备一个div
 */
#div1 {
   border : 1px solid red;
   width : 200px;
   height : 200px;
}
/* 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先，把 div 变成一个圆
 */
#div1 {
    border-radius : 50%;
    box-shadow : 0 0 3px rgba(0,0,0.5);
    border:none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 */
#div1 {
    
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`

// 中文最好加注释，否则会影响css
let string2 = ''
let n = 0;
let step = () => {
    setTimeout(() => {

        if (string[n] === '\n') {
            //如果这个字符为回车
            string2 = string2 + '<br>';
        } else if (string[n] === ' ') {
            string2 += "&nbsp;";
        } else {
            //如果这个字符不是回车
            string2 = string2 + string[n];
        }
        /*可以用? ；表达式简化 
           string2 += string[n] === '\n' ? '<br>' : string[n]
        */
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        // 这句不要用string2，因为里面有html样式，不能出现在css中
        window.scrollTo(0, 9999);
        html.scrollTo(0, 99999);
        //写一句代码就滚动一下滚动条
        if (n < string.length - 1) {
            n = n + 1
            step()
        } else { }
    }, 10);
}
step()
/*
let step = () => {
    setTimeout(() => {
        n = n+1
        demo.innerHTML = n
        step()
    }, 1000);
}
step()
     等价于
setInterval(() =>{
    n = n+1
    demo.innerHTML =n},1000)
*/

/*
    setTimeout(() =>{
    n = n+1
    demo.innerHTML =n},1000)

注意：setTimeout只会响应一次，所以n只能到2，可以用
setInterval,每隔x秒响应一次
setTimeout(要执行的代码, 等待的毫秒数)
setTimeout(JavaScript 函数, 等待的毫秒数)
*/

/*
setTimeout(() => {
    style.innerHTML = `
    body {

        color:red;
    }`;
}, 3000);
*/