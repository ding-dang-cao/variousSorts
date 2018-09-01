// 选择排序（从小到大）：每次找出未排序序列中最小的元素放在序列
// 起始位置，然后在未排序列中继续找最小的元素放在已排序列的末尾；
// 依次类推
// 原理：1、外层for循环控制无序列表的第一个元素i，从0到N-1
// 			 2、内层for循环找出无序列表的最小元素索引min
// 			 3、交换i和min索引所在位置的值
// 优化：堆排序是对选择排序的优化，改变了数据结构和找最小值的方法
// 思路：先将元素按顺序构建成树，再调整为大顶堆；将根元素与最后一
// 个元素互换，再调成大顶堆；这样依次类推，树的索引对应的值成从小
// 到大排列
function heapSort(arr) {
	var len = arr.length;
	for(var i = Math.floor(len / 2) - 1;i >= 0;i --) {
		adjustHeap(arr,i,len);// 将len个元素的数组中以arr[i]为根的
		// 子堆调成最大堆
	}// 创建堆，从最后一个根节点开始，遍历所有根节点，调成大顶堆
	for(var j = len - 1;j > 0;j --) {
		swap(arr,0,j); // 将0位置的最大元素放到最后一位
		adjustHeap(arr,0,j);// 将j个元素的数组中以arr[0]为根的
		// 子堆调成大顶堆
	}
	return arr;
}
function swap(arr,index1,index2) {
	var temp = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = temp;
	// 不用temp
	// arr[index1] = arr[index1] + arr[index2];
	// arr[index2] = arr[index1] - arr[index2];
	// arr[index1] = arr[index1] - arr[index2];
}
function adjustHeap(arr,root,N) {
	var temp = arr[root]; // 取出根节点的值
	var child;
	for(parent = root;(parent * 2 + 1) <= N-1;parent = child) {
		child = 2 * parent + 1; // 左儿子
		if((child != N -1) && (arr[child] < arr[child + 1]))
			child ++; // child指向的是最大的儿子，当child不是N-1，
		// 说明有右儿子，再比较他俩大小。
		if(temp >= arr[child]) break;
		else
			arr[parent] = arr[child];
	}
	arr[parent] = temp;
}
function createArr(length) {
	var arr = new Array();
	for(i = 0;i < length;i ++) {
		arr[i] = Math.floor(Math.random() * length) + 1;
	}
	return arr;
}
var testArr1 = createArr(100);
console.log(heapSort(testArr1));
// console.log(bubbleSort2(testArr2));