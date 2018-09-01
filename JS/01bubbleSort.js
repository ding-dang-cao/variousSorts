// 冒泡排序(从小到大大)及其优化
// 	1、外层循环控制每一趟冒泡的元素个数，每冒泡一次，最大的元素在最末尾，下一趟冒泡的个数减1
//   2、内层循环定义一趟冒泡要做的事情，将大的元素往后放，如果元素j>j+1，交换两个元素的位置
// 优化：
//   1、如果已经排好了，可以让程序结束掉，不用再排。我们添加一个sortFlag,初始化为1，只要有交换
//      将其置0；如果某一趟冒泡，flag为1，就说明排好了
// 插入排序（从小到大）思路，将插入想象成摸一手牌，每摸进来一张牌i，要依次和手中已有牌（从后往前扫描）
// 比较大小，如果手中的牌比摸进来的牌大，手中的牌往后挪一位（i-1的值放在i的位置），否则，摸进来的牌就
// 放在i的位置。
// 对于数组元素0到N-1；假定下标0已经在手上，从下标1开始摸牌，一直摸到下标N-1，这是外层循环要做的事情；
// 内层循环负责放好摸进来的每一张牌，将摸进来的值存在临时变量中，将临时变量与已经排好序的序列从后向前
// 扫描地比较大小，当满足新牌i>=1并且arr[i-1]>arr[i]的时候，给新牌让位置，arr[i] = arr[i-1];
// 否则arr[i] = temp;
// 优化：插入排序每一次交换都是相邻的两个元素，每次只能消除一个逆序对，我们可以跳着交换，这样可能一次
// 可以消除几个逆序对，引出了后面的希尔排序，采用增量序列
function bubbleSort1(arr) {
	console.time("1、冒泡排序耗时");
	var len = arr.length;
	for(var i = len - 1;i >= 2;i --) {
		for(var j = 0;j <= i;j ++) {
			if(arr[j] > arr[j+1]) {
				swap(arr,j,j + 1);
			}
		}
	}
	console.timeEnd("1、冒泡排序耗时")
	return arr;
}
function swap(arr,index1,index2) {
	var temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
	// 不用中间变量
	// a = a + b;
	// b = a - b;
	// a = a - b;
}
// 优化点1：设置sortFlag,当已经是顺序的时候不需要再排序了，break出来
function bubbleSort2(arr) {
	console.time("2、优化冒泡排序耗时");
	var len = arr.length;
	for(var i = len -1;i >= 2;i --) {
		var sortFlag = 0;
		for(var j = 0;j <= i;j ++) {
			if(arr[j] > arr[j+1]) {
				swap(arr,j,j+1);
				sortFlag = 1;
			}
		}
		if(sortFlag === 0)
			break;
	}
	console.timeEnd("2、优化冒泡排序耗时");
	return arr;
}
function createArr(length) {
	var arr = new Array();
	for(i = 0;i < length;i ++) {
		arr[i] = Math.floor(Math.random() * length) + 1;
	}
	return arr;
}
var testArr1 = createArr(100);
var testArr2 = createArr(100);
console.log(bubbleSort1(testArr1));
console.log(bubbleSort2(testArr2));
