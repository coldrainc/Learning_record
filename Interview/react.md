# react

- react

  - 为什么使用react
    速度快，
    跨浏览器兼容 提供标准化的API
    一切都是component 可维护性高， 重用
    单向数据流
  组件在传递属性为函数的时候需要接收参数不能直接加括号this.handle() 需要使用函数来包裹
  如 (param) => { this.handle(param) }
工作原理
  React创建一个虚拟DOM。当组件中的状态改变时，通过diff算法来标记虚拟DOM中的改变，
  第二步是调节(reconciliation)，会用diff的结果来更新真实DOM
  state
    一个状态机，根据数据改变更新视图
    state是组件自己管理的数据，控制自己的状态，相对组件自己来说是可变；
  props
    从组件外部传入组件内部的数据，一般就是父子组件的传递，可读和不可变，

  - redux的实现原理
      只是同步状态，可以使用redux-thunk或者saga
    redux将整个应用状态储存到store里面，其实就是一颗状态树
    store中每一个state对应一个View需要修改状态的时候只能通过dispatch派发一个action，然后reducer通过action来修改store里面的数据，并且使用subscribe发布订阅者模式将监听函数放进数组，当通过dispatch派发action获得新的state也就是状态后将监听函数再执行一次，就是重新渲染获取新的状态
    组件可以dispatch派发action行为给store，当reducer接收到action根据执行响应的操作，修改数据，数据修改后react组件将会重新渲染reducer纯函数
    组件来通过订阅store中的状态state来刷新视图
    redux3三大原则
      唯一数据源
      保持只读状态 组件修改数据需要通过dispatch派发action，然后执行对应的reducer来改变数据
      store中一个state对应一个View

  - react声命周期
    <https://images2015.cnblogs.com/blog/588767/201612/588767-20161205190022429-1074951616.jpg>
    constructor
      getDefaultProps
      getInitialState
    componentWillMount 多用于根组件中的应用程序配置
    render 生成虚拟的DOM节点，然后将节点渲染到页面上 不应该使用setState
    componentDidMount 在这可以完成所有没有 DOM 就不能做的所有配置，事件监听，数据获取
      React16更换了渲染框架，使用的是异步渲染，导致render之前的生命周期函数可能会被执行多次，这样就会请求多次服务器资源，产生性能问题，所以才要求把请求放到componentDidMount中
    发生改变
    componentWillReceiveProps 只改变state没有这一过程
    shouldComponentUpdate 这里可以改善性能，通过重写改函数阻止不必要的渲染。
      ture 进行更新
        componentWillUpdate 它可以用于代替组件的componentWillReceiveProps和shouldComponentUpdate但不能访问之前的props
        render
        componentDidUpdate  常用于更新 DOM，响应 prop 或 state 的改变
      false 不更新
    组件卸载时触发
    UnMount
    componentWillMount  在这你可以取消网络请求，或者移除所有与组件相关的事件监听器
    结束

  - router
    路由其实就是保住视图和URL的同步，用户通过手动输入或者页面交互来改变URL，然后通过同步或者异步来向服务器发送请求
    通过对应的URL来渲染对应的视图
    其实就是react的组件
     history 对象是整个路由系统的核心
     hash hashChange
    withRouter 高阶组件通过context来给没有经过Route渲染的组件提供 history， match， location

  - 性能优化
    - render里面尽量减少新建变量和bind函数
    - 使用 production 版本的react.js
    - 使用key来帮助React识别列表中所有子组件的最小变化。
    - 在传递属性的时候，函数在组件的构造函数中使用bind绑定this
      因为在构造函数中绑定只会渲染一次不会每次都渲染
      其他两种方法每次执行render()的时候都会绑定一次
    - 在组件传递属性的时候应该先定义在使用，否则每次使用子组件时都会生成的对象
      例如
      <component style={ {color: 'red'} }>
      应该为
      const style={
        color: 'red'
      }
      <component style={ style }></component>
    - pureComponent 只是浅比较 没有内部状态时使用
      通过重写shouldComponentUpdate来优化
      当props/state 和 nextProps和nextState 一致则返回false 组件不更新
      否则组件更新
      immutableJS 进行深层比较
      然后使用is()函数来比较 两个immutable数据是否相同
      在遍历的时候 key 不要使用index 索引 因为当遍历的时候顺序不一样会导致key的变化，会造成性能浪费

  - setState 不能保证同步
    在合成事件和钩子函数中是异步的，在原生事件和setTimeout中是同步的
    - 合成事件 onChange onClick
      为了避免DOM事件的滥用导致性能受影响，屏蔽不同浏览器之间底层的差异 就是将DOM事件进行了一个封装
      在document处监听所有支持的事件，当事件发生并冒泡至document处时，React将事件内容封装交给中间层SyntheticEvent（负责所有事件合成）当事件触发的时候，对使用统一的分发函数dispatchEvent将指定函数执行。

      react的onClick本身就是事件委托了，和原生JS的onclick不一样，所以你可以直接在li上面绑定，建议不要这样写li。

    - 钩子函数 生命周期函数 hooks 本质上就是一类特殊的函数
    合成事件和钩子函数的调用顺序在更新之前，导致合成事件和钩子函数没办法拿到更新后的值
    父组件传递给子组件state的时候，props是不能同步刷新的re-render不能同步刷新
    不能保证同步执行 是性能优化
    调用setState的时候并不会立马修改state，而是把需要修改的状态放在一个队列中， React会优化真正的执行机制，并且出于性能原因会将多次setState合并成一次修改，
    setState会在最后批量执行
    在更新组建时，将更新的state合并到原state是在componentWillUpdate之后，render之前，所以在componentWillUpdate之前设置的setState可以在render中拿到最新值。

  保证数据统一

  - redux-thunk中间件
    处理异步操作
    创建的action函数返回可以是一个函数参数为dispatch， getState，然后在函数里面dispatch一个action
    function add() {
        return {
            type: 'ADD',
        }
    }
    function addIfOdd() {
        return (dispatch, getState) => {
            const currentValue = getState();
            if (currentValue % 2 == 0) {
                return false;
            }
            //分发一个任务
            dispatch(add())
        }
    }

  - 可控组件
    维护自身状态
    组件的状态都是有组件自己来控制，也就是状态都是state中，而不是由DOM来控制

  - react element 和component 有什么区别
    element描述了UI，是一些对UI对象表示，而component是一个函数或者类，接受输入和返回一个react element

  - refs
    Refs 是 React 提供给我们的安全访问 DOM 元素或者某个组件实例的句柄。我们可以为元素添加ref属性然后在回调函数中接受该元素在 DOM 树中的句柄，该值会作为回调函数的第一个参数返回
    正确用法 <component ref={(input) => this.input = input} />

  - keys
    Keys 是 React 用于追踪哪些列表中元素被修改、被添加或者被移除的辅助标识。
    Diff 算法中 React 会借助元素的 Key 值来判断该元素是新近创建的还是被移动而来的元素，从而减少不必要的元素重渲染，有助于提高性能，
    每个key在兄弟元素间是独一无二的，并且在map的过程中最好不要使用index作为key，因为当顺序改变时key发生了改变，React会认为数据发生了改变，就会重新渲染，造成性能浪费。

  
  - 虚拟dom
    使用js对象来模拟真实的DOM树，数据更新的时候创建新的虚拟DOM通过新旧对比来获取差异，然后通过特定的render将差异的虚拟DOM渲染成真实的DOM
    虚拟DOM进行频繁修改，然后一次性比较并修改真实DOM中需要改的部分（注意！），最后并在真实DOM中进行排版与重绘，减少过多DOM节点排版与重绘损耗
    虚拟DOM有效降低大面积（真实DOM节点）的重绘与排版，因为最终与真实DOM比较差异，可以只渲染局部
    真实DOM频繁排版与重绘的效率是相当低的
    例如查询操作，只需要在虚拟dom重进行操作，当需要修改的时候只需要先查询，如果需要修改，在去操作真是DOM，
    而没有虚拟DOM每次都需要去对DOM进行操作，而DOM操作相对于js来说很浪费性能
    ：每当你想对视图进行一次更新，那些本该直接作用于真实DOM的改动，都会先作用于Virtual DOM，然后再将要改动的部分通知到真实DOM。这样可以大幅减少DOM操作带来的重计算步骤。
    这样一来，当你在这个单独的虚拟的DOM树上也一个接一个地修改30个节点的时候，它不会每次都去触发重绘，所以修改节点的开销就变小了。 之后，一旦你要把这些改动传递给真实DOM，之前所有的改动就会整合成一次DOM操作。这一次DOM操作引起的布局计算和重绘可能会更大，但是相比而言，整合起来的改动只做一次，减少了（多次）计算。
  
  - diff算法
      通过对比虚拟DOM和新的虚拟DOM 传统算法 复杂度为n的3次方
    只对同级的节点进行比较
    比较组件类型 组件名字
    同一层级的节点通过key来区分
    合并操作，调用component的setState的时候，将其标记为dirty，到每一个事件循环结束，react检查所有的dirty的component重新绘制
    选择性渲染子树，可以通过重写shouldComponentUpdate来提高性能
    
    每当您在组件上调用setState时，React会将其标记为脏。 在事件循环结束时，React会查看所有脏组件并重新渲染它们
    

  - 类组件和函数组件
    类组件有更多额外的功能，如组件自身状态和生命周期函数等，也能使组件访问store并维持状态
    当组件仅仅是接受的props，并将组件自身渲染到页面，该组件就是一个无状态组件，这时可以使用函数来创建这样的组件
  - 在 super() 被调用之前，子类是不能使用 this 的，在 ES2015 中，子类必须在 constructor 中调用 super()。传递 props 给    super() 的原因则是便于(在子类中)能在 constructor 访问 this.props。
  - react 新特性
    - hooks
    就是在 react 函数组件中，也可以使用类组件（classes components）的 state 和 组件生命周期，而不需要在 mixin、 函数组件、HOC组件和 render props 之间来回切换，使得函数组件的功能更加实在，更加方便我们在业务中实现业务逻辑代码的分离和组件的复用。
    useState 可以为函数组件提供state
    useEffect 提供类似componentDidMount的功能
    useContext useReducer useCallback
    为函数组件提供一些特殊的功能
    - 新的生命周期
      将会删除 componentWillMount componentWillReceiveProps componentWillUpdate
      添加getDerivedStateFromProps getSnapshotBeforeUpdate
      https://juejin.im/post/5b6f1800f265da282d45a79a#heading-12

  - 阻止渲染
    setState return null
    shouldComponentUpdate 返回false
    render return null
  
  - 如何告诉React应该编译生成版本
    通常使用Webpack中的DefinPlugin方法将NODE_EVN设置为production
  - 性特性
    错误处理 默认情况下某个组件出错，这个组件就会从组件树中卸载，而不是整个应用都需要刷新
    render 返回类型增加， string boolean number null portal
    setState 传入为null时不会触发更新
    https://blog.csdn.net/wangrong111222/article/details/81106761
  - fiber
  
