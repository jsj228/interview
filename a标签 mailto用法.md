 HTML a标签 mailto用法

 
<a href=mailto:sample@163.com>send email</a>
或者
<form action="mailto:sample@163.com">
    ...
</form>
mailto后跟的是收信人
可使用参数列表   

 to 	 收信人
 subject 	 主题
 cc 	 抄送
 bcc 	 暗送
 body 	 内容
 
 
参数传递方式同页面之间传递值一样，可以使用查询字符串，也可以用form
querystring方式：
<a href="mailto:sample@163.com?subject=test&cc=sample@hotmail.com&body=use mailto sample">send mail</a>
form方式：
<form name='sendmail' action='mailto:sample@163.com'>
    <input name='cc' type='text' value='sample@hotmail.com'>
    <input name='subject' type='text' value='test'>
    <input name='body' type='text' value='use mailto sample'>
</form>
两种方式同样传递所有参数。

草案地址：https://www.w3.org/TR/html5/single-page.html#scroll-to-fragid
