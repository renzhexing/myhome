/**
 * Created by Administrator on 2017/4/14.
 */

//播放列表
$(function(){
    "use strict";
    $('.function a:nth-child(4)').click(function(){
        $('.play-list').toggle();
        $('.play-list .next .close').click(function(){
            $('.play-list').css('display','none');
        })
    });
});
//热门歌手
$(function(){
    "use strict";
    let last;
    $('.my-find ul li').hover(
        function(){
            $('.shadow').eq($(this).index()).css('height','100%');
            $('.introduce').eq($(this).index()).css('height','100%');
            last=$('.introduce').eq($(this).index()).html();
            let arr=[`
                <p style="font-size:16px;margin-bottom:10px;">热门单曲<span style="font-size:12px;float:right;">查看全部</span></p>
                <a href="javascript:;">1.王子公主</a>
                <a href="javascript:;">2.暧昧</a>
                <a href="javascript:;">3.演员</a>
                <a href="javascript:;">4.动物世界</a>
                <a href="javascript:;">5.你还要我怎样</a>
                <a href="javascript:;">6.绅士</a>
                <a href="javascript:;">7.丑八怪</a>
                <a href="javascript:;">8.刚刚好</a>   
                <div class="all"><a href="javascript:;">播放全部</a></div>
    `,`
                <p style="font-size:16px;margin-bottom:10px;">热门单曲<span style="font-size:12px;float:right;">查看全部</span></p>
                <a href="javascript:;">1.我过得很好</a>
                <a href="javascript:;">2.走着走着就散了</a>
                <a href="javascript:;">3.以后的以后</a>
                <a href="javascript:;">4.从心出发</a>
                <a href="javascript:;">5.失恋副作用</a>
                <a href="javascript:;">6.天眼</a>
                <a href="javascript:;">7.暖暖的依靠</a>
                <a href="javascript:;">8.再见只是陌生人</a>   
                 <div class="all"><a href="javascript:;">播放全部</a></div>
    `,
                `
                <p style="font-size:16px;margin-bottom:10px;">热门单曲<span style="font-size:12px;float:right;">查看全部</span></p>
                <a href="javascript:;">1.Young And Beautiful</a>
                <a href="javascript:;">2.West Coast</a>
                <a href="javascript:;">3.Salvatore</a>
                <a href="javascript:;">4.Born To Die</a>
                <a href="javascript:;">5.Summertime Sadness</a>
                <a href="javascript:;">6.Cola</a>
                <a href="javascript:;">7.Summertime Sadness</a>
                <a href="javascript:;">8.Love</a>    
                <div class="all"><a href="javascript:;">播放全部</a></div>
    `,
                `
                <p style="font-size:16px;margin-bottom:10px;">热门单曲<span style="font-size:12px;float:right;">查看全部</span></p>
                <a href="javascript:;">1.告白气球</a>
                <a href="javascript:;">2.无与伦比</a>
                <a href="javascript:;">3.青花瓷</a>
                <a href="javascript:;">4.稻香</a>
                <a href="javascript:;">5.晴天</a>
                <a href="javascript:;">6.七里香</a>
                <a href="javascript:;">7.夜曲</a>
                <a href="javascript:;">8.龙卷风</a>   
                 <div class="all"><a href="javascript:;">播放全部</a></div>
    `,
                `
                <p style="font-size:16px;margin-bottom:10px;">热门单曲<span style="font-size:12px;float:right;">查看全部</span></p>
                <a href="javascript:;">1.骄傲的少年</a>
                <a href="javascript:;">2.树读</a>
                <a href="javascript:;">3.摩天轮的思念</a>
                <a href="javascript:;">4.小棉袄</a>
                <a href="javascript:;">5.明天你好</a>
                <a href="javascript:;">6.继续，给十五岁的自己</a>
                <a href="javascript:;">7.告白气球</a>
                <a href="javascript:;">8.红玫瑰</a>  
                <div class="all"><a href="javascript:;">播放全部</a></div>
    `];
        $('.introduce').eq($(this).index()).html(arr[$(this).index()]);
    },function(){
        $('.shadow').eq($(this).index()).css('height','86px');
        $('.introduce').eq($(this).index()).css('height','86px');
        $('.introduce').eq($(this).index()).html(last);
    });
});
//精彩推荐
$(function(){
    "use strict";
    let now=0,next=0;
    let imgs=$('.recommend ul li');
    let direction='left';
});

