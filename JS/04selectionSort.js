// 选择排序（从小到大）：每次找出未排序序列中最小的元素放在序列
// 起始位置，然后在未排序列中继续找最小的元素放在已排序列的末尾；
// 依次类推
// 原理：1、外层for循环控制无序列表的第一个元素i，从0到N-1
// 			 2、内层for循环找出无序列表的最小元素索引min
// 			 3、交换i和min索引所在位置的值
// 优化：堆排序是对选择排序的优化，利用小顶堆找出最小元素的索引
function selectionSort(arr) {
	var len = arr.length;
	for(i = 0;i <= len-1;i ++) {
		var min = i;
		for(j = i + 1;j <= len - 1;j ++) {
			if(arr[j] < arr[min]) 
				min = j;
		}
		swap(arr,min,i);
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
function createArr(length) {
	var arr = new Array();
	for(i = 0;i < length;i ++) {
		arr[i] = Math.floor(Math.random() * length) + 1;
	}
	return arr;
}
var testArr1 = createArr(100);
console.log(selectionSort(testArr1));
// console.log(bubbleSort2(testArr2));