/*
 * @Author: shmao
 * @Date: 2020-10-06 19:44:21
 * @LastEditors: shmao
 * @LastEditTime: 2020-10-07 00:02:29
 */

// 策略模式利用组合、委托和多态等技术和思想，可以有效地避免多重条件选择语句。
//  策略模式提供了对开放—封闭原则的完美支持，将算法封装在独立的 strategy 中，使得它
// 们易于切换，易于理解，易于扩展。
//  策略模式中的算法也可以复用在系统的其他地方，从而避免许多重复的复制粘贴工作。
//  在策略模式中利用组合和委托来让 Context 拥有执行算法的能力，这也是继承的一种更轻
// 便的替代方案。
// 当然，策略模式也有一些缺点，但这些缺点并不严重。
// 首先，使用策略模式会在程序中增加许多策略类或者策略对象，但实际上这比把它们负责的
// 逻辑堆砌在 Context 中要好。
// 其次，要使用策略模式，必须了解所有的 strategy，必须了解各个 strategy 之间的不同点，
// 这样才能选择一个合适的 strategy。比如，我们要选择一种合适的旅游出行路线，必须先了解选
// 择飞机、火车、自行车等方案的细节。此时 strategy 要向客户暴露它的所有实现，这是违反最少
// 知识原则的。