//导航点击切换
$(function(){
    "use strict";
   $('.nav-list a').click(function(){
       $('.nav-list a').removeClass('active').eq($(this).index()).addClass('active');
       if($(this).index()==0){
           $('.my-music').css('display','none');
           $('.my-find').css('display','none');
           $('.rank').css('display','none');
       }else if($(this).index()==1){
           $('.my-music').css('display','block');
           $('.my-find').css('display','none');
           $('.rank').css('display','none');
       }else if($(this).index()==2){
           $('.my-music').css('display','none');
           $('.my-find').css('display','block');
           $('.rank').css('display','none');
       }else if($(this).index()==3){
           $('.my-music').css('display','none');
           $('.my-find').css('display','none');
           $('.rank').css('display','block');
       }
   })
});
//发现音乐
$(function(){
    $('#dowebok').fullpage();
});
//tuijian
$(document).ready(function(){
    setInterval(function(){
        $('.swiper-slide').removeClass('first');
        $('.swiper-slide-active').addClass('first');
    },400);
});
//我的音乐
$(function(){
    "use strict";
    let lis=$('.my-music .mm-list li');
    let contents=$('.my-music .mm-content > div');
    console.log(contents);
    lis.each(function(index,value){
        $(value).click(function(){
            lis.removeClass('active');
            contents.removeClass('zindex');
            $(this).addClass('active');
            contents.eq(index).addClass('zindex');
        })
    })
});
/*************************************************************************/
$(function(){
    "use strict";
    let musics=[
        {id:'$1',name:'遇见你',who:'牛奶咖啡',src:'music/牛奶咖啡 - 遇见你.mp3',zj:'遇见你',bigimg:'img/big-1.jpg',img:'img/img-1.jpg',geci:[
            {time:"0:00",value1:" 遇见你 (《因为遇见你》电视剧插曲) - 牛奶咖啡"},
            {time:"0:03",value1:" 词：小乔"},
            {time:"0:04",value1:" 曲：格非"},
            {time:"0:04",value1:" 监制：杨剑"},
            {time:"0:19",value1:" 若不是 遇见你"},
            {time:"0:25",value1:" 现在的我会在哪里"},
            {time:"0:29",value1:" 忽然间飘来了细雨"},
            {time:"0:34",value1:" 淋湿了我的 思绪"},
            {time:"0:38",value1:" 若不是 遇见了你"},
            {time:"0:43",value1:" 故事会怎样 继续"},
            {time:"0:47",value1:" 午夜最后一班列车"},
            {time:"0:52",value1:" 为什么不小心错过"},
            {time:"0:56",value1:" 也许是命中注定"},
            {time:"1:01",value1:" 却总会 措手不及"},
            {time:"1:06",value1:" 像一颗流星 在一瞬间"},
            {time:"1:12",value1:" 深深 划过漆黑的夜"},
            {time:"1:15",value1:" 就这样遇见了你"},
            {time:"1:19",value1:" 多么像一个奇迹"},
            {time:"1:24",value1:" 你静静站在那里"},
            {time:"1:28",value1:" 人群中如此美丽"},
            {time:"1:33",value1:" 就这样遇见了你"},
            {time:"1:37",value1:" 似曾相识的梦境"},
            {time:"1:42",value1:" 不愿把彼此唤醒"},
            {time:"1:46",value1:" 只想要慢慢靠近"},
            {time:"1:51",value1:" 慢慢靠近"},
            {time:"2:09",value1:" 若不是 遇见了你"},
            {time:"2:13",value1:" 现在的我会在哪里"},
            {time:"2:18",value1:" 忽然间飘来了细雨"},
            {time:"2:22",value1:" 淋湿了我的 思绪"},
            {time:"2:27",value1:" 若不是 遇见了你"},
            {time:"2:32",value1:" 故事会怎样 继续"},
            {time:"2:36",value1:" 午夜最后一班列车"},
            {time:"2:41",value1:" 为什么不小心错过"},
            {time:"2:45",value1:" 也许是命中注定"},
            {time:"2:50",value1:" 却总会 措手不及"},
            {time:"2:55",value1:" 像一颗流星 在一瞬间"},
            {time:"3:00",value1:" 深深 划过漆黑的夜"},
            {time:"3:03",value1:" 就这样遇见了你"},
            {time:"3:08",value1:" 多么像一个奇迹"},
            {time:"3:12",value1:" 你静静站在那里"},
            {time:"3:17",value1:" 人群中如此美丽"},
            {time:"3:21",value1:" 就这样遇见了你"},
            {time:"3:26",value1:" 似曾相识的梦境"},
            {time:"3:30",value1:" 不愿把彼此唤醒"},
            {time:"3:35",value1:" 只想要慢慢靠近"},
            {time:"3:39",value1:" 就这样遇见了你"},
            {time:"3:44",value1:" 多么像一个奇迹"},
            {time:"3:49",value1:" 你静静站在那里"},
            {time:"3:53",value1:" 人群中如此美丽"},
            {time:"3:58",value1:" 就这样遇见了你"},
            {time:"4:02",value1:" 似曾相识的梦境"},
            {time:"4:07",value1:" 不愿把彼此唤醒"},
            {time:"4:11",value1:" 只想要慢慢靠近"},
            {time:"4:16",value1:" 慢慢靠近"}],time:'4:49'},
        {id:'$2',name:'演员',who:'薛之谦 ',src:'music/薛之谦 - 演员.mp3',zj:'绅士',bigimg:'img/big-2.jpg',img:'img/img-2.jpg',geci:[
            {time:"0:00",value1:"演员"},
            {time:"0:01",value1:"作词：薛之谦"},
            {time:"0:02",value1:"作曲：薛之谦"},
            {time:"0:03",value1:"演唱：薛之谦"},
            {time:"0:21",value1:"简单点说话的方式简单点"},
            {time:"0:30",value1:"递进的情绪请省略"},
            {time:"0:33",value1:"你又不是个演员"},
            {time:"0:36",value1:"别设计那些情节"},
            {time:"0:41",value1:"没意见我只想看看你怎么圆"},
            {time:"0:51",value1:"你难过的太表面 像没天赋的演员"},
            {time:"0:57",value1:"观众一眼能看见"},
            {time:"1:02",value1:"该配合你演出的我演视而不见"},
            {time:"1:07",value1:"在逼一个最爱你的人即兴表演"},
            {time:"1:12",value1:"什么时候我们开始收起了底线"},
            {time:"1:18",value1:"顺应时代的改变看那些拙劣的表演"},
            {time:"1:23",value1:"可你曾经那么爱我干嘛演出细节"},
            {time:"1:28",value1:"我该变成什么样子才能延缓厌倦"},
            {time:"1:33",value1:"原来当爱放下防备后的这些那些"},
            {time:"1:39",value1:"才是考验"},
            {time:"1:44",value1:"没意见你想怎样我都随便"},
            {time:"1:54",value1:"你演技也有限"},
            {time:"1:57",value1:"又不用说感言"},
            {time:"2:00",value1:"分开就平淡些"},
            {time:"2:05",value1:"该配合你演出的我演视而不见"},
            {time:"2:10",value1:"别逼一个最爱你的人即兴表演"},
            {time:"2:15",value1:"什么时候我们开始没有了底线"},
            {time:"2:21",value1:"顺着别人的谎言被动就不显得可怜"},
            {time:"2:26",value1:"可你曾经那么爱我干嘛演出细节"},
            {time:"2:31",value1:"我该变成什么样子才能配合出演"},
            {time:"2:36",value1:"原来当爱放下防备后的这些那些"},
            {time:"2:41",value1:"都有个期限"},
            {time:"2:47",value1:"其实台下的观众就我一个"},
            {time:"2:53",value1:"其实我也看出你有点不舍"},
            {time:"2:58",value1:"场景也习惯我们来回拉扯"},
            {time:"3:02",value1:"还计较着什么"},
            {time:"3:08",value1:"其实说分不开的也不见得"},
            {time:"3:14",value1:"其实感情最怕的就是拖着"},
            {time:"3:19",value1:"越演到重场戏越哭不出了"},
            {time:"3:24",value1:"是否还值得"},
            {time:"3:29",value1:"该配合你演出的我尽力在表演"},
            {time:"3:34",value1:"像情感节目里的嘉宾任人挑选"},
            {time:"3:39",value1:"如果还能看出我有爱你的那面"},
            {time:"3:44",value1:"请剪掉那些情节让我看上去体面"},
            {time:"3:50",value1:"可你曾经那么爱我干嘛演出细节"},
            {time:"3:55",value1:"不在意的样子是我最后的表演"},
            {time:"4:01",value1:"是因为爱你我才选择表演 这种成全"}
        ],time:'4:21'},
        {id:'$3',name:'多幸运',who:'韩安旭',src:'music/韩安旭 - 多幸运.mp3',zj:'多幸运',bigimg:'img/big-3.jpg',img:'img/img-3.jpg',geci:[
            {time:"0:00",value1:"多幸运"},
            {time:"0:03",value1:"词:刘家泽"},
            {time:"0:07",value1:"曲:胜屿"},
            {time:"0:10",value1:"演唱：韩安旭"},
            {time:"0:19",value1:"在亿万人海相遇"},
            {time:"0:21",value1:"有同样默契"},
            {time:"0:24",value1:"是多么不容易"},
            {time:"0:27",value1:"你懂得我的固执"},
            {time:"0:30",value1:"我懂你脾气"},
            {time:"0:32",value1:"两颗心在靠近"},
            {time:"0:35",value1:"等不及解释我的心情"},
            {time:"0:39",value1:"怕错过爱上你的时机"},
            {time:"0:43",value1:"浪漫已经 准备就绪"},
            {time:"0:48",value1:"全新的旅行"},
            {time:"0:52",value1:"多幸运"},
            {time:"0:54",value1:"在最美的年纪"},
            {time:"0:57",value1:"遇见你"},
            {time:"0:59",value1:"没有遗憾和可惜"},
            {time:"1:01",value1:"抱紧你"},
            {time:"1:03",value1:"用尽全部力气"},
            {time:"1:05",value1:"不让幸福逃离"},
            {time:"1:10",value1:"多幸运"},
            {time:"1:12",value1:"爱你这件事情"},
            {time:"1:14",value1:"成为我"},
            {time:"1:16",value1:"今生最对的决定"},
            {time:"1:18",value1:"我相信"},
            {time:"1:20",value1:"你就是那唯一"},
            {time:"1:23",value1:"愿陪你到底"},
            {time:"1:28",value1:"多幸运 遇见了你"},
            {time:"1:31",value1:"多幸运 爱上了你"},
            {time:"1:33",value1:"多幸运 能在一起"},
            {time:"1:35",value1:"多幸运 遇见了你"},
            {time:"1:40",value1:"多幸运 爱上了你"},
            {time:"1:42",value1:"多幸运 能在一起"},
            {time:"1:46",value1:"在亿万人海相遇"},
            {time:"1:48",value1:"有同样默契"},
            {time:"1:51",value1:"是多么不容易"},
            {time:"1:53",value1:"你懂得我的固执"},
            {time:"1:57",value1:"我懂你脾气"},
            {time:"1:59",value1:"两颗心在靠近"},
            {time:"2:02",value1:"等不及解释我的心情"},
            {time:"2:06",value1:"怕错过爱上你的时机"},
            {time:"2:11",value1:"浪漫已经 准备就绪"},
            {time:"2:15",value1:"全新的旅行"},
            {time:"2:20",value1:"多幸运"},
            {time:"2:21",value1:"在最美的年纪"},
            {time:"2:24",value1:"遇见你"},
            {time:"2:26",value1:"没有遗憾和可惜"},
            {time:"2:28",value1:"抱紧你"},
            {time:"2:30",value1:"用尽全部力气"},
            {time:"2:32",value1:"不让幸福逃离"},
            {time:"2:37",value1:"多幸运"},
            {time:"2:39",value1:"爱你这件事情"},
            {time:"2:41",value1:"成为我"},
            {time:"2:43",value1:"今生最对的决定"},
            {time:"2:46",value1:"我相信"},
            {time:"2:47",value1:"你就是那唯一"},
            {time:"2:50",value1:"愿陪你到底"},
            {time:"2:55",value1:"多幸运 遇见了你"},
            {time:"2:58",value1:"多幸运 爱上了你"},
            {time:"3:00",value1:"多幸运 能在一起"},
            {time:"3:02",value1:"多幸运 遇见了你"},
            {time:"3:06",value1:"多幸运 爱上了你"},
            {time:"3:09",value1:"多幸运 能在一起"},
            {time:"3:13",value1:"多幸运"},
            {time:"3:14",value1:"在最美的年纪"},
            {time:"3:16",value1:"遇见你"},
            {time:"3:18",value1:"没有遗憾和可惜"},
            {time:"3:20",value1:"抱紧你"},
            {time:"3:22",value1:"用尽全部力气"},
            {time:"3:24",value1:"不让幸福逃离"},
            {time:"3:28",value1:"多幸运"},
            {time:"3:31",value1:"爱你这件事情"},
            {time:"3:33",value1:"成为我"},
            {time:"3:35",value1:"今生最对的决定"},
            {time:"3:38",value1:"我相信"},
            {time:"3:40",value1:"你就是那唯一"},
            {time:"3:42",value1:"愿陪你到底"},
    ],time:'4:09'},
        {id:'$4',name:'岁月神偷',who:'金玟岐',src:'music/金玟岐 - 岁月神偷.mp3',zj:'金玟岐作品集',bigimg:'img/big-4.jpg',img:'img/img-4.jpg',geci:[
            {time:"0:01",value1:"岁月神偷"},
            {time:"0:03",value1:"演唱：金玟岐"},
            {time:"0:19",value1:"能够握紧的就别放了"},
            {time:"0:23",value1:"能够拥抱的就别拉扯"},
            {time:"0:27",value1:"时间着急的 冲刷着"},
            {time:"0:32",value1:"剩下了什么"},
            {time:"0:35",value1:"原谅走过的那些曲折"},
            {time:"0:39",value1:"原来留下的都是真的"},
            {time:"0:43",value1:"纵然似梦啊 半醒着"},
            {time:"0:47",value1:"笑着哭着都快活"},
            {time:"0:51",value1:"谁让"},
            {time:"0:55",value1:"时间是让人猝不及防的东西"},
            {time:"0:59",value1:"晴时有风阴有时雨"},
            {time:"1:03",value1:"争不过朝夕 又念着往昔"},
            {time:"1:07",value1:"偷走了青丝却留住一个你"},
            {time:"1:11",value1:"岁月是一场有去无回的旅行"},
            {time:"1:15",value1:"好的坏的都是风景"},
            {time:"1:19",value1:"别怪我贪心 只是不愿醒"},
            {time:"1:21",value1:"因为你只为你愿和我一起"},
            {time:"1:27",value1:"看云淡风轻"},
            {time:"1:32",value1:"&#9835"},
            {time:"1:42",value1:"时间是让人猝不及防的东西"},
            {time:"1:47",value1:"晴时有风阴有时雨"},
            {time:"1:51",value1:"争不过朝夕 又念着往昔"},
            {time:"1:54",value1:"偷走了青丝却留住一个你"},
            {time:"1:59",value1:"岁月是一场有去无回的旅行"},
            {time:"2:03",value1:"好的坏的都是风景"},
            {time:"2:07",value1:"别怪我贪心 只是不愿醒"},
            {time:"2:10",value1:"因为你只为你愿和我一起"},
            {time:"2:16",value1:"看云淡风轻"},
            {time:"2:20",value1:"&#9835"}
        ],time:'2:42'},
        {id:'$5',name:'我们的明天',who:'鹿晗',src:'music/鹿晗 - 我们的明天.mp3',zj:'我们的明天',bigimg:'img/big-5.jpg',img:'img/img-5.jpg',geci:[
            {time:"0:01",value1:"我们的明天 - 鹿晗"},
            {time:"0:03",value1:"词：于京乐团"},
            {time:"0:04",value1:"曲：于京乐团"},
            {time:"0:13",value1:"一个人走到终点"},
            {time:"0:20",value1:"不小心回到起点"},
            {time:"0:26",value1:"一个新的世界"},
            {time:"0:29",value1:"此刻我才发现"},
            {time:"0:33",value1:"时间没有绝对"},
            {time:"0:40",value1:"直到有另一个人"},
            {time:"0:46",value1:"能体会我的感觉"},
            {time:"0:52",value1:"不用说不用问"},
            {time:"0:56",value1:"就明白就了解"},
            {time:"0:59",value1:"每一刻都像永远"},
            {time:"1:06",value1:"我看着"},
            {time:"1:07",value1:"没剩多少时间 能许愿"},
            {time:"1:12",value1:"好想多一天 我们的明天"},
            {time:"1:19",value1:"我问着"},
            {time:"1:21",value1:"还有多少时间 在眼前"},
            {time:"1:25",value1:"以为多一天"},
            {time:"1:29",value1:"能实现我们的预言"},
            {time:"1:35",value1:"&#9835"},
            {time:"1:45",value1:"直到有另一个人"},
            {time:"1:52",value1:"能体会我的感觉"},
            {time:"1:58",value1:"不用说不用问"},
            {time:"2:01",value1:"就明白就了解"},
            {time:"2:05",value1:"每一刻都像永远"},
            {time:"2:12",value1:"我看着"},
            {time:"2:13",value1:"没剩多少时间 能许愿"},
            {time:"2:18",value1:"好想多一天"},
            {time:"2:22",value1:"我们的明天"},
            {time:"2:25",value1:"我问着"},
            {time:"2:26",value1:"还有多少时间 在眼前"},
            {time:"2:31",value1:"以为多一天"},
            {time:"2:35",value1:"能实现我们的预言"},
            {time:"2:40",value1:"其实有个传说"},
            {time:"2:43",value1:"能将时空倒流"},
            {time:"2:46",value1:"因为有一个梦告诉我"},
            {time:"2:51",value1:"爱从不曾保留"},
            {time:"2:53",value1:"才勇敢了我"},
            {time:"2:58",value1:"我看着"},
            {time:"2:59",value1:"没剩多少时间 能许愿"},
            {time:"3:04",value1:"好想多一天 我们的明天"},
            {time:"3:11",value1:"我问着"},
            {time:"3:12",value1:"还有多少时间 在眼前"},
            {time:"3:17",value1:"以为多一天"},
            {time:"3:21",value1:"能实现我们的预言"},
            {time:"3:29",value1:"累积成永恒的纪念"}
        ],time:'3:52'},
        {id:'$6',name:'刚刚好',who:'薛之谦 ',src:'music/薛之谦 - 刚刚好.mp3',zj:'初学者',bigimg:'img/big-6.jpg',img:'img/img-6.jpg',geci:[
            {time:"0:01",value1:"刚刚好"},
            {time:"0:03",value1:"作词：薛之谦"},
            {time:"0:05",value1:"作曲：薛之谦"},
            {time:"0:06",value1:"编曲：郑伟"},
            {time:"0:08",value1:"演唱：薛之谦"},
            {time:"0:08",value1:"制作人：薛之谦"},
            {time:"0:38",value1:"如果有人在灯塔"},
            {time:"0:40",value1:"拨弄她的头发"},
            {time:"0:42",value1:"思念刻在墙和瓦"},
            {time:"0:46",value1:"如果感情会挣扎"},
            {time:"0:49",value1:"没有说的儒雅"},
            {time:"0:51",value1:"把挽回的手放下"},
            {time:"0:55",value1:"镜子里的人说假话"},
            {time:"0:59",value1:"违心的样子你决定了吗"},
            {time:"1:04",value1:"装聋或者作哑 要不我先说话"},
            {time:"1:15",value1:"我们的爱情 到这刚刚好"},
            {time:"1:20",value1:"剩不多也不少 还能忘掉"},
            {time:"1:25",value1:"我应该可以 把自己照顾好"},
            {time:"1:33",value1:"我们的距离 到这刚刚好"},
            {time:"1:37",value1:"不够我们拥抱 就挽回不了"},
            {time:"1:42",value1:"用力爱过的人 不该计较"},
            {time:"1:58",value1:"是否要逼人弃了甲"},
            {time:"2:02",value1:"亮出一条伤疤"},
            {time:"2:04",value1:"不堪的根源在哪"},
            {time:"2:08",value1:"可是感情会挣扎"},
            {time:"2:10",value1:"没有别的办法"},
            {time:"2:12",value1:"它劝你不如退下"},
            {time:"2:16",value1:"如果分手太复杂"},
            {time:"2:20",value1:"流浪的歌手会放下吉他"},
            {time:"2:25",value1:"故事要美必须藏着真话"},
            {time:"2:32",value1:"我们的爱情 到这刚刚好"},
            {time:"2:36",value1:"剩不多也不少 还能忘掉"},
            {time:"2:41",value1:"我应该可以 把自己照顾好"},
            {time:"2:49",value1:"我们的距离 到这刚刚好"},
            {time:"2:53",value1:"不够我们拥抱 就挽回不了"},
            {time:"2:58",value1:"用力爱过的人 不该计较"},
            {time:"3:06",value1:"我们的爱情到这刚刚好"},
            {time:"3:10",value1:"再不争也不吵 不必再煎熬"},
            {time:"3:15",value1:"你可以不用 记得我的好"},
            {time:"3:23",value1:"我们的流浪到这刚刚好"},
            {time:"3:27",value1:"趁我们还没到 天涯海角"},
            {time:"3:32",value1:"我也不是非要去那座城堡"},
            {time:"3:39",value1:"天空有些暗了暗的刚刚好"},
            {time:"3:44",value1:"我难过的样子就没人看到"},
            {time:"3:49",value1:"你别太在意我身上的记号"}
        ],time:'4:10'},
        {id:'$7',name:'春暖花开',who:'那英 ',src:'music/那英 - 春暖花开.mp3',zj:'2013蛇年春晚',bigimg:'img/big-7.jpg',img:'img/img-7.jpg',geci:[
            {time:"0:00",value1:"春暖花开 "},
            {time:"0:02",value1:"词：梁芒 "},
            {time:"0:04",value1:"曲：洪兵 "},
            {time:"0:05",value1:"唱：那英 "},
            {time:"0:21",value1:"如果你渴求一滴水 "},
            {time:"0:25",value1:"我愿意倾其一片海 "},
            {time:"0:29",value1:"如果你要摘一片红叶 "},
            {time:"0:34",value1:"我给你整个枫林和云彩 "},
            {time:"0:41",value1:"如果你要一个微笑 "},
            {time:"0:46",value1:"我敞开火热的胸怀 "},
            {time:"0:50",value1:"如果你需要有人同行 "},
            {time:"0:54",value1:"我陪你走到未来 "},
            {time:"0:59",value1:"春暖花开 这是我的世界 "},
            {time:"1:08",value1:"每次怒放 都是心中喷发的爱 "},
            {time:"1:17",value1:"风儿吹来 是我和天空的对白 "},
            {time:"1:25",value1:"其实幸福 一直与我们 同在 "},
            {time:"1:42",value1:"如果你要一个微笑 "},
            {time:"1:45",value1:"我敞开火热的胸怀 "},
            {time:"1:50",value1:"如果你需要有人同行 "},
            {time:"1:54",value1:"我陪你走到未来 "},
            {time:"1:58",value1:"春暖花开 这是我的世界 "},
            {time:"2:05",value1:"每次怒放 都是心中喷发的爱 "},
            {time:"2:14",value1:"风儿吹来 是我和天空的对白 "},
            {time:"2:23",value1:"其实幸福 一直与我们 同在  "},
            {time:"2:37",value1:"春暖花开 这是我的世界 "},
            {time:"2:44",value1:"生命如水 有时平静 有时澎湃 "},
            {time:"2:53",value1:"穿越阴霾 阳光洒满你窗台 "},
            {time:"3:01",value1:"其实幸福 一直与我们 同在 "},
            {time:"3:15",value1:"我的世界 春暖花开"}
        ],time:'3:36'},
        {id:'$8',name:'你还要我怎样',who:'薛之谦',src:'music/薛之谦 - 你还要我怎样.mp3',zj:'意外',bigimg:'img/big-8.jpg',img:'img/img-8.jpg',geci:[
            {time:"0:00",value1:"你还要我怎样"},
            {time:"0:06",value1:"词：薛之谦 曲：薛之谦"},
            {time:"0:09",value1:"演唱：薛之谦"},
            {time:"0:26",value1:"你停在了这条我们熟悉的街"},
            {time:"0:36",value1:"把你准备好的台词全念一遍"},
            {time:"0:44",value1:"我还在逞强 说着谎"},
            {time:"0:48",value1:"也没能力遮挡 你去的方向"},
            {time:"0:53",value1:"至少分开的时候我落落大方"},
            {time:"1:05",value1:"我后来都会选择绕过那条街"},
            {time:"1:14",value1:"又多希望在另一条街能遇见"},
            {time:"1:23",value1:"思念在逞强 不肯忘"},
            {time:"1:28",value1:"怪我没能力跟随 你去的方向"},
            {time:"1:34",value1:"若越爱越被动 越要落落大方"},
            {time:"1:43",value1:"你还要我怎样 要怎样"},
            {time:"1:48",value1:"你突然来的短信就够我悲伤"},
            {time:"1:53",value1:"我没能力遗忘 你不用提醒我"},
            {time:"1:58",value1:"哪怕结局就这样"},
            {time:"2:03",value1:"我还能怎样 能怎样"},
            {time:"2:08",value1:"最后还不是落得情人的立场"},
            {time:"2:13",value1:"你从来不会想 我何必这样"},
            {time:"2:45",value1:"我慢慢的回到自己的生活圈"},
            {time:"2:53",value1:"也开始可以接触新的人选"},
            {time:"3:03",value1:"爱你到最后 不痛不痒"},
            {time:"3:08",value1:"留言在计较 谁爱过一场"},
            {time:"3:13",value1:"我剩下一张 没后悔的模样"},
            {time:"3:22",value1:"你还要我怎样 要怎样"},
            {time:"3:28",value1:"你千万不要在我婚礼的现场"},
            {time:"3:33",value1:"我听完你爱的歌 就上了车"},
            {time:"3:39",value1:"爱过你很值得"},
            {time:"3:43",value1:"我不要你怎样 没怎样"},
            {time:"3:48",value1:"我陪你走的路你不能忘"},
            {time:"3:53",value1:"因为那是我 最快乐的时光"},
            {time:"4:05",value1:"后来我的生活还算理想"},
            {time:"4:16",value1:"没为你落到孤单的下场"},
            {time:"4:24",value1:"有一天晚上 梦一场"},
            {time:"4:28",value1:"你白发苍苍 说带我流浪"},
            {time:"4:34",value1:"我还是没犹豫 就随你去天堂"},
            {time:"4:44",value1:"不管能怎样 我能陪你到天亮"},
        ],time:'5:10'}
    ];
    let musiclasts=[];
    //添加列表，存储所有的id
    let list=$('.next ul').get(0);
    musics.forEach((obj)=>{
        let li=document.createElement('li');
        li.id=obj.id;
        li.innerHTML=` 
                    <span><a href="javascript:;" class="icon"></a></span>
                    <span><a href="javascript:;">${obj.name}</a></span>
                    <span><a href="javascript:;">${obj.who}</a></span>
                    <span><a href="javascript:;">${obj.zj}</a></span>
                    <span class="del"><a href="javascript:;" class="icon">&#xe604;</a></span>`;
        $(li).appendTo($(list));
    });
    $('.next ul li').eq(1).addClass('active');
    $('.next ul .active span').eq(0).children().eq(0).html('&#xe61c');
//点击播放按钮
    let audio=$('audio').get(0);
    $('.c-play').on('click',function(){
        if(audio.paused){
            audio.play();
            $(this).html('&#xe6ad;');
        }else{
            audio.pause();
            $(this).html('&#xe7bf;');
        }
    });
//播放状态改变时
    //时间格式转换函数
    function getTime(time) {
        // 获取当前音乐时间的总长度
        let m = Math.trunc(time/ 60);
        let s = parseInt(time) % 60 >= 10 ? parseInt(time) % 60 : '0' + parseInt(time) % 60;
        return m + ':' + s;
    }
    //歌曲缓存
    audio.oncanplay=function(){
        $('.huanchong').css('width','100%');
    };
    //音量
    let voice=$('.function a:first-child');
    let voicevolue=1;
    let voicejindu=$('.function .voice-height');
    document.onclick=function(e){
        if(e.target==voice.get(0)){
            if(voicejindu.attr('style')){
                voicejindu.removeAttr('style');
            }else{
                voicejindu.css('display','block');
            }
        }else if(e.target==$('.function .voice-size').get(0)){
            return;

        }else{
            voicejindu.removeAttr('style');
        }
    };
    /*$('body').click(voice,function(e){



        if(audio.volume){
            voicevolue=audio.volume;
            audio.volume=0;
            $(this).html('&#xe609;');
        }else{
            audio.volume=voicevolue;
            $(this).html('&#xe776;');
        }
    })*/
    //音量大小
    let size=$('.function .voice-jindu');
    voicejindu.click(function(e){
        size.css('height',100-e.offsetY/voicejindu.get(0).offsetHeight*100+'%');
        audio.volume=1-e.offsetY/voicejindu.get(0).offsetHeight;
    });
    size.click(function(e){
        size.css('height',100-e.offsetY/voicejindu.get(0).offsetHeight*100+'%');
        audio.volume=1-e.offsetY/voicejindu.get(0).offsetHeight;
    });
    //点击列表切换信息
    let num=0;
    let musiclist=$(list).children().not('.list-nav');
    let background=$('.body .music-back');
    let img=$('.play .small-img');
    let name=$('.play .schedule .music-name');
    let myimg=$('.my-music .now-song .song-img');
    musiclist.each(function(index,val){
        $(val).on('dblclick',function(){
            $('.next ul .active span').eq(0).children().get(0).innerHTML='';
            musiclist.eq(num).removeClass('active');
            mylists.eq(num).removeClass('active');
            $(this).addClass('active');
            mylists.eq(index).addClass('active');
            $('.next ul .active span').eq(0).children().eq(0).html('&#xe61c');
            num=index;
            //切换信息
            background.css({background:`url("${musics[num].bigimg}")no-repeat`},);
            img.css('backgroundImage',`url("${musics[num].img}")`);
            myimg.css('backgroundImage',`url("${musics[num].img}")`);
            name.html(`${musics[num].who}-${musics[num].name}`);
            audio.src=`${musics[num].src}`;
            audio.play();
            $('.c-play').html('&#xe6ad;');
            //歌词
            $('.body .music-word').get(0).innerHTML="";
            if(musics[num].geci){
                musics[num].geci.forEach((val,index)=>{
                    $(`<li id=L${index}>${val.value1}</li>`).appendTo(musicContent);
                });
            }
            $('.my-music .song-word').get(0).innerHTML="";
            if(musics[num].geci){
                musics[num].geci.forEach((val,index)=>{
                    $(`<li id=M${index}>${val.value1}</li>`).appendTo($('.song-word'));
                });
            }
        })
    });
    // 点击上一首
    let previous=$('.foot .button .c-last');
    let next=$('.foot .button .c-next');
    previous.click(function(){
        $('.next ul .active span').eq(0).children().get(0).innerHTML='';
        musiclist.eq(num).removeClass('active');
        mylists.eq(num).removeClass('active');
        num--;
        if(num<0){
            num=musiclist.length-1;
        }
        background.css({background:`url("${musics[num].bigimg}")no-repeat`},);
        img.css('backgroundImage',`url("${musics[num].img}")`);
        myimg.css('backgroundImage',`url("${musics[num].img}")`);
        name.html(`${musics[num].who}-${musics[num].name}`);
        audio.src=`${musics[num].src}`;
        audio.play();
        $('.c-play').html('&#xe6ad;');
        musiclist.eq(num).addClass('active');
        mylists.eq(num).addClass('active');
        $('.next ul .active span').eq(0).children().eq(0).html('&#xe61c');
        //歌词清空
        $('.body .music-word').get(0).innerHTML="";
        if(musics[num].geci){
            musics[num].geci.forEach((val,index)=>{
                $(`<li id=L${index}>${val.value1}</li>`).appendTo(musicContent);
            });
        }
        $('.my-music .song-word').get(0).innerHTML="";
        if(musics[num].geci){
            musics[num].geci.forEach((val,index)=>{
                $(`<li id=M${index}>${val.value1}</li>`).appendTo($('.song-word'));
            });
        }
    });
    next.click(function(){
        $('.next ul .active span').eq(0).children().get(0).innerHTML='';
        musiclist.eq(num).removeClass('active');
        mylists.eq(num).removeClass('active');
        num++;
        if(num>musiclist.length-1){
            num=0;
        }
        background.css({background:`url("${musics[num].bigimg}")no-repeat`},);
        img.css('backgroundImage',`url("${musics[num].img}")`);
        myimg.css('backgroundImage',`url("${musics[num].img}")`);
        name.html(`${musics[num].who}-${musics[num].name}`);
        audio.src=`${musics[num].src}`;
        audio.play();
        $('.c-play').html('&#xe6ad;');
        musiclist.eq(num).addClass('active');
        mylists.eq(num).addClass('active');
        $('.next ul .active span').eq(0).children().eq(0).html('&#xe61c');
        //歌词清空
        $('.body .music-word').get(0).innerHTML="";
        if(musics[num].geci){
            musics[num].geci.forEach((val,index)=>{
                $(`<li id=L${index}>${val.value1}</li>`).appendTo(musicContent);
            });
        }
        $('.my-music .song-word').get(0).innerHTML="";
        if(musics[num].geci){
            musics[num].geci.forEach((val,index)=>{
                $(`<li id=M${index}>${val.value1}</li>`).appendTo($('.song-word'));
            });
        }
    });
//播放时时间改变，width增
    //歌曲处于播放状态时
    //获取播放进度条
    let tiaobottom=$('.play .jindu');
    //播放时小圆点
    let playcircle=$('.play .cilcre');
    //播放时已播放
    audio.ontimeupdate=function(){
        let time=audio.currentTime;
        let time2=audio.duration;
        $('.body .music-back').css('display','block');
        $('.now-time').html(getTime(time));
        $('.last-time').html(getTime(time2));
        $('.jindu').css('width',time/time2*100+'%');
        $('.cilcre').css('left',(time/time2-0.012)*100+'%');
        //歌词重绘
        if(musics[num].geci){
            musics[num].geci.forEach((val,index)=>{
                if(val.time==getTime(audio.currentTime)){
                    let i=index;
                    if(index<=5){
                        index=0;
                    }else{
                        index=index-5;
                        i=i-index;
                    }
                    musicContent.get(0).innerHTML='';
                    $('.my-music .song-word').get(0).innerHTML="";
                    for(let j=index;j<musics[num].geci.length;j++){
                        $(`<li id=L${index}>${musics[num].geci[j].value1}</li>`).appendTo(musicContent);
                        $(`<li id=M${index}>${musics[num].geci[j].value1}</li>`).appendTo($('.song-word'));
                    }
                    musicContent.children().eq(i).addClass('active');
                    $('.song-word').children().eq(i).addClass('active');
                }
            })
        }
    };
    // 点击循环
    let loop=$('.function .loop');
    let lastlist=$('.last .last-content');
    let mmlastlist=$('.my-music .mm-last .now-list');
    //每首歌结束以后，自动将当前歌曲添加到历史记录musiclasts中
    function loopWay(){
        //歌词清空
        $('.body .music-word').get(0).innerHTML="";
        //循环方式
        if(loop.attr('id')=='all-loop'){
            //列表循环歌曲结束以后，存放到历史。
            if(musiclasts == ""){
                musiclasts.push(musics[num]);
                musiclasts.forEach((obj)=>{
                    $(`<li id=l${obj.id}><span><a href="javascript:;">${obj.who}-${obj.name}</a></span><span><a href="javascript:;">${obj.time}</a></span></li>`).appendTo(lastlist);
                    $(`<li id=mm${obj.id}><span><a href="javascript:;">${obj.name}</a></span><span><a href="javascript:;">${obj.who}</a></span><span><a href="javascript:;">${obj.zj}</a></span><span><a href="javascript:;">${obj.time}</a></span></li>`).appendTo(mmlastlist);
                });
            }else{
                let a=musiclasts.some(function(val,index){
                    return val != musics[num];
                });
                if(a){
                    musiclasts.push(musics[num]);
                    lastlist.children().not($('.last-mnav')).remove();
                    mmlastlist.children().not($('.now-nav')).remove();
                    musiclasts.forEach(function(value,index){
                        $(`<li id=l${value.id}><span><a href="javascript:;">${value.who}-${value.name}</a></span><span><a href="javascript:;">${value.time}</a></span></li>`).appendTo(lastlist);
                        $(`<li id=mm${value.id}><span><a href="javascript:;">${value.name}</a></span><span><a href="javascript:;">${value.who}</a></span><span><a href="javascript:;">${value.zj}</a></span><span><a href="javascript:;">${value.time}</a></span></li>`).appendTo(mmlastlist);
                    });
                }
            }
            next.click();
        }else if(loop.attr('id')=='random-loop'){
            let randomNum=Math.round(Math.random()*(musiclist.length-1));
            musiclist.eq(num).removeClass('active');
            mylists.eq(num).removeClass('active');
            num=randomNum;
            musiclist.eq(num).addClass('active');
            mylists.eq(num).addClass('active');
            //切换信息
            background.css({background:`url("${musics[num].bigimg}")no-repeat`},);
            img.css('backgroundImage',`url("${musics[num].img}")`);
            myimg.css('backgroundImage',`url("${musics[num].img}")`);
            name.html(`${musics[num].name}`);
            audio.src=`${musics[num].src}`;
            audio.play();
            $('.c-play').html('&#xe6ad;');
        }else if(loop.attr('id')=='one-loop'){
            background.css({background:`url("${musics[num].bigimg}")no-repeat`},);
            img.css('backgroundImage',`url("${musics[num].img}")`);
            myimg.css('backgroundImage',`url("${musics[num].img}")`);
            name.html(`${musics[num].name}`);
            audio.src=`${musics[num].src}`;
            audio.play();
            $('.c-play').html('&#xe6ad;');
        }
    }
    loop.click(function(){
        if(loop.attr('id')=='all-loop'){
            loop.attr('id','random-loop');
            loop.html('&#xe601;');
            loop.attr('title','随机循环');
        }else if(loop.attr('id')=='random-loop'){
            loop.attr('id','one-loop');
            loop.html('&#xe608;');
            loop.attr('title','单曲循环');
        }else if(loop.attr('id')=='one-loop'){
            loop.attr('id','all-loop');
            loop.html('&#xe642;');
            loop.attr('title','列表循环');
        }
    });
    //点击进度
    audio.oncanplaythrough=function () {
        $('.huanchong').click(function(e){
            audio.currentTime=e.offsetX/$('.huanchong').width()*audio.duration;
        });
        $('.jindu').click(function(e){
            audio.currentTime=e.offsetX/$('.huanchong').width()*audio.duration;
        });
        audio.onended=loopWay;
    };
    //点击出现歌词
    let musicContent=$('.body .music-word');
    $('.foot .play .music-lyrics').click(function(){
        if(musicContent.attr('style')){
            musicContent.removeAttr('style');
        }else{
            musicContent.css('display','block');
            //歌词
            if(musics[num].geci){
                musicContent.get(0).innerHTML='';
                musics[num].geci.forEach((val,index)=>{
                    $(`<li id=L${index}>${val.value1}</li>`).appendTo(musicContent);
                });
            }

        }

    });
    //删除
    let dels=$('.next ul li .del');
    dels.each(function(index,value){
        $(value).children().css('color','red');
        $(value).click(function(){
            if(num==index){
                return;
            }
            if(num>index){
                num--;
            }
            if(num<0){
                num=list.children-1;
            }
            list.removeChild(value.parentNode);
            musics.splice(num-1,1);
        })
    });
//我的音乐
    let mylist=$('.now-list').get(0);
    musics.forEach((obj)=>{
        let li=document.createElement('li');
        li.id=obj.id;
        li.innerHTML=` 
                    <span><a href="javascript:;">${obj.name}</a></span>
                    <span><a href="javascript:;">${obj.who}</a></span>
                    <span><a href="javascript:;">${obj.zj}</a></span>
                    <span><a href="javascript:;">${obj.time}</a></span>`;
        $(li).appendTo($(mylist));
    });
    $('.now-list li').eq(1).addClass('active');
//点击切换
    let mylists=$('.my-music .now-list').children().not('.now-nav');
    mylists.each(function(index,val){
        $(val).on('dblclick',function(){
            $('.next ul .active span').eq(0).children().get(0).innerHTML='';
            musiclist.eq(num).removeClass('active');
            mylists.eq(num).removeClass('active');
            musiclist.eq(index).addClass('active');
            mylists.eq(index).addClass('active');
            $('.next ul .active span').eq(0).children().eq(0).html('&#xe61c');
            num=index;
            //切换信息
            background.css({background:`url("${musics[num].bigimg}")no-repeat`},);
            img.css('backgroundImage',`url("${musics[num].img}")`);
            myimg.css('backgroundImage',`url("${musics[num].img}")`);
            name.html(`${musics[num].who}-${musics[num].name}`);
            audio.src=`${musics[num].src}`;
            audio.play();
            $('.c-play').html('&#xe6ad;');
            //歌词清空
            $('.my-music .song-word').get(0).innerHTML="";
            if(musics[num].geci){
                musics[num].geci.forEach((val,index)=>{
                    $(`<li id=M${index}>${val.value1}</li>`).appendTo($('.song-word'));
                });
            }
            $('.body .music-word').get(0).innerHTML="";
            if(musics[num].geci){
                musics[num].geci.forEach((val,index)=>{
                    $(`<li id=L${index}>${val.value1}</li>`).appendTo(musicContent);
                });
            }
        });
        if(musics[0].geci){
            musics[0].geci.forEach((val,index)=>{
                $(`<li id=M${index}>${val.value1}</li>`).appendTo($('.song-word'));
            });
        }
    });
//点击历史记录
//收藏
    let collect=$('.foot .function a:nth-child(2)');
    collect.click(function(){
        if($(this).attr('style')){
            $(this).removeAttr('style');
        }else{
            $(this).css({color:'red'},);
        }
    })






















});

//{id:'$2',name:'十点半的地铁',who:'李健 ',src:'music/李健 - 十点半的地铁(Live).mp3'
  //  ,zhuanji:'十点半的地铁',bigimg:'img/big-2.jpg',img:'img/img-2.jpg'}
