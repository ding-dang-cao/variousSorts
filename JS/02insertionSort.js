// 插入排序（从小到大）思路，将插入想象成摸一手牌，每摸进来一张牌j，要依次和手中已有牌（从后往前扫描）
// 比较大小，如果手中的牌比摸进来的牌大，手中的牌往后挪一位（j-1的值放在i的位置），否则，摸进来的牌就
// 放在i的位置。
// 1、依次摸入;对于数组元素0到N-1；假定下标0已经在手上，从下标1开始摸牌到N-1，将摸进来的值存在临时变量
// 中.这是外层循环要做的事情；
// 2、旧牌让位；内层循环负责判断前面的牌要不要挪位，将临时变量与已经排好序的序列从后向前
// 扫描地比较大小，当满足新牌i>=1并且arr[j-1]>arr[j]的时候，给新牌让位置，arr[j] = arr[j-1];
// 3、新牌落位；从内层循环跳出来的情况，不需要挪位或者已经挪好位，直接插进去，arr[j] = temp;
// 优化：
// 1、插入排序每一次交换都是相邻的两个元素，每次只能消除一个逆序对，我们可以跳着交换，这样可能一次
// 可以消除几个逆序对，引出了后面的希尔排序，采用增量序列
function insertionSort(arr) {
	var len = arr.length;
	for(var i = 1;i <= len -1;i ++) {
		var temp = arr[i];
		for(var j = i;j >= 1 && arr[j-1] > temp;j --) {		
			arr[j] = arr[j-1];
		}
		arr[j] = temp;
	}
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
console.log(insertionSort(testArr1));
// console.log(bubbleSort2(testArr1));
