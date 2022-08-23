<template>
    <div>
        <div class="shouhang">
            <div style="float: left;" >
                <a href="#" >首页</a>
            </div>
            <div align="center" style="text-indent: -2em;">发布商品</div>
        </div>
        <br>
        <form action="">
            <span class="tishi">标题：</span>
            <input type="text">
            <br>
            <br>
            <span class="tishi">分类：</span>
            <select >
                <option >分类1</option>
                <option >分类2</option>
                <option >分类3</option>
                <option >分类4</option>
                <option >分类5</option>
                <option >分类6</option>
            </select>
            <br><br>
            <span class="tishi">价格：</span>
            <input type="text" style="width: 100px;">
            <br><br>
            <span class="tishi">联系方式：</span>
            <input type="text">
            <br><br>
            <span class="tishi"> 描述：</span>
            <br><br>
            <textarea name="" id="" cols="55" rows="10" class="nonesize"></textarea>
            <br><br>
            <span class="tishi"> 上传图片：</span>
            <van-uploader :after-read="afterRead" />
            <br><br>
            <center><button class="button" type="submit">发布</button></center>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    /* 表单外边距 */
    form{
        margin: 27px;
    }
    /* 输入框 */
    input[type="text"]{
        height: 25px;
        border: 1.5px solid rgba(63, 79, 94, 0.525);
        padding: 0 6px;
        width: 185px;
        BORDER-LEFT-STYLE:none;
        BORDER-RIGHT-STYLE: none;
        BORDER-TOP-STYLE: none;
        font-size: larger;
    }
    /* 选择框 */
    select {
    width: 100px;
    padding: 4px 30px 4px 4px;
    font-size: 14px;
    font-weight: 600;
    border: 1.5px solid rgba(63, 79, 94, 0.525);
    height: 30px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url(https://tinyurl.com/22s26jw9) 100% / 15% no-repeat white;
    }
    /* 超链接 */
    a{
        text-decoration: none;
        color: black;
    }
    /* 所有提示 */
    .tishi{
        font-weight: 550;
        color: rgba(63, 79, 94, 0.525);
        font-size: larger;
    }
    /* 发布按钮 */
    .button{
    width: 390px;
    height: 81px;
    background:linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%);
    border: none;
    border-radius: 10px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 34px;
    color: #fff;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
    7px 7px 20px 0px rgba(0, 0, 0, .1),
    4px 4px 5px 0px rgba(0, 0, 0, .1);
    outline: none;
    position: relative;
    z-index: 0;
    }
    /* 首行 */
    .shouhang{
    line-height: 1.6;
    background: #89d8d3;
    width: 495px;
    height: 48px;
    font-weight: 500;
    font-size: 27px;
    color: white;
    }
    .biaoti{
        font-size: 27px;
        color: white;
        font-weight: 600;
        margin: 0 auto;
    }
    .nonesize{
        resize:none;
    }
</style>