- create-react-app
  postCss 自动添加前缀
  
- redux-thunk 和 redux-saga的区别
  - 使用redux-thunk不易于维护，每个异步操作都需要定义一个action
    通过在dispatch 和reducer中间添加一个中间件
    action形式不统一，就是每个都要写一个
    异步操作太分散，异步操作在各个actio里面
  - 使用redux-saga
    通过generator实现的
    effect 本质是一个特定的函数，返回的就是给特定的函数，返回的纯文本
    异步操作——>Effect函数——>纯文本对象——>saga-middleware——>执行异步操作
    集中处理了所有的异步操作，异步接口部分一目了然
    action是普通对象，这跟redux同步的action一模一样
    通过Effect，方便异步接口的测试
    通过worker 和watcher可以实现非阻塞异步调用，并且同时可以实现非阻塞调用下的事件监听
    异步操作的流程是可以控制的，可以随时取消相应的异步操作。
- umi 约定式的
  是一个可插拔的企业级 react 应用框架。umi 以路由为基础的
  约定式路由以及各种进阶的路由功能，并以此进行功能扩展，比如支持路由级的按需加载。
  然后配以完善的插件体系，覆盖从源码到构建产物的每个生命周期，
  支持各种功能扩展和业务需求，
- dva有什么作用
   其实就是集成了redux redux-saga 还内置了react-router
- react.lazy react suspense
  lazy 动态引入
  Suspense组件用于包装lazy组件，在lazy组件还没有完全加载时，将fallback内容呈现给用户。
  用动态加载，编译时会将文件分割，从加载文件到呈现会有时间延迟，此时可以使用Suspense展示一个loading。
  使用lazy动态加载，配合suspense使用，当lazy非常耗时处于加载的时候，使用suspense包裹，先展示fallback里面的组件
- ErrorBoundary 组件， 处理错误
  作为外层的组件，可以将出错的组件统一处理错误
  