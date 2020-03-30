import React from 'react';
import Container from '@/screen/Container';
import { Title, Label, Paragraph, CodeBlock, ListItem } from '@/components/SubComponent';

class VueNextTick extends React.Component {
    render () {
        return (
            <Container>
                <div style={{padding: '0 10px'}}>
                    <Title title={'全面解析Vue.nextTick实现原理'}></Title>
                    <Paragraph title={'vue中有一个较为特殊的API，nextTick。根据官方文档的解释，它可以在DOM更新完毕之后执行一个回调，用法如下：'}></Paragraph>
<CodeBlock content={
`// 修改数据
vm.msg = 'Hello'
// DOM 还没有更新
Vue.nextTick(function () {
    // DOM 更新了
})
`}></CodeBlock>
                    <Paragraph title={'尽管MVVM框架并不推荐访问DOM，但有时候确实会有这样的需求，尤其是和第三方插件进行配合的时候，免不了要进行DOM操作。而nextTick就提供了一个桥梁，确保我们操作的是更新后的DOM。'}></Paragraph>
                    <Paragraph title={'本文从这样一个问题开始探索：vue如何检测到DOM更新完毕呢？'}></Paragraph>
                    <Paragraph title={'检索一下自己的前端知识库，能监听到DOM改动的API好像只有MutationObserver了，后面简称MO.'}></Paragraph>
                    <Label title={'理解MutationObserver'}></Label>
                    <Paragraph title={'MutationObserver是HTML5新增的属性，用于监听DOM修改事件，能够监听到节点的属性、文本内容、子节点等的改动，是一个功能强大的利器，基本用法如下：'}></Paragraph>
<CodeBlock content={
`///MO基本用法
var observer = new MutationObserver(function(){
    //这里是回调函数
    console.log('DOM被修改了！');
});
var article = document.querySelector('article');
observer.observer(article);
`}></CodeBlock>
                    <Paragraph title={'MO的使用不是本篇重点。这里我们要思考的是：vue是不是用MO来监听DOM更新完毕的呢？'}></Paragraph>
                    <Paragraph title={'那就打开vue的源码看看吧，在实现nextTick的地方，确实能看到这样的代码：'}></Paragraph>
<CodeBlock content={
`//vue@2.2.5 /src/core/util/env.js
if (typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) || MutationObserver.toString() === '[object MutationObserverConstructor]')) {
    var counter = 1
    var observer = new MutationObserver(nextTickHandler)
    var textNode = document.createTextNode(String(counter))
    observer.observe(textNode, {
        characterData: true
    })
    timerFunc = () => {
        counter = (counter + 1) % 2
        textNode.data = String(counter)
    }
}
`}></CodeBlock>
                    <Paragraph title={'简单解释一下，如果检测到浏览器支持MO，则创建一个文本节点，监听这个文本节点的改动事件，以此来触发nextTickHandler（也就是DOM更新完毕回调）的执行。后面的代码中，会执行手工修改文本节点属性，这样就能进入到回调函数了。'}></Paragraph>
                    <Paragraph title={'大体扫了一眼，似乎可以得到实锤了：哦！vue是用MutationObserver监听DOM更新完毕的！'}></Paragraph>
                    <Paragraph title={'难道不感觉哪里不对劲吗？让我们细细想一下：'}></Paragraph>
                    <Paragraph title={'1.我们要监听的是模板中的DOM更新完毕，vue为什么自己创建了一个文本节点来监听，这有点说不通啊！'}></Paragraph>
                    <Paragraph title={'2.难道自己创建的文本节点更新完毕，就能代表其他DOM节点更新完毕吗？这又是什么道理！'}></Paragraph>
                    <Paragraph title={'看来我们上面得出的结论并不对，这时候就需要讲讲js的事件循环机制了。'}></Paragraph>
                    <Label title={'事件循环（Event Loop）'}></Label>
                    <Paragraph title={'在js的运行环境中，我们这里光说浏览器吧，通常伴随着很多事件的发生，比如用户点击、页面渲染、脚本执行、网络请求，等等。为了协调这些事件的处理，浏览器使用事件循环机制。'}></Paragraph>
                    <Paragraph title={'简要来说，事件循环会维护一个或多个任务队列（task queues），以上提到的事件作为任务源往队列中加入任务。有一个持续执行的线程来处理这些任务，每执行完一个就从队列中移除它，这就是一次事件循环了，如下图所示：'}></Paragraph>
                    <img style={{width: '100%'}} src="data:image/webp;base64,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" alt="123"/>
                    <Paragraph title={'我们平时用setTimeout来执行异步代码，其实就是在任务队列的末尾加入了一个task，待前面的任务都执行完后再执行它。'}></Paragraph>
                    <Paragraph title={'关键的地方来了，每次event loop的最后，会有一个UI render步骤，也就是更新DOM。标准为什么这样设计呢？考虑下面的代码：'}></Paragraph>
<CodeBlock content={
`for(let i=0; i<100; i++){
        dom.style.left = i + 'px';
}
`}></CodeBlock>
                    <Paragraph title={'浏览器会进行100次DOM更新吗？显然不是的，这样太耗性能了。事实上，这100次for循环同属一个task，浏览器只在该task执行完后进行一次DOM更新。'}></Paragraph>
                    <Paragraph title={'那我们的思路就来了：只要让nextTick里的代码放在UI render步骤后面执行，岂不就能访问到更新后的DOM了？'}></Paragraph>
                    <Paragraph title={'vue就是这样的思路，并不是用MO进行DOM变动监听，而是用队列控制的方式达到目的。那么vue又是如何做到队列控制的呢？我们可以很自然的想到setTimeout，把nextTick要执行的代码当作下一个task放入队列末尾。'}></Paragraph>
                    <Paragraph title={'然而事情却没这么简单，vue的数据响应过程包含：数据更改->通知Watcher->更新DOM。而数据的更改不由我们控制，可能在任何时候发生。如果恰巧发生在repaint之前，就会发生多次渲染。这意味着性能浪费，是vue不愿意看到的。'}></Paragraph>
                    <Paragraph title={'所以，vue的队列控制是经过了深思熟虑的（也经过了多次改动）。在这之前，我们还需了解event loop的另一个重要概念，microtask.'}></Paragraph>
                    <Label title={'microtask'}></Label>
                    <Paragraph title={'从名字看，我们可以把它称为微任务。对应的，task队列中的任务也被叫做macrotask。名字相似，性质可不一样了。'}></Paragraph>
                    <Paragraph title={'每一次事件循环都包含一个microtask队列，在循环结束后会依次执行队列中的microtask并移除，然后再开始下一次事件循环。'}></Paragraph>
                    <Paragraph title={'在执行microtask的过程中后加入microtask队列的微任务，也会在下一次事件循环之前被执行。也就是说，macrotask总要等到microtask都执行完后才能执行，microtask有着更高的优先级。'}></Paragraph>
                    <Paragraph title={'microtask的这一特性，简直是做队列控制的最佳选择啊！vue进行DOM更新内部也是调用nextTick来做异步队列控制。而当我们自己调用nextTick的时候，它就在更新DOM的那个microtask后追加了我们自己的回调函数，从而确保我们的代码在DOM更新后执行，同时也避免了setTimeout可能存在的多次执行问题。'}></Paragraph>
                    <Paragraph title={'常见的microtask有：Promise、MutationObserver、Object.observe(废弃)，以及nodejs中的process.nextTick.'}></Paragraph>
                    <Paragraph title={'咦？好像看到了MutationObserver，难道说vue用MO是想利用它的microtask特性，而不是想做DOM监听？对喽，就是这样的。核心是microtask，用不用MO都行的。事实上，vue在2.5版本中已经删去了MO相关的代码，因为它是HTML5新增的特性，在iOS上尚有bug。'}></Paragraph>
                    <Paragraph title={'那么最优的microtask策略就是Promise了，而令人尴尬的是，Promise是ES6新增的东西，也存在兼容问题呀~ 所以vue就面临一个降级策略。'}></Paragraph>
                    <Label title={'vue的降级策略'}></Label>
                    <Paragraph title={'上面我们讲到了，队列控制的最佳选择是microtask，而microtask的最佳选择是Promise.但如果当前环境不支持Promise，vue就不得不降级为macrotask来做队列控制了。'}></Paragraph>
                    <Paragraph title={'macrotask有哪些可选的方案呢？前面提到了setTimeout是一种，但它不是理想的方案。因为setTimeout执行的最小时间间隔是约4ms的样子，略微有点延迟。还有其他的方案吗？'}></Paragraph>
                    <Paragraph title={'不卖关子了，在vue2.5的源码中，macrotask降级的方案依次是：setImmediate、MessageChannel、setTimeout.'}></Paragraph>
                    <Paragraph title={'setImmediate是最理想的方案了，可惜的是只有IE和nodejs支持。'}></Paragraph>
                    <Paragraph title={'常见的microtask有：Promise、MutationObserver、Object.observe(废弃)，以及nodejs中的process.nextTick.'}></Paragraph>
                    <Paragraph title={'MessageChannel的onmessage回调也是microtask，但也是个新API，面临兼容性的尴尬...'}></Paragraph>
                    <Paragraph title={'所以最后的兜底方案就是setTimeout了，尽管它有执行延迟，可能造成多次渲染，算是没有办法的办法了。'}></Paragraph>
                    <Label title={'总结'}></Label>
                    <Paragraph title={'以上就是vue的nextTick方法的实现原理了，总结一下就是：'}></Paragraph>
                    <ListItem list={[
                        'vue用异步队列的方式来控制DOM更新和nextTick回调先后执行',
                        'microtask因为其高优先级特性，能确保队列中的微任务在一次事件循环前被执行完毕',
                        '因为兼容性问题，vue不得不做了microtask向macrotask的降级方案'
                    ]}></ListItem>
                </div>
            </Container>
        );
    }
}

export default VueNextTick;